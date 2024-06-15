/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// components/NavigationProvider.tsx
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useRef,
} from 'react';
import {Animated} from 'react-native';

// Define the shape of the navigation context
interface NavigationContextProps {
  currentScreen: string;
  navigate: (screen: string) => void;
}

// Create a Context for the navigation
const NavigationContext = createContext<NavigationContextProps | undefined>(
  undefined,
);

// Custom hook to use the navigation context
const useNavigation = (): NavigationContextProps => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

// Define the provider props
interface NavigationProviderProps {
  children: ReactNode;
}

const NavigationProvider: React.FC<NavigationProviderProps> = ({children}) => {
  const [currentScreen, setCurrentScreen] = useState<string>('Home');
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const navigate = (screen: string) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setCurrentScreen(screen);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <NavigationContext.Provider value={{currentScreen, navigate}}>
      <Animated.View style={{flex: 1, opacity: fadeAnim}}>
        {children}
      </Animated.View>
    </NavigationContext.Provider>
  );
};

export {NavigationProvider, useNavigation};
