import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const TeoriaCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Text style={styles.title}>Teoria</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/homeIcons/teoria1.png')}
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
        backgroundColor: '#9DB4C4',
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

export default TeoriaCard;