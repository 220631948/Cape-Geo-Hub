import React from 'react';
import {
  Bus,
  ShieldAlert,
  Leaf,
  Building2,
  Zap,
  Home,
  ChevronLeft,
  ChevronRight,
  Layers,
  type LucideIcon
} from 'lucide-react';

export type ModuleType = 'services' | 'transport' | 'safety' | 'environment' | 'landuse' | 'utilities';

interface SidebarProps {
  isOpen: boolean;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
  activeModule: ModuleType | null;
  onModuleChange: (module: ModuleType) => void;
}

const MODULES: { id: ModuleType; label: string; icon: LucideIcon }[] = [
  { id: 'services', label: 'Services', icon: Home },
  { id: 'transport', label: 'Transport', icon: Bus },
  { id: 'safety', label: 'Safety', icon: ShieldAlert },
  { id: 'environment', label: 'Environment', icon: Leaf },
  { id: 'landuse', label: 'Land Use', icon: Building2 },
  { id: 'utilities', label: 'Utilities', icon: Zap },
];

const SidebarBase: React.FC<SidebarProps> = ({
  isOpen,
  isCollapsed,
  onToggleCollapse,
  onCloseMobile,
  activeModule,
  onModuleChange
}) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={onCloseMobile}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`
          fixed md:static inset-y-0 left-0 z-40
          flex flex-col bg-white border-r border-gray-200 shadow-xl md:shadow-none
          transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          ${isCollapsed ? 'w-[60px]' : 'w-[300px]'}
          top-[60px] h-[calc(100vh-60px)]
        `}
      >
        {/* Toggle Collapse Button (Desktop only) */}
        <div className="absolute -right-3 top-4 hidden md:flex">
          <button
            onClick={onToggleCollapse}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 text-gray-500"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
          </button>
        </div>

        {/* Module Navigation */}
        <nav className="flex-none p-2 space-y-1 border-b border-gray-100">
          {MODULES.map((module) => (
            <button
              key={module.id}
              onClick={() => onModuleChange(module.id)}
              className={`
                flex w-full items-center rounded-md p-2 text-sm font-medium transition-colors
                ${activeModule === module.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                ${isCollapsed ? 'justify-center' : 'justify-start gap-3'}
              `}
              title={isCollapsed ? module.label : undefined}
            >
              <module.icon size={20} />
              {!isCollapsed && <span>{module.label}</span>}
            </button>
          ))}
        </nav>

        {/* Module Content Area */}
        {!isCollapsed && (
          <div className="flex-grow overflow-y-auto p-4">
             {activeModule ? (
               <div className="space-y-4">
                 <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                   {MODULES.find(m => m.id === activeModule)?.label} Controls
                 </h2>
                 <p className="text-sm text-gray-500">
                   Module specific controls will appear here.
                 </p>
                 {/* Placeholder for future controls */}
                 <div className="rounded-lg border-2 border-dashed border-gray-200 p-4 text-center">
                   <Layers className="mx-auto h-8 w-8 text-gray-300 mb-2" />
                   <span className="text-xs text-gray-400">Layer Settings</span>
                 </div>
               </div>
             ) : (
               <div className="flex h-full flex-col items-center justify-center text-center text-gray-400">
                 <p className="text-sm">Select a module to view controls</p>
               </div>
             )}
          </div>
        )}
      </aside>
    </>
  );
};

const Sidebar = React.memo(SidebarBase);
Sidebar.displayName = 'Sidebar';

export default Sidebar;
