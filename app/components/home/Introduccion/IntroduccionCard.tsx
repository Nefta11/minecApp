import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../../utils/Colors';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define your stack param list with the correct route names
type RootStackParamList = {
    IntroduccionScreen: undefined;
    // add other routes here if needed
};

const IntroduccionCard: React.FC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('IntroduccionScreen')}
        >
            <View style={styles.content}>
                <Text style={styles.title}>Introduccion</Text>
                <View style={styles.iconWrapper}>
                    <Image
                        source={require('../../../assets/homeIcons/entrenamiento1.png')}
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
        backgroundColor: '#4A4A4A',
        borderRadius: 12,
        padding: 8,
        width: width * 0.25,
        height: width * 0.17,
        justifyContent: 'center',
        marginTop: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: width * 0.028,
        fontWeight: '600',
        color: Colors.White,
        flex: 1,
        paddingRight: 6,
    },
    iconWrapper: {
        position: 'absolute',
        right: 5,
        bottom: 1,
    },
    cardImage: {
        width: width * 0.09,
        height: width * 0.09,
    },
});

export default IntroduccionCard;