import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const ExportarResultadosCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Text style={styles.title}>Exportar{'\n'}resultados</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/homeIcons/otg.png')}
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
        lineHeight: width * 0.048,
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

export default ExportarResultadosCard;