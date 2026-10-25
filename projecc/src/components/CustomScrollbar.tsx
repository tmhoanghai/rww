import { useEffect, useState, useRef, useCallback } from 'react';

interface CustomScrollbarProps {
  lang?: 'VI' | 'EN';
}

export default function CustomScrollbar({ lang = 'VI' }: CustomScrollbarProps) {
  const isEn = lang === 'EN';
  const [thumbHeight, setThumbHeight] = useState(45);
  const [thumbTop, setThumbTop] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);
  const dragStartY = useRef(0);
  const dragStartScrollY = useRef(0);

  const updateScrollData = useCallback(() => {
    if (!trackRef.current) return;
    const trackHeight = trackRef.current.clientHeight;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    if (docHeight <= winHeight) {
      setThumbHeight(trackHeight);
      setThumbTop(0);
      return;
    }

    const ratio = winHeight / docHeight;
    const calculatedHeight = Math.max(48, trackHeight * ratio);
    setThumbHeight(calculatedHeight);

    const maxScroll = docHeight - winHeight;
    const currentScroll = window.scrollY;
    const scrollRatio = Math.min(1, Math.max(0, currentScroll / maxScroll));
    const maxTop = trackHeight - calculatedHeight;
    setThumbTop(scrollRatio * maxTop);
  }, []);

  useEffect(() => {
    const timer = setTimeout(updateScrollData, 50);

    window.addEventListener('scroll', updateScrollData, { passive: true });
    window.addEventListener('resize', updateScrollData);

    const observer = new ResizeObserver(() => {
      updateScrollData();
    });
    observer.observe(document.body);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', updateScrollData);
      window.removeEventListener('resize', updateScrollData);
      observer.disconnect();
    };
  }, [updateScrollData]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    dragStartY.current = e.clientY;
    dragStartScrollY.current = window.scrollY;
    document.body.style.userSelect = 'none';
  };

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!trackRef.current) return;
      const trackHeight = trackRef.current.clientHeight;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(1, docHeight - winHeight);

      const deltaY = e.clientY - dragStartY.current;
      const maxTop = Math.max(1, trackHeight - thumbHeight);
      const scrollDelta = (deltaY / maxTop) * maxScroll;
      const newScroll = Math.min(maxScroll, Math.max(0, dragStartScrollY.current + scrollDelta));

      window.scrollTo({
        top: newScroll,
        behavior: 'instant' as ScrollBehavior,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, thumbHeight]);

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!trackRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const clickY = e.clientY - trackRect.top;
    const trackHeight = trackRect.height;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(1, docHeight - winHeight);

    const targetScroll = (clickY / trackHeight) * maxScroll;

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed right-0 top-0 bottom-0 z-50 transition-all duration-300 pointer-events-auto select-none ${
        isHovered || isDragging ? 'w-4 sm:w-5' : 'w-3 sm:w-3.5'
      }`}
    >

      <div 
        ref={trackRef}
        onClick={handleTrackClick}
        className="relative w-full h-full bg-gradient-to-b from-stone-950 via-black to-stone-950 border-l border-stone-800/90 shadow-2xl cursor-pointer overflow-hidden backdrop-blur-md"
        title={isEn ? 'Scroll track' : 'Thanh cuộn'}
      >

        <div 
          onMouseDown={handleMouseDown}
          onClick={(e) => e.stopPropagation()}
          className={`absolute left-0.5 right-0.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 rounded-full cursor-pointer shadow-[0_0_12px_rgba(245,158,11,0.5)] transition-all duration-200 ${
            isDragging ? 'brightness-125 scale-x-95 ring-2 ring-amber-300/50' : 'hover:brightness-110'
          }`}
          style={{ 
            top: `${thumbTop}px`,
            height: `${thumbHeight}px`,
          }}
        >

          <div className="absolute inset-x-1 top-1 bottom-1 rounded-full border border-white/40 pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
