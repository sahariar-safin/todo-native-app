import React from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Incomplete = ({ toDo, item, setToDo }) => {

    const handleDelete = (id) => {
        const newToDo = toDo.filter(todo => todo.id !== id);
        setToDo(newToDo);
    }

    return (
        <View>
            <Text style={styles.title}>To Do List</Text>
            <FlatList
                data={toDo}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Text style={styles.itemTitle}>{item.name}</Text>
                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <View style={styles.deleteBtn}><Text style={styles.deleteBtnText}>Delete</Text></View>
                        </TouchableOpacity>
                    </View>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Incomplete

const styles = StyleSheet.create({
    deleteBtn: {
        width: '100%',
        padding: 10,
        backgroundColor: '#ff7675',
        borderRadius: 5,
    },
    deleteBtnText: {
        fontWeight: '500',
        color: '#fff',
        fontSize: 16
    },
    title: {
        paddingVertical: 20,
        fontSize: 18,
        fontWeight: 'bold'
    },
    item: {
        backgroundColor: '#ecf0f1',
        padding: 20,
        marginVertical: 8,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: 32,
    },
})
