import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utils/Colors';

const WelcomeBanner = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.welcomeText}>Bienvenido, Jose</Text>
                <TouchableOpacity style={styles.menuButton}>
                    <Icon name="menu" size={28} color={Colors.Black} />
                </TouchableOpacity>
            </View>
            <View style={styles.bannerContent}>
                <Text style={styles.questionText}>¿Que quieres aprender hoy?</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/homeIcons/minero1.png')}
                        style={styles.workerImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFB800',
        borderRadius: 20,
        marginHorizontal: 16,
        marginTop: 20,
        marginBottom: 16,
        padding: 20,
        minHeight: height * 0.18,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    welcomeText: {
        fontSize: width * 0.065,
        fontWeight: '700',
        color: Colors.Black,
    },
    menuButton: {
        padding: 8,
    },
    bannerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
    questionText: {
        fontSize: width * 0.048,
        fontWeight: '600',
        color: Colors.Black,
        flex: 1,
        paddingRight: 16,
    },
    imageContainer: {
        width: width * 0.18,
        height: width * 0.18,
    },
    workerImage: {
        width: '100%',
        height: '100%',
    },
});

export default WelcomeBanner;