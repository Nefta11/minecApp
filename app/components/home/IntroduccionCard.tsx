import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const IntroduccionCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Text style={styles.title}>Introduccion</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/homeIcons/entrenamiento1.png')}
                    style={styles.cardImage}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4A4A4A',
        borderRadius: 16,
        padding: 16,
        height: height * 0.22,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: width * 0.042,
        fontWeight: '600',
        color: Colors.White,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },
    cardImage: {
        width: width * 0.22,
        height: width * 0.22,
    },
});

export default IntroduccionCard;