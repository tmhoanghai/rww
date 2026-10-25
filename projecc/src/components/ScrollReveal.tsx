import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  threshold?: number;
  scale?: boolean;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  distance = 32,
  threshold = 0.04,
  scale = false,
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setIsVisible(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,

        rootMargin: '10px 0px -20px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)';

    switch (direction) {
      case 'up': return `translate3d(0, ${distance}px, 0) scale(${scale ? 0.96 : 1})`;
      case 'down': return `translate3d(0, -${distance}px, 0) scale(${scale ? 0.96 : 1})`;
      case 'left': return `translate3d(${distance}px, 0, 0) scale(${scale ? 0.96 : 1})`;
      case 'right': return `translate3d(-${distance}px, 0, 0) scale(${scale ? 0.96 : 1})`;
      default: return 'translate3d(0, 0, 0) scale(1)';
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: isVisible ? '700ms' : '400ms',
        transitionTimingFunction: isVisible ? 'cubic-bezier(0.16, 1, 0.3, 1)' : 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}

interface ParallaxWrapperProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxWrapper({ children, speed = 0.08, className = '' }: ParallaxWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - windowHeight / 2;

      const newOffset = distanceFromCenter * speed;
      setOffsetY(newOffset);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-75 ease-out ${className}`}
      style={{
        transform: `translate3d(0, ${offsetY.toFixed(2)}px, 0)`,
      }}
    >
      {children}
    </div>
  );
}
