import React from 'react';
import { View, StatusBar, StyleSheet, ImageBackground } from 'react-native';
import RegisterForm from '../components/register/RegisterForm';
import Colors from '../utils/Colors';


const RegisterScreen: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor="#E8E8E8" barStyle="dark-content" />
            <View style={styles.container}>
                <View style={styles.mainContent}>
                    {/* Imagen de fondo - Lado izquierdo */}
                    <View style={styles.imageContainer}>
                        <ImageBackground
                            source={require('../assets/registerImage.png')}
                            style={styles.backgroundImage}
                            resizeMode="cover"
                        >
                            <View style={styles.imageOverlay} />
                        </ImageBackground>
                    </View>
                    {/* Formulario - Lado derecho */}
                    <RegisterForm />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    imageOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
});

export default RegisterScreen;