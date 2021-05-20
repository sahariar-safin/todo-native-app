import React, { useEffect, useState } from 'react'
import { FlatList, LogBox, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import AddToDo from './componants/AddToDo/AddToDo'
import Header from './componants/Header/Header'
import Incomplete from './componants/Incomplete/Incomplete'
import DeviceInfo from 'react-native-device-info';
import axios from 'axios'

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [deviceId, setDeviceId] = useState(null);
  const [dependencies, setDependencies] = useState(null)

  useEffect(() => {
    const DeviceID = DeviceInfo.getUniqueId();
    setDeviceId(DeviceID);
    setDependencies(deviceId);
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, [])


  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <Header toDo={toDo} />
        <View style={styles.container}>
          <AddToDo dependencies={dependencies} setDependencies={setDependencies} toDo={toDo} deviceId={deviceId} setToDo={setToDo} />
          <Incomplete dependencies={dependencies} setDependencies={setDependencies} deviceId={deviceId} toDo={toDo} setToDo={setToDo} />

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
