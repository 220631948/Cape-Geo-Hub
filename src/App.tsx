import React from 'react';
import BaseMap from '@/components/Map/BaseMap';
import { APP_CONFIG } from '@/config/appConfig';

const App: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden">
      <header className="bg-blue-600 p-4 text-white shadow-md z-10">
        <h1 className="text-xl font-bold">{APP_CONFIG.name}</h1>
      </header>
      <main className="flex-grow relative">
        <BaseMap />
      </main>
    </div>
  );
};

export default App;
