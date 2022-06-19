import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../stacks/Home';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                animation: 'none'
            }}
            initialRouteName={'Home'}
        >
            <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
    )
}

export default StackRoutes;