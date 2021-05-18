import React, { useEffect, useState } from 'react'
import { FlatList, LogBox, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import AddToDo from './componants/AddToDo/AddToDo'
import Header from './componants/Header/Header'
import Incomplete from './componants/Incomplete/Incomplete'

const App = () => {
  const [toDo, setToDo] = useState([])

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Header toDo={toDo} />
        <View style={styles.container}>
          <AddToDo toDo={toDo} setToDo={setToDo} />
          {
            toDo.length > 0 && <Incomplete setToDo={setToDo} toDo={toDo} />
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  }
})
