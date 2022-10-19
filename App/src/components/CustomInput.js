import {View, TextInput, StyleSheet } from 'react-native';
import React from 'react';
 
const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
    return (
        <View style={styles.container}>
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}
 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        width: '100%',
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#bd2a33',
        borderRadius: 25,
    },
    input: {
        padding: 15,
        fontWeight: 'bold',
    }
})
 
export default CustomInput;