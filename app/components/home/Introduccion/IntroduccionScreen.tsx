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

const IntroduccionScreen: React.FC = () => {
    const handleGoBack = () => {
        // Lógica para regresar a la pantalla anterior
        console.log('Regresar');
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
                    {/* Header con botón de regreso solamente */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={handleGoBack}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.backArrow}>←</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Contenido principal */}
                    <View style={styles.mainContent}>
                        {/* Imagen del minero */}
                        <View style={styles.imageSection}>
                            <Image
                                source={require('../../../assets/homeIcons/minero1.png')}
                                style={styles.minerImage}
                                resizeMode="contain"
                            />
                        </View>

                        {/* Sección de texto con título */}
                        <View style={styles.textSection}>
                            {/* Título Introducción */}
                            <Text style={styles.sectionTitle}>Introducción</Text>

                            {/* Card de texto */}
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

                    {/* Botón Siguiente */}
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
        backgroundColor: Colors.White,
    },
    scrollContent: {
        flexGrow: 1,
        paddingBottom: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
    },
    backButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.PrimaryYellow,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    backArrow: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.Black,
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
        width: width * 0.35,
        height: width * 0.45,
    },
    textSection: {
        flex: 1.2,
        justifyContent: 'flex-start',
    },
    sectionTitle: {
        fontSize: width * 0.050,
        fontWeight: '700',
        color: Colors.Black,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: -100,
    },
    textCard: {
        backgroundColor: '#9DB4C4',
        borderRadius: 20,
        padding: 32,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    welcomeTitle: {
        fontSize: width * 0.035,
        fontWeight: '600',
        color: Colors.White,
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: width * 0.040,
    },
    description: {
        fontSize: width * 0.025,
        lineHeight: width * 0.035,
        color: Colors.White,
        textAlign: 'justify',
        fontWeight: '400',
        letterSpacing: 0.2,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 40,
    },
    nextButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A4A4A',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        minWidth: 140,
        justifyContent: 'center',
    },
    nextButtonText: {
        fontSize: width * 0.042,
        fontWeight: '600',
        color: Colors.White,
        marginRight: 8,
    },
    nextArrow: {
        fontSize: width * 0.042,
        fontWeight: 'bold',
        color: Colors.White,
    },
});

export default IntroduccionScreen;