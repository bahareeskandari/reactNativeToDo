import React, {useState} from 'react'
import {
  StyleSheet,
  Touchable,
  Text,
  View,
  Button,
  TextInput,
  SectionList,
  FlatList,
  TouchableOpacity,
} from 'react-native'

const ItemList = ({title, onDelete}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onDelete(title.id)}>
      <View style={styles.todoItem}>
        <Text>{title.value}</Text>
      </View>
    </TouchableOpacity>
  )
}
export default ItemList

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
})
