/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '../components/NavigationProvider';
import Toolbar from '../components/Toolbar';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <ScrollView style={styles.root}>
      <Toolbar
        title="Master App"
        backgroundColor="#6200EE"
        statusbarColor="#5a00db"
      />

      <Image
        source={{
          uri: 'https://img.freepik.com/free-vector/hand-drawn-flat-mountain-landscape_23-2149165968.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('Calculator')}>
            <Text style={styles.cardText}>Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('Stopwatch')}>
            <Text style={styles.cardText}>Stopwatch App</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('Note')}>
            <Text style={styles.cardText}>Note App</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('RandomColor')}>
            <Text style={styles.cardText}>Color Generator</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('PassGenerate')}>
            <Text style={styles.cardText}>Password Generator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('Music')}>
            <Text style={styles.cardText}>Music Player</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigate('TicTacToe')}>
            <Text style={styles.cardText}>TikTacToe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // backgroundColor: '#FFF',
    height: '100%',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  cardContainer: {
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 20,
    height: 500,
    width: '100%',
    marginTop: -30,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    height: 80,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardText: {
    fontSize: 14,
    color: '#333',
  },
});

export default Home;
