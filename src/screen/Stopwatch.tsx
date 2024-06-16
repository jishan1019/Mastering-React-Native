/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Toolbar from '../components/Toolbar';
import {useNavigation} from '../components/NavigationProvider';

const Stopwatch = () => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [running, setRunning] = useState(false);

  const {navigate} = useNavigation();

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setMilliseconds(prev => prev + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [running]);

  const resetTimer = () => {
    setRunning(false);
    setMilliseconds(0);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const centiseconds = Math.floor((time % 1000) / 10);
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }:${centiseconds < 10 ? '0' + centiseconds : centiseconds}`;
  };

  return (
    <>
      <Toolbar
        title="Stopwatch"
        backgroundColor="#6200EE"
        statusbarColor="#5a00db"
        showBackButton
        onBackPress={() => navigate('Home')}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.timerContainer}>
          <View style={styles.timer}>
            <Text style={styles.timeText}>{formatTime(milliseconds)}</Text>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setRunning(!running)}>
            <Text style={styles.buttonText}>{running ? 'Stop' : 'Start'}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={resetTimer}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#001029',
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  timer: {
    borderWidth: 5,
    borderColor: '#b0b0b0',
    borderRadius: 150,
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 40,
    color: '#b0b0b0',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Stopwatch;
