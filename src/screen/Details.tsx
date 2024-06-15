/* eslint-disable prettier/prettier */
import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '../components/NavigationProvider';
import Toolbar from '../components/Toolbar';

const Details = () => {
  const {navigate} = useNavigation();

  return (
    <View>
      <Toolbar
        title="Details"
        backgroundColor="#03DAC6"
        showBackButton
        onBackPress={() => navigate('Home')}
      />

      <Text>Details</Text>

      <Button title="Go to Home" onPress={() => navigate('Home')} />
    </View>
  );
};

export default Details;
