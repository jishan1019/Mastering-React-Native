/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Toolbar from '../components/Toolbar';
import {useNavigation} from '../components/NavigationProvider';

const Calculator = (): JSX.Element => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const {navigate} = useNavigation();

  const handlePress = value => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toolbar
        title="Calculator"
        backgroundColor="#6200EE"
        statusbarColor="#5a00db"
        showBackButton
        onBackPress={() => navigate('Home')}
      />

      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        {[
          ['7', '8', '9', '/'],
          ['4', '5', '6', '*'],
          ['1', '2', '3', '-'],
          ['0', '.', '=', '+'],
          ['C'],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(buttonValue => (
              <TouchableOpacity
                key={buttonValue}
                style={styles.button}
                onPress={() => handlePress(buttonValue)}>
                <Text style={styles.buttonText}>{buttonValue}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  inputText: {
    fontSize: 36,
    color: '#333',
  },
  resultText: {
    fontSize: 24,
    color: '#888',
  },
  buttonsContainer: {
    flex: 2,
    backgroundColor: '#fff',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    margin: 1,
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});

export default Calculator;
