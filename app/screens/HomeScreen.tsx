import React from 'react';
import { View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Colors from '../utils/Colors';
import WelcomeBanner from '../components/home/WelcomeBanner';
import IntroduccionCard from '../components/home/IntroduccionCard';
import ActividadesInteractivasCard from '../components/home/ActividadesInteractivasCard';
import TeoriaCard from '../components/home/TeoriaCard';
import ExportarResultadosCard from '../components/home/ExportarResultadosCard';
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

                    {/* Grid de tarjetas principales */}
                    <View style={styles.cardsGrid}>
                        <View style={styles.cardRow}>
                            <View style={styles.cardColumn}>
                                <IntroduccionCard />
                            </View>
                            <View style={styles.cardColumn}>
                                <ActividadesInteractivasCard />
                            </View>
                        </View>

                        <View style={styles.cardRow}>
                            <View style={styles.cardColumn}>
                                <TeoriaCard />
                            </View>
                            <View style={styles.cardColumn}>
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
        backgroundColor: Colors.White,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    cardsGrid: {
        paddingHorizontal: 16,
    },
    cardRow: {
        flexDirection: 'row',
        marginBottom: 16,
        gap: 16,
    },
    cardColumn: {
        flex: 1,
    },
});

export default HomeScreen;