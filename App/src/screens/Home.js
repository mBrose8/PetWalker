import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Teste from '../components/Teste'
import { Context, Provider } from '../context/dataContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../api'
import Logo from '../../assets/images/Logo.png';

const Home = ({ navigation }) => {
  const [counter, setCounter] = useState(0);

  useEffect(async () => {
    const pets =  await api.get('/user/findpet')
    console.log(pets)
  }, [counter])

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Home</Text>
      <Button
        title='Cadastrar Pet'
        onPress={() => navigation.navigate("CadastroPet")}
      />
        <Button
         title='Ver meus Pets'
         onPress={() => navigation.navigate("PaginaDePet")}
       />
      <Button
        title='Cadastrar Pet Walker'
        onPress={() => navigation.navigate("CadastroPetWalker")}
      />
             <Button
        title='Agendamento'
        onPress={() => navigation.navigate("Agendamento")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d4e0ff"
  },
  text: {
    fontSize: 30
  }
})


export default Home