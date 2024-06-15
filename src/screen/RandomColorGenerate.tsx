/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Toolbar from '../components/Toolbar';
import {useNavigation} from '../components/NavigationProvider';

const RandomColorGenerate = (): JSX.Element => {
  const [randomBackground, setRandomBackground] = useState('#70E457');

  const {navigate} = useNavigation();

  const generateRandomColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  };

  return (
    <View style={styles.root}>
      <Toolbar
        title="Color Picker"
        backgroundColor={randomBackground}
        statusbarColor={randomBackground}
        showBackButton
        onBackPress={() => navigate('Home')}
      />
      <View>
        <View style={[styles.container, {backgroundColor: randomBackground}]} />
        <Text style={styles.input}>{randomBackground}</Text>
        <TouchableOpacity onPress={() => generateRandomColor()}>
          <Text style={styles.button}>Generate Color</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RandomColorGenerate;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#001029',
    height: '100%',
    width: '100%',
  },
  container: {
    height: 200,
    width: '90%',
    margin: 'auto',
    marginTop: 30,
    borderRadius: 4,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },
  input: {
    height: 40,
    width: '90%',
    margin: 'auto',
    marginTop: 30,
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
    borderColor: '#FFFFFF',
    borderWidth: 1,
  },

  button: {
    height: 40,
    width: '90%',
    margin: 'auto',
    marginTop: 30,
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 14,
    borderWidth: 1,
    backgroundColor: 'red',
    color: '#FFFFFF',
    borderRadius: 4,
    fontWeight: 'bold',
  },
});
