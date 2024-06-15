import {View, Text} from 'react-native';
import React from 'react';
import {
  NavigationProvider,
  useNavigation,
} from './components/NavigationProvider';
import Home from './screen/Home';
import Details from './screen/Details';

const AppContent: React.FC = () => {
  const {currentScreen} = useNavigation();

  switch (currentScreen) {
    case 'Home':
      return <Home />;
    case 'Details':
      return <Details />;
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
