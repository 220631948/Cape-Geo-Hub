import React from 'react';
import AppLayout from '@/components/Layout/AppLayout';
import BaseMap from '@/components/Map/BaseMap';

const App: React.FC = () => {
  return (
    <AppLayout>
      <BaseMap />
    </AppLayout>
  );
};

export default App;
