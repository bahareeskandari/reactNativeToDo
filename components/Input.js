import React, {useState} from 'react'
import {StyleSheet, Text, View, Button, TextInput, SectionList, FlatList, Modal} from 'react-native'

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    margin: 10,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
})

const Input = ({addToList, visible, cancelAddToListHandler}) => {
  const [inputVal, setInputVal] = useState('')
  const onChangeHandler = (inputVal) => {
    setInputVal(inputVal)
  }

  const onAddHanlder = (inputVal) => {
    cancelAddToListHandler()
    setInputVal('')
  }
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add to do"
          value={inputVal}
          onChangeText={onChangeHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={onAddHanlder} />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={() => {
                addToList(inputVal)
                setInputVal('')
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}
export default Input
