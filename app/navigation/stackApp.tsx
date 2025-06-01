import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroduccionScreen from '../components/home/Introduccion/IntroduccionScreen';
import ReglasDeOroScreen from '../components/home/Introduccion/ReglasDeOroScreen';

export type RootStackParamList = {
    Welcome: undefined;
    Register: undefined;
    Home: undefined;
    IntroduccionScreen: undefined;
    ReglasDeOroScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackApp() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{
                headerShown: false,
                animation: 'slide_from_bottom',
            }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="IntroduccionScreen" component={IntroduccionScreen} />
                <Stack.Screen name="ReglasDeOroScreen" component={ReglasDeOroScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
