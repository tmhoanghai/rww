import { Info, Plane, Sparkles, Home } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: 'info' | 'route';
  onSelectTab: (tab: 'info' | 'route') => void;
  onOpenBooking: () => void;
}

export default function MobileBottomNav({
  activeTab,
  onSelectTab,
  onOpenBooking
}: MobileBottomNavProps) {
  return (
    <aside 
      aria-label="Thanh điều hướng di động"
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t transition-colors bg-[#17140F]/95 backdrop-blur-lg border-[#2E271D] shadow-[0_-4px_20px_rgba(0,0,0,0.5)] font-mono"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}
    >
      <div className="grid grid-cols-3 items-center px-4 py-2 max-w-md mx-auto">

        <button
          onClick={() => {
            onSelectTab('info');
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === 'info'
              ? 'text-amber-400 bg-amber-400/10 font-bold'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <div className="relative">
            <Info size={20} className={activeTab === 'info' ? 'stroke-[2.5]' : 'stroke-2'} />
            {activeTab === 'info' && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
            )}
          </div>
          <span className="text-[11px] mt-1 leading-none tracking-tight">Thông tin</span>
        </button>

        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center cursor-pointer group -mt-2"
        >
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold transition-transform active:scale-95 bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-300 text-slate-950 shadow-lg shadow-amber-500/40 border-2 border-amber-200">
            <Sparkles size={22} className="fill-slate-950" />
          </div>
          <span className="text-[11px] mt-1 font-bold text-amber-400 leading-none">Báo giá</span>
        </button>

        <button
          onClick={() => {
            onSelectTab('route');
            window.scrollTo({ top: 0, behavior: 'auto' });
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all cursor-pointer ${
            activeTab === 'route'
              ? 'text-amber-400 bg-amber-400/10 font-bold'
              : 'text-stone-400 hover:text-stone-200'
          }`}
        >
          <div className="relative">
            <Home size={20} className={activeTab === 'route' ? 'stroke-[2.5]' : 'stroke-2'} />
            {activeTab === 'route' && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-400" />
            )}
          </div>
          <span className="text-[11px] mt-1 leading-none tracking-tight">Lộ trình</span>
        </button>
      </div>
    </aside>
  );
}
