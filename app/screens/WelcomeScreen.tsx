import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../utils/Colors';

interface WelcomeScreenProps { }

type NavigationProp = {
    navigate: (screen: string) => void;
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
    const navigation = useNavigation<NavigationProp>();

    const handleStartPress = () => {
        navigation.navigate('Register');
    };

    return (
        <>
            <StatusBar backgroundColor="#F5F3E7" barStyle="dark-content" />
            <View style={styles.container}>
                {/* Título */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Bienvenido</Text>
                </View>

                {/* Imagen del carrito minero */}
                <View style={styles.illustrationContainer}>
                    <Image
                        source={require('../../app/assets/minecart.png')}
                        style={styles.mineCartImage}
                        resizeMode="contain"
                    />
                </View>

                {/* Botón Comenzar */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={handleStartPress}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Comenzar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F3E7',
        paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.05,
    },
    titleContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.05,
    },
    title: {
        fontSize: width * 0.045,
        fontWeight: '600',
        color: '#333333',
        textAlign: 'center',
        letterSpacing: 1,
    },
    illustrationContainer: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mineCartImage: {
        width: width * 0.6,
        height: height * 0.3,
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    startButton: {
        backgroundColor: Colors.PrimaryYellow,
        paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.02,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.Black,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
    },
    buttonText: {
        fontSize: width * 0.025,
        fontWeight: '600',
        color: Colors.Black,
        marginRight: 0,
    },
});

export default WelcomeScreen;