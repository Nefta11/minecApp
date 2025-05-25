import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import Colors from '../../utils/Colors';

const RealizarEvaluacionCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>Realizar Evaluacion</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../../assets/homeIcons/vf.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginTop: 8,
        marginBottom: 16,
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.White,
        borderRadius: 16,
        padding: 20,
        minHeight: height * 0.1,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
    },
    title: {
        fontSize: width * 0.052,
        fontWeight: '700',
        color: Colors.Black,
        flex: 1,
    },
    imageContainer: {
        marginLeft: 16,
    },
    cardImage: {
        width: width * 0.16,
        height: width * 0.16,
    },
});

export default RealizarEvaluacionCard;