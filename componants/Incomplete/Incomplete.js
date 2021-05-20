import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Incomplete = ({ toDo, deviceId, setToDo, dependencies, setDependencies }) => {
    const [deletedTodo, setDeletedTodo] = useState(null)
    useEffect(() => {
        {
            deviceId && (
                axios.get("https://guarded-ravine-77675.herokuapp.com/todo/" + deviceId)
                    .then(function (response) {
                        const data = response.data;
                        setToDo(data);
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
            )
        }
    }, [dependencies, deviceId])

    const handleDelete = (id) => {
        console.log(id)
        axios.post('https://guarded-ravine-77675.herokuapp.com/todo/deletetodo', { id })
            .then(function (response) {
                setDependencies(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <View>
            <Text style={styles.title}>To Do List</Text>
            {
                toDo.length > 0 && (
                    <FlatList
                        data={toDo}
                        renderItem={({ item }) =>
                            <View style={styles.item}>
                                <Text style={styles.itemTitle}>{item.todoName}</Text>
                                <TouchableOpacity onPress={() => handleDelete(item.todoID)}>
                                    <View style={styles.deleteBtn}><Text style={styles.deleteBtnText}>Delete</Text></View>
                                </TouchableOpacity>
                            </View>
                        }
                        keyExtractor={item => item.todoID}
                    />
                )
            }
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
