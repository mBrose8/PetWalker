import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/authContext';

const Teste = () => {
    const data = useContext(Context);
    return (
        <Text>{data}</Text>
    )
}

export default Teste