import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
} from 'react-native';
import Colors from '../../../utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={handleGoBack}
                        activeOpacity={0.8}
                    >
                        <Icon name="arrow-back" size={40} color={Colors.Black} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Reglas de oro</Text>
                    <View style={styles.placeholder} />
                </View>

                <View style={styles.mainContent}>
                    <View style={styles.rulesCard}>
                        <View style={styles.ruleItem}>
                            <Text style={styles.ruleText}>
                                <Text style={styles.ruleNumber}>1. </Text>
                                <Text style={styles.ruleTitle}>Puntualidad: </Text>
                                La puntualidad es clave para asegurar que el curso se desarrolle de manera fluida y eficaz.
                            </Text>
                        </View>

                        <View style={styles.ruleItem}>
                            <Text style={styles.ruleText}>
                                <Text style={styles.ruleNumber}>2. </Text>
                                <Text style={styles.ruleTitle}>Respeto: </Text>
                                Muestra respeto hacia los demás participantes y el material del curso.
                            </Text>
                        </View>

                        <View style={styles.ruleItem}>
                            <Text style={styles.ruleText}>
                                <Text style={styles.ruleNumber}>3. </Text>
                                <Text style={styles.ruleTitle}>Participación activa: </Text>
                                Participa en todas las actividades y discusiones para aprovechar mejor el curso
                            </Text>
                        </View>

                        <View style={styles.ruleItem}>
                            <Text style={styles.ruleText}>
                                <Text style={styles.ruleNumber}>4. </Text>
                                <Text style={styles.ruleTitle}>Romper Paradigmas: </Text>
                                Abre tu mente a nuevos enfoques.
                            </Text>
                        </View>

                        <Text style={styles.additionalText}>
                            No operes solo con base en la experiencia previa sigue las pautas del fabricante para garantizar una operación segura y eficiente.
                        </Text>
                    </View>

                    <View style={styles.imageSection}>
                        <Image
                            source={require('../../../assets/regla-de-oro1.png')}
                            style={styles.minerImage}
                            resizeMode="contain"
                        />
                    </View>
                </View>

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
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
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
    backArrow: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.Black,
    },
    headerTitle: {
        fontSize: width * 0.035,
        fontWeight: '700',
        color: Colors.Black,
        textAlign: 'center',
    },
    placeholder: {
        width: 50,
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
        paddingVertical: 20,
        minHeight: height * 0.65,
    },
    rulesCard: {
        backgroundColor: Colors.PrimaryYellow,
        borderRadius: 20,
        padding: 28,
        flex: 1.2,
        marginRight: 15,
    },
    ruleItem: {
        marginBottom: 18,
    },
    ruleNumber: {
        fontSize: width * 0.020,
        fontWeight: '700',
        color: Colors.Black,
    },
    ruleTitle: {
        fontSize: width * 0.020,
        fontWeight: '700',
        color: Colors.Black,
    },
    ruleText: {
        fontSize: width * 0.020,
        fontWeight: '400',
        color: Colors.Black,
        lineHeight: width * 0.028,
        textAlign: 'justify',
    },
    additionalText: {
        fontSize: width * 0.020,
        fontWeight: '400',
        color: Colors.Black,
        lineHeight: width * 0.028,
        textAlign: 'justify',
        marginTop: 14,
    },
    imageSection: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
    },
    minerImage: {
        width: width * 0.4,
        height: width * 0.5,
    },
    buttonContainer: {
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: -10,
        marginBottom: 20,
    },
    startButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4A4A4A',
        paddingHorizontal: 22,
        paddingVertical: 12,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        minWidth: 140,
        justifyContent: 'center',
    },
    startButtonText: {
        fontSize: width * 0.020,
        fontWeight: '400',
        color: Colors.White,
        marginRight: 6,
    },
    startArrow: {
        fontSize: width * 0.020,
        fontWeight: 'bold',
        color: Colors.White,
    },
});

export default ReglasDeOroScreen;