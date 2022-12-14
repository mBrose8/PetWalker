import { StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from "@react-navigation/native"


import { Context } from '../context/authContext'

import Home from './Home'
import CadastroPet from './CadastroPet'
import CadastroPetWalker from './CadastroPetWalker'
import Agendamento from './Agendamento'
import TelaPets from './pets/TelaPets'

const Tab = createBottomTabNavigator();

const Routes = ({ navigation }) => {
    const { state, dispatch } = useContext(Context)
    return (
        <Tab.Navigator screenOptions={{
            headerRight: () => (
                <Entypo
                    name='log-out'
                    size={20}
                    style={{ margin: 10 }}
                    onPress={() => dispatch({ type: 'logOut' })}
                    color="#000"
                />
            )            
        }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='home' size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="CadastroPet"
                component={CadastroPet}
                options={{
                    tabBarIcon: () => (
                        <AntDesign name='adduser' size={30} />
                    )
                }}
            />
             <Tab.Screen
                name="Meus Pets"
                component={TelaPets}
                options={{
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name='dog' size={30} />
                    )
                }}
            />
            <Tab.Screen
                    name="Agendamento"
                    component={Agendamento}
                    options={{
                        tabBarIcon: () => (
                            <Entypo name='calendar' size={30} />
                        )
                    }}
                />
            {state.isAdmin ? (
                <Tab.Screen
                name="CadastroPetWalker"
                component={CadastroPetWalker}
                options={{
                    tabBarIcon: () => (
                        <Entypo name='fingerprint' size={30} />
                    )
                }}
            />
            ) : (
                <></>
            )
            }

        </Tab.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({})