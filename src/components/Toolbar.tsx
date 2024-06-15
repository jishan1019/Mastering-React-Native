/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

interface ToolbarProps {
  title: string;
  backgroundColor?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
  statusbarColor?: string;
}

const Toolbar: React.FC<ToolbarProps> = ({
  title,
  backgroundColor = '#6200EE',
  showBackButton = false,
  onBackPress,
  statusbarColor,
}) => {
  return (
    <View style={[styles.toolbar, {backgroundColor}]}>
      <StatusBar backgroundColor={statusbarColor ? statusbarColor : '#000'} />
      {showBackButton && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backText}>{'<'}</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    elevation: 6, // Elevation for Android shadow
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  backText: {
    color: 'white',
    fontSize: 24,
    marginRight: 20,
  },
});

export default Toolbar;
