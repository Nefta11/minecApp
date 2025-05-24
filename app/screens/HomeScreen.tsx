import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Colors from '../utils/Colors';

const HomeScreen: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#E8E8E8" barStyle="dark-content" />
            <View style={styles.container}>
                <Text style={styles.title}>¡Bienvenido a la HomeScreen!</Text>
                <Text style={styles.subtitle}>Esta es la pantalla principal después del registro.</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.DavysGrey,
        marginBottom: 12,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 18,
        color: Colors.Black,
        textAlign: 'center',
    },
});

export default HomeScreen;
