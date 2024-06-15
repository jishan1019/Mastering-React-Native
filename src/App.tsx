import {View, Text} from 'react-native';
import React from 'react';
import {
  NavigationProvider,
  useNavigation,
} from './components/NavigationProvider';
import Home from './screen/Home';
import Calculator from './screen/Calculator';
import Stopwatch from './screen/Stopwatch';

const AppContent: React.FC = () => {
  const {currentScreen} = useNavigation();

  switch (currentScreen) {
    case 'Home':
      return <Home />;
    case 'Stopwatch':
      return <Stopwatch />;
    case 'Calculator':
      return <Calculator />;
    default:
      return <Home />;
  }
};

const App = () => {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
};

export default App;
