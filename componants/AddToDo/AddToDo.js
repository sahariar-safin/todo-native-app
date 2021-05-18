import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const AddToDo = ({ toDo, setToDo }) => {
    const [inputToDO, setInputToDO] = useState('')

    const handleAddToDo = () => {
        if (inputToDO.length > 0) {
            const todo = {
                id: (Math.random() * 1000).toFixed(0),
                name: inputToDO
            }
            const newToDo = [...toDo, todo];
            setToDo(newToDo);
            setInputToDO('');
        }
    }


    return (
        <View>
            <Text style={styles.title}>Add To Do </Text>
            <TextInput style={styles.input} value={inputToDO} onChangeText={setInputToDO} placeholder="To Do name" />
            <TouchableOpacity onPress={handleAddToDo}>
                <View style={styles.addButton}>
                    <Text style={styles.btnText}>Add To Do</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default AddToDo

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 25
    },
    addButton: {
        width: '100%',
        paddingVertical: 20,
        backgroundColor: '#16a085',
        borderRadius: 5
    },
    btnText: {
        fontSize: 24,
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    }
})
