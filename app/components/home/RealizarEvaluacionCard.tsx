import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Colors from '../../utils/Colors';

const RealizarEvaluacionCard: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Realizar Evaluacion</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/homeIcons/vf.png')} // Reemplaza con tu imagen
                        style={styles.cardImage}
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
        marginHorizontal: width * 0.04,
        marginVertical: height * 0.02,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.White,
        borderRadius: 16,
        padding: width * 0.05,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    title: {
        fontSize: width * 0.05,
        fontWeight: '700',
        color: Colors.Black,
        flex: 1,
    },
    imageContainer: {
        marginLeft: width * 0.04,
    },
    cardImage: {
        width: width * 0.15,
        height: width * 0.15,
    },
});

export default RealizarEvaluacionCard;
