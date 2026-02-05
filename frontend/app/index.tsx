import { useRouter } from 'expo-router'
import React, { useEffect, useState } from 'react'
import LoginScreen from './(tabs)/index'
import DashboardScreen from './DashboardScreen'
import ForgotPassword from './ForgotPassword'
import SplashScreen from './SplashScreen'

type Screen = 'splash' | 'login' | 'forgotPassword' | 'dashboard'

export default function Index() {
    const [currentScreen, setCurrentScreen] = useState<Screen>('splash')
    const router = useRouter()

    useEffect(() => {
        // Show splash screen for 3 seconds
        const timer = setTimeout(() => {
            setCurrentScreen('login')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    if (currentScreen === 'splash') {
        return <SplashScreen />
    }

    if (currentScreen === 'forgotPassword') {
        return <ForgotPassword onBack={() => setCurrentScreen('login')} />
    }

    if (currentScreen === 'dashboard') {
        return <DashboardScreen />
    }

    return <LoginScreen onForgotPassword={() => setCurrentScreen('forgotPassword')} onLogin={() => setCurrentScreen('dashboard')} />
}
