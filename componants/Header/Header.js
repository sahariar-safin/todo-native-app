import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = ({ toDo }) => {
    const today = new Date().toUTCString().slice(0, 16);
    return (
        <View style={styles.dateContainer}>
            <Text style={styles.date}>{today}</Text>
            <Text style={styles.counters}>{toDo.length} total to do</Text>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    dateContainer: {
        paddingVertical: 20,
        paddingHorizontal: 25,
    },
    date: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    counters: {
        fontSize: 14,
        fontWeight: '600'
    }
})
