import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const CentralCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
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
        width: width * 0.32,
        height: width * 0.50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    centralImage: {
        width: width * 0.5,
        height: width * 0.25,
    },
});

export default CentralCard;