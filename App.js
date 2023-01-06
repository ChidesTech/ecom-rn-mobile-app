import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Button} from 'react-native';
import TodoInput from './components/TodoInput';
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 70,
  },

  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    width: "80%",
    paddingLeft: 8,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 16,
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderColor: "black",
    padding: 16,
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 16
  },
});

const App = () => {

  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const addTodo = (newTodo) => {
    setTodos(current => [...current, {text : newTodo , id : Math.random() *  1200}]);
    setModalIsVisible(false)
  }

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter(x => x.id !== id));
  }

  const displayModal = () => {
     setModalIsVisible(true);
  }
  return (
    <View style={styles.container}>
     <Button title='Add Task' color="red" onPress={displayModal}/>
      {modalIsVisible && <TodoInput onAddTodo={addTodo} />}
      <FlatList
        data={todos}
        renderItem={({ item }) => { return  <Pressable onPress={deleteTodoHandler.bind(this, item.id)}> 
         <View>
          <Text key={item.id} style={styles.item}>{item.text}</Text>
          </View>
           </Pressable> 
         }}
      />
    </View>
  );
}

export default App;