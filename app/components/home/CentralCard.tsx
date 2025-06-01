import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, Text } from 'react-native';

const CentralCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <Text style={styles.title}>Modulo 2:{'\n'} Mantenimiento</Text>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../../assets/homeIcons/aprendiendo.png')}
                    style={styles.centralImage}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF8E1',
        borderRadius: 12,
        padding: 12,
        width: width * 0.31,
        height: width * 0.37,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 150,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    centralImage: {
        width: width * 0.5,
        height: width * 0.22,
    },
    title: {
        fontSize: width * 0.025,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
});

export default CentralCard;