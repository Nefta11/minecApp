import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const TeoriaCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.content}>
                <Text style={styles.title}>Teoria</Text>
                <Image
                    source={require('../../assets/homeIcons/teoria1.png')}
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
        backgroundColor: '#9DB4C4',
        borderRadius: 12,
        padding: 12,
        aspectRatio: 1, // Hace la card cuadrada
        justifyContent: 'center',
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
    },
    title: {
        fontSize: width * 0.035,
        fontWeight: '600',
        color: Colors.White,
        flex: 1,
        paddingRight: 8,
    },
    cardImage: {
        width: width * 0.08,
        height: width * 0.08,
    },
});

export default TeoriaCard;