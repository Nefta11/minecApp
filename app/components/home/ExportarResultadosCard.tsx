import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const ExportarResultadosCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Text style={styles.title}>Exportar{'\n'}resultados</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/homeIcons/otg.png')} // Reemplaza con tu imagen
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
        backgroundColor: Colors.DavysGrey,
        borderRadius: 16,
        padding: width * 0.04,
        height: height * 0.25,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: width * 0.04,
        fontWeight: '600',
        color: Colors.White,
        lineHeight: width * 0.045,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.02,
    },
    cardImage: {
        width: width * 0.2,
        height: width * 0.2,
    },
});

export default ExportarResultadosCard;