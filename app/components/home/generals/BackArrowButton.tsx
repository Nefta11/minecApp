import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../../utils/Colors';

interface BackArrowButtonProps {
    onPress: () => void;
    style?: object;
}

const BackArrowButton: React.FC<BackArrowButtonProps> = ({ onPress, style }) => (
    <TouchableOpacity
        style={[styles.backButton, style]}
        onPress={onPress}
        activeOpacity={0.8}
    >
        <Icon name="arrow-back" size={60} color={Colors.Black} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    backButton: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.PrimaryYellow,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: Colors.Black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
});

export default BackArrowButton;
