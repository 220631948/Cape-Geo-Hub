import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar, { type ModuleType } from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeModule, setActiveModule] = useState<ModuleType | null>('services');
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-gray-50">
      <Header
        onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        isOnline={isOnline}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar
          isOpen={sidebarOpen}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          onCloseMobile={() => setSidebarOpen(false)}
          activeModule={activeModule}
          onModuleChange={(module) => {
            setActiveModule(module);
            if (window.innerWidth < 768) {
              setSidebarOpen(false);
            }
          }}
        />

        <main className="flex-1 relative z-0 h-full w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
