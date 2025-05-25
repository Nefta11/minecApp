import React from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';

const CentralElement: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.shapesContainer}>
                <Image
                    source={require('../../assets/homeIcons/vf.png')} // Reemplaza con tu imagen
                    style={styles.shapeImage}
                    resizeMode="contain"
                />
                <Image
                    source={require('../../assets/homeIcons/vf.png')} // Reemplaza con tu imagen
                    style={styles.shapeImage}
                    resizeMode="contain"
                />
                <Image
                    source={require('../../assets/homeIcons/vf.png')} // Reemplaza con tu imagen
                    style={styles.shapeImage}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.arrowsContainer}>
                <View style={styles.arrow} />
                <View style={styles.arrow} />
                <View style={styles.arrow} />
            </View>
            <View style={styles.brainContainer}>
                <Image
                    source={require('../../assets/homeIcons/vf.png')} // Reemplaza con tu imagen
                    style={styles.brainImage}
                    resizeMode="contain"
                />
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: height * 0.03,
    },
    shapesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: width * 0.08,
        marginBottom: height * 0.02,
    },
    shapeImage: {
        width: width * 0.08,
        height: width * 0.08,
    },
    arrowsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: width * 0.08,
        marginBottom: height * 0.02,
    },
    arrow: {
        width: 2,
        height: height * 0.04,
        backgroundColor: '#333',
    },
    brainContainer: {
        alignItems: 'center',
    },
    brainImage: {
        width: width * 0.15,
        height: width * 0.15,
    },
});

export default CentralElement;