import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, StatusBar, Text, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../utils/Colors';
import WelcomeBanner from '../components/home/WelcomeBanner';
import IntroduccionCard from '../components/home/IntroduccionCard';
import ActividadesInteractivasCard from '../components/home/ActividadesInteractivasCard';
import TeoriaCard from '../components/home/TeoriaCard';
import ExportarResultadosCard from '../components/home/ExportarResultadosCard';
import CentralCard from '../components/home/CentralCard';
import RealizarEvaluacionCard from '../components/home/RealizarEvaluacionCard';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LogoutModal from '../components/home/LogoutModal';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
    const [logoutVisible, setLogoutVisible] = useState(false);
    const navigation = useNavigation<NavigationProp<any>>();
    const handleLogout = () => setLogoutVisible(true);
    const handleConfirmLogout = () => {
        setLogoutVisible(false);
        navigation.reset({ index: 0, routes: [{ name: 'Register' }] });
    };
    const handleCancelLogout = () => setLogoutVisible(false);
    return (
        <>
            <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
                    {/* Header */}
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Bienvenido, Jose</Text>
                        <TouchableOpacity style={styles.profileButton} onPress={handleLogout}>
                            <Icon name="logout" size={36} color="#000" />
                        </TouchableOpacity>
                    </View>

                    {/* Banner de bienvenida */}
                    <WelcomeBanner />

                    {/* Grid reorganizado con card central */}
                    <View style={styles.cardsGrid}>
                        <View style={styles.gridContainer}>
                            {/* Columna izquierda */}
                            <View style={styles.leftColumn}>
                                <View style={styles.cardWrapper}>
                                    <IntroduccionCard />
                                </View>
                                <View style={styles.cardWrapper}>
                                    <TeoriaCard />
                                </View>
                            </View>

                            {/* Card central */}
                            <View style={styles.centralColumn}>
                                <CentralCard />
                            </View>

                            {/* Columna derecha */}
                            <View style={styles.rightColumn}>
                                <View style={styles.cardWrapper}>
                                    <ActividadesInteractivasCard />
                                </View>
                                <View style={styles.cardWrapper}>
                                    <ExportarResultadosCard />
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Evaluación */}
                    <RealizarEvaluacionCard />
                </ScrollView>
            </View>
            <LogoutModal
                visible={logoutVisible}
                onConfirm={handleConfirmLogout}
                onCancel={handleCancelLogout}
            />
        </>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.White,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    headerText: {
        fontSize: width * 0.05,
        fontWeight: '700',
        color: Colors.Black,
    },
    profileButton: {
        padding: 10,
    },

    cardsGrid: {
        paddingHorizontal: 42,
        marginBottom: 8,
    },
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 220,
    },
    leftColumn: {
        justifyContent: 'space-between',
        height: 620,
    },
    rightColumn: {
        justifyContent: 'space-between',
        height: 620,
    },
    centralColumn: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardWrapper: {
        marginBottom: 14,
    },
});

export default HomeScreen;