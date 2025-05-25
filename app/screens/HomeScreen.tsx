import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Colors from '../utils/Colors';
import WelcomeBanner from '../components/home/WelcomeBanner';
import IntroduccionCard from '../components/home/IntroduccionCard';
import ActividadesInteractivasCard from '../components/home/ActividadesInteractivasCard';
import TeoriaCard from '../components/home/TeoriaCard';
import ExportarResultadosCard from '../components/home/ExportarResultadosCard';
import CentralCard from '../components/home/CentralCard';
import RealizarEvaluacionCard from '../components/home/RealizarEvaluacionCard';

const HomeScreen: React.FC = () => {
    return (
        <>
            <StatusBar backgroundColor={Colors.White} barStyle="dark-content" />
            <View style={styles.container}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.scrollContent}
                >
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
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    scrollContent: {
        paddingBottom: 20,
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
        marginBottom: 8,
    },
});

export default HomeScreen;