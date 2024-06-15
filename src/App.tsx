import {View, Text} from 'react-native';
import React from 'react';
import {
  NavigationProvider,
  useNavigation,
} from './components/NavigationProvider';
import Home from './screen/Home';
import Calculator from './screen/Calculator';
import Stopwatch from './screen/Stopwatch';
import Note from './screen/Note';
import RandomColorGenerate from './screen/RandomColorGenerate';
import PassGenerator from './screen/PasswordGenerator';

const AppContent: React.FC = () => {
  const {currentScreen} = useNavigation();

  switch (currentScreen) {
    case 'Home':
      return <Home />;
    case 'Stopwatch':
      return <Stopwatch />;
    case 'Calculator':
      return <Calculator />;
    case 'Note':
      return <Note />;
    case 'RandomColor':
      return <RandomColorGenerate />;
    case 'PassGenerate':
      return <PassGenerator />;

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
