/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Toolbar from '../components/Toolbar';
import {useNavigation} from '../components/NavigationProvider';

const Note = () => {
  const [note, setNote] = useState<string>('');
  const [notes, setNotes] = useState<string[]>([]);

  const {navigate} = useNavigation();

  const addNote = () => {
    if (note) {
      setNotes([...notes, note]);
      setNote('');
    }
  };

  const deleteNote = (index: number) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
  };

  return (
    <>
      <Toolbar
        title="Note"
        backgroundColor="#6200EE"
        statusbarColor="#5a00db"
        showBackButton
        onBackPress={() => navigate('Home')}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="New Note"
            value={note}
            onChangeText={setNote}
          />
          <Button title="Add Note" onPress={addNote} />
        </View>
        <FlatList
          data={notes}
          renderItem={({item, index}) => (
            <View style={styles.noteContainer}>
              <Text style={styles.noteText}>{item}</Text>
              <TouchableOpacity onPress={() => deleteNote(index)}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#001029',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    padding: 8,
    borderColor: '#b0b0b0',
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#b0b0b0',
  },
  noteText: {
    fontSize: 18,
  },
  deleteText: {
    color: 'red',
  },
  button: {
    backgroundColor: '#007BFF',
  },
});

export default Note;
