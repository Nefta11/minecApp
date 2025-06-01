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

const ReglasDeOroScreen: React.FC = () => {
    const handleGoBack = () => {
        // Lógica para regresar a la pantalla anterior
        console.log('Regresar');
    };

    const handleStartCourse = () => {
        // Lógica para comenzar el curso
        console.log('Vamos a comenzar');
    };

    return (
        <>
            <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
            <View style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    showsVerticalScrollIndicator={false}
                >
                    {/* Header con botón de regreso */}
                    <View style={styles.header}>
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={handleGoBack}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.backArrow}>←</Text>
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Reglas de oro</Text>
                        <View style={styles.placeholder} />
                    </View>

                    {/* Contenido principal */}
                    <View style={styles.mainContent}>
                        {/* Card amarilla con las reglas */}
                        <View style={styles.rulesCard}>
                            <View style={styles.ruleItem}>
                                <Text style={styles.ruleNumber}>1. </Text>
                                <Text style={styles.ruleTitle}>Puntualidad: </Text>
                                <Text style={styles.ruleText}>
                                    La puntualidad es clave para asegurar que el curso se desarrolle de manera fluida y eficaz.
                                </Text>
                            </View>

                            <View style={styles.ruleItem}>
                                <Text style={styles.ruleNumber}>2. </Text>
                                <Text style={styles.ruleTitle}>Respeto: </Text>
                                <Text style={styles.ruleText}>
                                    Muestra respeto hacia los demás participantes y el material del curso.
                                </Text>
                            </View>

                            <View style={styles.ruleItem}>
                                <Text style={styles.ruleNumber}>3. </Text>
                                <Text style={styles.ruleTitle}>Participación activa: </Text>
                                <Text style={styles.ruleText}>
                                    Participa en todas las actividades y discusiones para aprovechar mejor el curso
                                </Text>
                            </View>

                            <View style={styles.ruleItem}>
                                <Text style={styles.ruleNumber}>4. </Text>
                                <Text style={styles.ruleTitle}>Romper Paradigmas: </Text>
                                <Text style={styles.ruleText}>
                                    Abre tu mente a nuevos enfoques.
                                </Text>
                            </View>

                            <Text style={styles.additionalText}>
                                No operes solo con base en la experiencia previa sigue las pautas del fabricante para garantizar una operación segura y eficiente.
                            </Text>
                        </View>

                        {/* Imagen del minero */}
                        <View style={styles.imageSection}>
                            <Image
                                source={require('../../../assets/regla-de-oro1.png')}
                                style={styles.minerImage}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    {/* Botón Vamos a comenzar */}
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.startButton}
                            onPress={handleStartCourse}
                            activeOpacity={0.8}
                        >
                            <Text style={styles.startButtonText}>Vamos a comenzar</Text>
                            <Text style={styles.startArrow}>→</Text>
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
        justifyContent: 'space-between',
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
    headerTitle: {
        fontSize: width * 0.06,
        fontWeight: '700',
        color: Colors.Black,
        textAlign: 'center',
    },
    placeholder: {
        width: 50, // Para balancear el header
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 30,
        minHeight: height * 0.65,
    },
    rulesCard: {
        backgroundColor: Colors.PrimaryYellow,
        borderRadius: 20,
        padding: 24,
        flex: 1.3,
        marginRight: 20,
    },
    ruleItem: {
        flexDirection: 'row',
        marginBottom: 16,
        alignItems: 'flex-start',
    },
    ruleNumber: {
        fontSize: width * 0.042,
        fontWeight: '700',
        color: Colors.Black,
    },
    ruleTitle: {
        fontSize: width * 0.042,
        fontWeight: '700',
        color: Colors.Black,
    },
    ruleText: {
        fontSize: width * 0.042,
        fontWeight: '400',
        color: Colors.Black,
        lineHeight: width * 0.058,
        flex: 1,
        textAlign: 'justify',
    },
    additionalText: {
        fontSize: width * 0.042,
        fontWeight: '400',
        color: Colors.Black,
        lineHeight: width * 0.058,
        textAlign: 'justify',
        marginTop: 16,
        paddingTop: 16,
    },
    imageSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    minerImage: {
        width: width * 0.35,
        height: width * 0.45,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    startButton: {
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
        minWidth: 180,
        justifyContent: 'center',
    },
    startButtonText: {
        fontSize: width * 0.042,
        fontWeight: '600',
        color: Colors.White,
        marginRight: 8,
    },
    startArrow: {
        fontSize: width * 0.042,
        fontWeight: 'bold',
        color: Colors.White,
    },
});

export default ReglasDeOroScreen;