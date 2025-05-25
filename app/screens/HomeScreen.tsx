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
                        {/* Primera fila */}
                        <View style={styles.topRow}>
                            <View style={styles.smallCard}>
                                <IntroduccionCard />
                            </View>
                            <View style={styles.smallCard}>
                                <ActividadesInteractivasCard />
                            </View>
                        </View>

                        {/* Card central */}
                        <View style={styles.centralCardContainer}>
                            <CentralCard />
                        </View>

                        {/* Segunda fila */}
                        <View style={styles.bottomRow}>
                            <View style={styles.smallCard}>
                                <TeoriaCard />
                            </View>
                            <View style={styles.smallCard}>
                                <ExportarResultadosCard />
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
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        gap: 12,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
        gap: 12,
    },
    smallCard: {
        flex: 1,
        maxWidth: '45%',
    },
    centralCardContainer: {
        alignSelf: 'center',
        width: '70%',
    },
});

export default HomeScreen;