import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const ExportarResultadosCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.content}>
                <Text style={styles.title}>Exportar{'\n'}resultados</Text>
                <Image
                    source={require('../../assets/homeIcons/otg.png')}
                    style={styles.cardImage}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4A4A4A',
        borderRadius: 12,
        padding: 8,
        width: width * 0.25,
        height: width * 0.17,
        justifyContent: 'center',
        marginBottom: 140,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: width * 0.028,
        fontWeight: '600',
        color: Colors.White,
        lineHeight: width * 0.032,
        flex: 1,
        paddingRight: 6,
    },
    cardImage: {
        width: width * 0.06,
        height: width * 0.06,
    },
});

export default ExportarResultadosCard;