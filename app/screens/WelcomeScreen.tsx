import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

                {/* Ilustración del carrito minero */}
                <View style={styles.illustrationContainer}>
                    <View style={styles.mineCart}>
                        {/* Contenido del carrito (carbón/mineral) */}
                        <View style={styles.cartContent}>
                            <View style={[styles.coal, styles.coal1]} />
                            <View style={[styles.coal, styles.coal2]} />
                            <View style={[styles.coal, styles.coal3]} />
                            <View style={[styles.coal, styles.coal4]} />
                            <View style={[styles.coal, styles.coal5]} />
                        </View>

                        {/* Cuerpo del carrito */}
                        <View style={styles.cartBody}>
                            <View style={styles.cartSide} />
                            <View style={styles.cartBottom} />
                            <View style={styles.cartSideRight} />
                        </View>

                        {/* Ruedas */}
                        <View style={styles.wheelContainer}>
                            <View style={styles.wheel}>
                                <View style={styles.wheelInner} />
                            </View>
                            <View style={styles.wheel}>
                                <View style={styles.wheelInner} />
                            </View>
                        </View>

                        {/* Rieles */}
                        <View style={styles.railsContainer}>
                            <View style={styles.rail} />
                            <View style={styles.rail} />
                        </View>
                    </View>
                </View>

                {/* Botón Comenzar */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.startButton}
                        onPress={handleStartPress}
                        activeOpacity={0.8}
                    >
                        <Text style={styles.buttonText}>Comenzar</Text>
                        <Icon name="arrow-forward" size={24} color="#333" style={styles.arrowIcon} />
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
    mineCart: {
        width: width * 0.35,
        height: height * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    cartContent: {
        position: 'absolute',
        top: height * 0.08,
        width: width * 0.22,
        height: height * 0.08,
        zIndex: 3,
    },
    coal: {
        position: 'absolute',
        backgroundColor: '#4A4A4A',
        borderRadius: 8,
    },
    coal1: {
        width: 25,
        height: 20,
        top: 5,
        left: 10,
    },
    coal2: {
        width: 30,
        height: 25,
        top: 0,
        left: 40,
    },
    coal3: {
        width: 22,
        height: 18,
        top: 10,
        left: 75,
    },
    coal4: {
        width: 28,
        height: 22,
        top: 25,
        left: 20,
    },
    coal5: {
        width: 24,
        height: 20,
        top: 20,
        left: 55,
    },
    cartBody: {
        position: 'absolute',
        top: height * 0.12,
        width: width * 0.25,
        height: height * 0.1,
        zIndex: 2,
    },
    cartSide: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 8,
        height: '100%',
        backgroundColor: '#D2691E',
        borderTopLeftRadius: 4,
    },
    cartSideRight: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: 8,
        height: '100%',
        backgroundColor: '#D2691E',
        borderTopRightRadius: 4,
    },
    cartBottom: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: 0,
        height: 15,
        backgroundColor: '#F4A460',
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    wheelContainer: {
        position: 'absolute',
        bottom: height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.18,
        zIndex: 1,
    },
    wheel: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#2F2F2F',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wheelInner: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1A1A1A',
    },
    railsContainer: {
        position: 'absolute',
        bottom: height * 0.01,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.35,
        zIndex: 0,
    },
    rail: {
        width: 4,
        height: height * 0.15,
        backgroundColor: '#8B4513',
        borderRadius: 2,
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.03,
    },
    startButton: {
        backgroundColor: '#FFB347',
        paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.02,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
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
        color: '#333333',
        marginRight: 12,
    },
    arrowIcon: {
        marginLeft: 4,
    },
});

export default WelcomeScreen;