import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity, TextInput, ImageBackground, ScrollView, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../utils/Colors';

interface RegisterFormData {
    fullName: string;
    age: string;
    location: string;
    experienceLevel: 'Intermedio' | 'Avanzado' | 'Principiante' | '';
}

const RegisterScreen: React.FC = () => {
    const [formData, setFormData] = useState<RegisterFormData>({
        fullName: '',
        age: '',
        location: '',
        experienceLevel: '',
    });
    const [locationModalVisible, setLocationModalVisible] = useState(false);

    const locationOptions = [
        { label: 'Centro de Operaciones Norte', value: 'norte' },
        { label: 'Centro de Operaciones Sur', value: 'sur' },
        { label: 'Centro de Operaciones Este', value: 'este' },
        { label: 'Centro de Operaciones Oeste', value: 'oeste' },
    ];

    const handleRegister = () => {
        console.log('Datos del formulario:', formData);
        // Aquí ira la logica para manejar el registro
    };

    const handleExperienceLevelSelect = (level: RegisterFormData['experienceLevel']) => {
        setFormData(prev => ({ ...prev, experienceLevel: level }));
    };

    const getLocationTextColor = (location: string) => (location ? '#333' : '#999');

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
                    <View style={styles.formContainer}>
                        {/* Título arriba del formulario */}
                        <Text style={styles.title}>Registro</Text>
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={styles.formContent}
                        >
                            {/* Campo Nombre completo */}
                            <View style={styles.inputGroup}>
                                <View style={styles.labelContainer}>
                                    <Icon name="person" size={20} color="#666" style={styles.labelIcon} />
                                    <Text style={styles.label}>Nombre completo</Text>
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Ingresa tu nombre completo"
                                    placeholderTextColor="#999"
                                    value={formData.fullName}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, fullName: text }))}
                                />
                            </View>

                            {/* Campo Edad */}
                            <View style={styles.inputGroup}>
                                <View style={styles.labelContainer}>
                                    <Icon name="cake" size={20} color="#666" style={styles.labelIcon} />
                                    <Text style={styles.label}>Edad</Text>
                                </View>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Ingresa tu edad"
                                    placeholderTextColor="#999"
                                    value={formData.age}
                                    onChangeText={(text) => setFormData(prev => ({ ...prev, age: text }))}
                                    keyboardType="numeric"
                                />
                            </View>

                            {/* Campo Centro/ubicación */}
                            <View style={styles.inputGroup}>
                                <View style={styles.labelContainer}>
                                    <Icon name="location-on" size={20} color="#666" style={styles.labelIcon} />
                                    <Text style={styles.label}>Centro/ubicación</Text>
                                </View>
                                <Pressable
                                    style={styles.pickerContainer}
                                    onPress={() => setLocationModalVisible(true)}
                                >
                                    <View style={rowBetween.container}>
                                        <Text style={[styles.textInput, rowBetween.text, { color: getLocationTextColor(formData.location) }]}>
                                            {formData.location
                                                ? locationOptions.find(opt => opt.value === formData.location)?.label
                                                : 'Selecciona'}
                                        </Text>
                                        <Icon name="arrow-drop-down" size={24} color="#666" />
                                    </View>
                                </Pressable>
                                <Modal
                                    visible={locationModalVisible}
                                    transparent
                                    animationType="fade"
                                    onRequestClose={() => setLocationModalVisible(false)}
                                >
                                    <View style={modalStyles.overlay}>
                                        <View style={modalStyles.modalBox}>
                                            {locationOptions.map(option => (
                                                <TouchableOpacity
                                                    key={option.value}
                                                    style={modalStyles.optionButton}
                                                    onPress={() => {
                                                        setFormData(prev => ({ ...prev, location: option.value }));
                                                        setLocationModalVisible(false);
                                                    }}
                                                >
                                                    <Text style={modalStyles.optionText}>{option.label}</Text>
                                                </TouchableOpacity>
                                            ))}
                                            <TouchableOpacity onPress={() => setLocationModalVisible(false)} style={modalStyles.cancelButton}>
                                                <Text style={modalStyles.cancelText}>Cancelar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </Modal>
                            </View>

                            {/* Nivel de experiencia */}
                            <View style={styles.inputGroup}>
                                <View style={styles.labelContainer}>
                                    <Icon name="star" size={20} color="#666" style={styles.labelIcon} />
                                    <Text style={styles.label}>Nivel de experiencia</Text>
                                </View>
                                <View style={styles.experienceContainer}>
                                    <TouchableOpacity
                                        style={[
                                            styles.experienceButton,
                                            formData.experienceLevel === 'Principiante' && styles.experienceButtonSelected,
                                        ]}
                                        onPress={() => handleExperienceLevelSelect('Principiante')}
                                    >
                                        <Text style={[
                                            styles.experienceButtonText,
                                            formData.experienceLevel === 'Principiante' && styles.experienceButtonTextSelected,
                                        ]}>
                                            Principiante
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            styles.experienceButton,
                                            formData.experienceLevel === 'Avanzado' && styles.experienceButtonSelected,
                                        ]}
                                        onPress={() => handleExperienceLevelSelect('Avanzado')}
                                    >
                                        <Text style={[
                                            styles.experienceButtonText,
                                            formData.experienceLevel === 'Avanzado' && styles.experienceButtonTextSelected,
                                        ]}>
                                            Avanzado
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            styles.experienceButton,
                                            formData.experienceLevel === 'Intermedio' && styles.experienceButtonSelected,
                                        ]}
                                        onPress={() => handleExperienceLevelSelect('Intermedio')}
                                    >
                                        <Text style={[
                                            styles.experienceButtonText,
                                            formData.experienceLevel === 'Intermedio' && styles.experienceButtonTextSelected,
                                        ]}>
                                            Intermedio
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            {/* Botón Registrar */}
                            <TouchableOpacity
                                style={styles.registerButton}
                                onPress={handleRegister}
                                activeOpacity={0.8}
                            >
                                <Text style={styles.registerButtonText}>Registrar</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </View>
        </>
    );
};

const { width, height } = Dimensions.get('window');

// Ajusta los estilos
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
    formContainer: {
        flex: 1,
        backgroundColor: Colors.White,
        paddingHorizontal: width * 0.04,
        justifyContent: 'center',
    },
    title: {
        fontSize: width * 0.035,
        fontWeight: '700',
        color: Colors.Black,
        textAlign: 'center',
        marginBottom: height * 0.02,
        marginTop: height * 0.01,
    },
    formContent: {
        paddingBottom: height * 0.05,
    },
    inputGroup: {
        marginBottom: height * 0.03,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    labelIcon: {
        marginRight: 8,
    },
    label: {
        fontSize: width * 0.024,
        fontWeight: '600',
        color: Colors.Black,
    },
    textInput: {
        backgroundColor: Colors.PrimaryYellow,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: height * 0.018,
        fontSize: width * 0.022,
        color: Colors.Black,
        borderWidth: 0,
    },
    pickerContainer: {
        backgroundColor: Colors.PrimaryYellow,
        borderRadius: 8,
        overflow: 'hidden',
        marginTop: 4,
    },
    experienceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    experienceButton: {
        flex: 1,
        backgroundColor: Colors.DavysGrey,
        borderRadius: 8,
        paddingVertical: height * 0.015,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 2,
    },
    experienceButtonSelected: {
        backgroundColor: Colors.PrimaryYellow,
    },
    experienceButtonText: {
        fontSize: width * 0.02,
        fontWeight: '600',
        color: Colors.White,
    },
    experienceButtonTextSelected: {
        color: Colors.Black,
    },
    registerButton: {
        backgroundColor: Colors.DavysGrey,
        borderRadius: 8,
        paddingVertical: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.04,
        alignSelf: 'center',
        paddingHorizontal: width * 0.08,
    },
    registerButtonText: {
        fontSize: width * 0.025,
        fontWeight: '600',
        color: Colors.White,
    },
});

// Agrega estilos para el modal y los botones de selección
const modalStyles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalBox: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 24,
        width: '80%',
    },
    optionButton: {
        paddingVertical: 12,
    },
    optionText: {
        fontSize: 16,
        color: '#333',
    },
    cancelButton: {
        marginTop: 12,
    },
    cancelText: {
        color: Colors.PrimaryYellow,
        textAlign: 'center',
        fontWeight: 'bold',
    },
});

const rowBetween = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 1,
    },
});

export default RegisterScreen;