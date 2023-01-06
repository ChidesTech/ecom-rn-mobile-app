import { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";



export default function TodoInput(props) {
    const [newTodo, setNewTodo] = useState("");
    const textInputChangeHandler = newTodo => {
        setNewTodo(newTodo);
    }
    function addTodo() {
        props.onAddTodo(newTodo);
        setNewTodo("");
    }


    return <Modal animationType="slide">
        <View style={styles.inputContainer}>
        <TextInput value={newTodo} style={styles.textInput} placeholder="Add Goal" onChangeText={textInputChangeHandler}></TextInput>
        <Button title="Add" onPress={addTodo} />
    </View>
    </Modal>
}



const styles = StyleSheet.create({
    inputContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 32,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
        paddingBottomWidth: 1,
        paddingTop : 100
    },
})