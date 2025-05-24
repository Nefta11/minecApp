import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ImageBackground,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Picker } from '@react-native-picker/picker';

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


    const handleRegister = () => {
        console.log('Datos del formulario:', formData);
        // Aquí puedes manejar el registro
    };

    const handleExperienceLevelSelect = (level: RegisterFormData['experienceLevel']) => {
        setFormData(prev => ({ ...prev, experienceLevel: level }));
    };

    return (
        <>
            <StatusBar backgroundColor="#E8E8E8" barStyle="dark-content" />
            <View style={styles.container}>
                {/* Título */}
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Registro</Text>
                </View>

                <View style={styles.mainContent}>
                    {/* Imagen de fondo - Lado izquierdo */}
                    <View style={styles.imageContainer}>
                        <ImageBackground
                            source={{
                                uri: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=800&fit=crop&auto=format'
                            }}
                            style={styles.backgroundImage}
                            resizeMode="cover"
                        >
                            <View style={styles.imageOverlay} />
                        </ImageBackground>
                    </View>

                    {/* Formulario - Lado derecho */}
                    <View style={styles.formContainer}>
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
                                <View style={styles.pickerContainer}>
                                    <Picker
                                        selectedValue={formData.location}
                                        style={styles.picker}
                                        onValueChange={(itemValue) =>
                                            setFormData(prev => ({ ...prev, location: itemValue }))
                                        }
                                        dropdownIconColor="#999"
                                    >
                                        <Picker.Item label="Selecciona" value="" />
                                        <Picker.Item label="Centro de Operaciones Norte" value="norte" />
                                        <Picker.Item label="Centro de Operaciones Sur" value="sur" />
                                        <Picker.Item label="Centro de Operaciones Este" value="este" />
                                        <Picker.Item label="Centro de Operaciones Oeste" value="oeste" />
                                    </Picker>
                                </View>
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
                                            formData.experienceLevel === 'Principiante' && styles.experienceButtonSelected
                                        ]}
                                        onPress={() => handleExperienceLevelSelect('Principiante')}
                                    >
                                        <Text style={[
                                            styles.experienceButtonText,
                                            formData.experienceLevel === 'Principiante' && styles.experienceButtonTextSelected
                                        ]}>
                                            Principiante
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            styles.experienceButton,
                                            formData.experienceLevel === 'Avanzado' && styles.experienceButtonSelected
                                        ]}
                                        onPress={() => handleExperienceLevelSelect('Avanzado')}
                                    >
                                        <Text style={[
                                            styles.experienceButtonText,
                                            formData.experienceLevel === 'Avanzado' && styles.experienceButtonTextSelected
                                        ]}>
                                            Avanzado
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            styles.experienceButton,
                                            formData.experienceLevel === 'Intermedio' && styles.experienceButtonSelected
                                        ]}
                                        onPress={() => handleExperienceLevelSelect('Intermedio')}
                                    >
                                        <Text style={[
                                            styles.experienceButtonText,
                                            formData.experienceLevel === 'Intermedio' && styles.experienceButtonTextSelected
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8',
    },
    titleContainer: {
        paddingTop: height * 0.05,
        paddingBottom: height * 0.03,
        paddingHorizontal: width * 0.05,
    },
    title: {
        fontSize: width * 0.045,
        fontWeight: '700',
        color: '#333333',
        textAlign: 'center',
    },
    mainContent: {
        flex: 1,
        flexDirection: 'row',
    },
    imageContainer: {
        flex: 0.5,
        height: '100%',
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    imageOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    formContainer: {
        flex: 0.5,
        backgroundColor: '#E8E8E8',
        paddingHorizontal: width * 0.04,
    },
    formContent: {
        paddingTop: height * 0.03,
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
        color: '#333333',
    },
    textInput: {
        backgroundColor: '#FFB347',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: height * 0.018,
        fontSize: width * 0.022,
        color: '#333',
        borderWidth: 0,
    },
    pickerContainer: {
        backgroundColor: '#FFB347',
        borderRadius: 8,
        overflow: 'hidden',
    },
    picker: {
        height: height * 0.06,
        color: '#333',
        fontSize: width * 0.022,
    },
    experienceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
    },
    experienceButton: {
        flex: 1,
        backgroundColor: '#6B7280',
        borderRadius: 8,
        paddingVertical: height * 0.015,
        alignItems: 'center',
        justifyContent: 'center',
    },
    experienceButtonSelected: {
        backgroundColor: '#FFB347',
    },
    experienceButtonText: {
        fontSize: width * 0.02,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    experienceButtonTextSelected: {
        color: '#333333',
    },
    registerButton: {
        backgroundColor: '#6B7280',
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
        color: '#FFFFFF',
    },
});

export default RegisterScreen;