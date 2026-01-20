import React from 'react';
import { Menu, Wifi, WifiOff } from 'lucide-react';
import { APP_CONFIG } from '@/config/appConfig';

interface HeaderProps {
  onMenuToggle: () => void;
  isOnline?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, isOnline = true }) => {
  return (
    <header className="flex h-[60px] w-full items-center justify-between bg-white px-4 shadow-sm z-20 relative border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="rounded-md p-2 hover:bg-gray-100 text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-gray-900 leading-tight">
            {APP_CONFIG.name}
          </h1>
          <span className="text-xs text-gray-500 hidden sm:block">
            Urban Planning & Service Delivery Analysis
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div
          className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
            isOnline ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
          aria-label={isOnline ? "Online" : "Offline"}
        >
          {isOnline ? <Wifi size={14} /> : <WifiOff size={14} />}
          <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline'}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
