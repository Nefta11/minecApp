import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../utils/Colors';

const TeoriaCard: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.8}>
            <View style={styles.content}>
                <Text style={styles.title}>Modulo 1:{'\n'}Seguridad{'\n'}Proactiva</Text>
                <View style={styles.iconWrapper}>
                    <Image
                        source={require('../../assets/homeIcons/teoria1.png')}
                        style={styles.cardImage}
                        resizeMode="contain"
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9DB4C4',
        borderRadius: 12,
        padding: 10,
        width: width * 0.25,
        height: width * 0.17,
        justifyContent: 'center',
        marginBottom: 140,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: width * 0.025,
        fontWeight: '600',
        color: Colors.White,
        flex: 1,
        paddingRight: 6,
    },
    iconWrapper: {
        position: 'absolute',
        right: 5,
        bottom: -1,
    },
    cardImage: {
        width: width * 0.09,
        height: width * 0.09,
    },
});

export default TeoriaCard;