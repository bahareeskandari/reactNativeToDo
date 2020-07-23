import {StatusBar} from 'expo-status-bar'
import React, {useState} from 'react'
import {StyleSheet, Text, View, Button, TextInput, SectionList, FlatList} from 'react-native'
import Itemlist from './components/ItemList'
import Input from './components/Input'

export default function App() {
  const [todoList, setTodoList] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addToList = (inputVal) => {
    setTodoList((todoList) => [...todoList, {id: Math.random().toString(), value: inputVal}])
    setIsAddMode(false)
  }
  const onDelete = (itemId) => {
    setTodoList((todoList) => {
      return todoList.filter((todo) => todo.id !== itemId)
    })
  }
  const cancelAddToListHandler = (itemId) => {
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <View style={styles.button}>
        <Button title="Add New todo" onPress={() => setIsAddMode(true)} />
      </View>
      <Input
        visible={isAddMode}
        addToList={addToList}
        cancelAddToListHandler={cancelAddToListHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={todoList}
        renderItem
        renderItem={(itemData) => <Itemlist onDelete={onDelete} title={itemData.item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    margin: 70,
    height: 20,
  },
})
