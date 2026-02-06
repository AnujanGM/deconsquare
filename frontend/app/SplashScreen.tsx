import React, { useEffect, useRef } from 'react'
import { Animated, Image, StyleSheet, Text, useWindowDimensions, View } from 'react-native'

export default function SplashScreen() {
    const { width } = useWindowDimensions()
    const isSmallScreen = width < 768

    // Animation values
    const fadeAnim = useRef(new Animated.Value(0)).current
    const scaleAnim = useRef(new Animated.Value(0.8)).current

    useEffect(() => {
        // Logo fade in and scale animation
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            }),
        ]).start()
    }, [])

    return (
        <View style={styles.container}>
            {/* Animated Logo and Company Name */}
            <Animated.View
                style={[
                    styles.logoContainer,
                    {
                        opacity: fadeAnim,
                        transform: [{ scale: scaleAnim }],
                    },
                ]}
            >
                <View style={styles.logoBox}>
                    <Image
                        source={require('../assets/logo_one.png')}
                        style={[styles.logo, isSmallScreen && styles.logoPhone]}
                    />
                </View>
                <Text style={[styles.companyName, isSmallScreen && styles.companyNamePhone]}>
                    DECONSQUARE
                </Text>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#235070',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    logoContainer: {
        alignItems: 'center',
    },
    logoBox: {
        width: 140,
        height: 140,
        backgroundColor: '#E5A913',
        borderRadius: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
        elevation: 12,
    },
    logo: {
        width: 80,
        height: 80,
    },
    logoSmall: {
        width: 70,
        height: 70,
    },
    companyName: {
        fontSize: 40,
        fontWeight: '700',
        color: 'white',
        letterSpacing: 3,
    },
    companyNameSmall: {
        fontSize: 32,
        letterSpacing: 2,
    },
})
