/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '../components/NavigationProvider';
import Toolbar from '../components/Toolbar';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Toolbar
        title="Home"
        backgroundColor="#6200EE"
        statusbarColor="#5a00db"
      />
      <Text>Home</Text>

      <Button title="Go to Details" onPress={() => navigate('Details')} />
      <Button title="Go to Calculator" onPress={() => navigate('Calculator')} />
    </View>
  );
};

export default Home;
