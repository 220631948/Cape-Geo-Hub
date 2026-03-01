import React, { useState, useEffect, useCallback } from 'react';
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

  const handleMenuToggle = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const handleToggleCollapse = useCallback(() => {
    setSidebarCollapsed(prev => !prev);
  }, []);

  const handleCloseMobile = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  const handleModuleChange = useCallback((module: ModuleType) => {
    setActiveModule(module);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  }, []);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-gray-50">
      <Header
        onMenuToggle={handleMenuToggle}
        isOnline={isOnline}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar
          isOpen={sidebarOpen}
          isCollapsed={sidebarCollapsed}
          onToggleCollapse={handleToggleCollapse}
          onCloseMobile={handleCloseMobile}
          activeModule={activeModule}
          onModuleChange={handleModuleChange}
        />

        <main className="flex-1 relative z-0 h-full w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
