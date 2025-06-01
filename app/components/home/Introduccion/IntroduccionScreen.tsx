import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native';
import Colors from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const IntroduccionScreen: React.FC = () => {
    const navigation = useNavigation();

    const handleGoBack = () => {
        navigation.goBack();
    };

    const handleNext = () => {
        // Lógica para ir a la siguiente pantalla
        console.log('Siguiente');
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={handleGoBack}
                            activeOpacity={0.8}
                        >
                            <Icon name="arrow-back" size={60} color={Colors.Black} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.mainContent}>
                        <View style={styles.imageSection}>
                            <Image
                                source={require('../../../assets/minero2.png')}
                                style={styles.minerImage}
                                resizeMode="contain"
                            />
                        </View>

                        <View style={styles.textSection}>

                            <Text style={styles.sectionTitle}>Introducción</Text>

                            <View style={styles.textCard}>
                                <Text style={styles.welcomeTitle}>Bienvenido al curso</Text>

                                <Text style={styles.description}>
                                    El objetivo principal es transformarte en un operador profesional y
                                    proactivo, capaz de aplicar seguridad proactiva, buen mantenimiento y
                                    operar con alto rendimiento. A lo largo del curso, aprenderás no solo
                                    sobre el manejo seguro de equipos, sino también sobre las mejores
                                    prácticas para un rendimiento óptimo y la prevención de accidentes.
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.nextButton}
                            onPress={handleNext}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.nextButtonText}>Siguiente</Text>
                            <Text style={styles.nextArrow}>→</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.Ivory,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 18,
    },
    backButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.PrimaryYellow,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
        minHeight: height * 0.6,
    },
    imageSection: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 30,
        marginTop: -80,
    },
    minerImage: {
        width: width * 0.40,
        height: width * 0.45,
    },
    textSection: {
        flex: 1.2,
        justifyContent: 'flex-start',
    },
    sectionTitle: {
        fontSize: width * 0.035,
        fontWeight: '700',
        color: Colors.Black,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: -100,
    },
    textCard: {
        backgroundColor: Colors.CadetGrey,
        borderRadius: 20,
        padding: 35,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    welcomeTitle: {
        fontSize: width * 0.030,
        fontWeight: '600',
        color: Colors.White,
        marginBottom: 15,
        textAlign: 'center',
        lineHeight: width * 0.040,
    },
    description: {
        fontSize: width * 0.024,
        lineHeight: width * 0.034,
        color: Colors.White,
        textAlign: 'justify',
        fontWeight: '400',
        letterSpacing: 0.2,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    nextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A4A4A',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        minWidth: 60,
        justifyContent: 'center',
    },
    nextButtonText: {
        fontSize: width * 0.015,
        fontWeight: '400',
        color: Colors.White,
        marginRight: 4,
    },
    nextArrow: {
        fontSize: width * 0.015,
        fontWeight: 'bold',
        color: Colors.White,
    },
});

export default IntroduccionScreen;