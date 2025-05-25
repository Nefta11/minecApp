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
                    <Icon name="menu" size={24} color={Colors.Black} />
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
        backgroundColor: Colors.PrimaryYellow,
        borderRadius: 16,
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.02,
        padding: width * 0.05,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    welcomeText: {
        fontSize: width * 0.06,
        fontWeight: '700',
        color: Colors.Black,
    },
    menuButton: {
        padding: 4,
    },
    bannerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    questionText: {
        fontSize: width * 0.045,
        fontWeight: '600',
        color: Colors.Black,
        flex: 1,
    },
    imageContainer: {
        width: width * 0.15,
        height: width * 0.15,
    },
    workerImage: {
        width: '100%',
        height: '100%',
    },
});

export default WelcomeBanner;