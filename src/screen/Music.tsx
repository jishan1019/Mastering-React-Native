/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {addTrack, setupPlayer} from '../components/Music/MusciPlayerService';
import MusicPlayer from '../components/Music/MusicPlayer';

const Music = () => {
  const [isPlayerReady, setIsPaylerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack();
    }

    setIsPaylerReady(isSetup);
  }

  useEffect(() => {
    setup();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Music;
