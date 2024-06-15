/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface ToolbarProps {
  title: string;
  backgroundColor?: string;
  showBackButton?: boolean;
  onBackPress?: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  title,
  backgroundColor = '#6200EE',
  showBackButton = false,
  onBackPress,
}) => {
  return (
    <View style={[styles.toolbar, {backgroundColor}]}>
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
    elevation: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
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
    fontSize: 16,
  },
});

export default Toolbar;
