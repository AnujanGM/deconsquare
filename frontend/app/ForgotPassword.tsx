import React, { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'

export default function ForgotPassword({ onBack }: { onBack?: () => void }) {
    const { width } = useWindowDimensions()
    const isSmallScreen = width < 768

    const [step, setStep] = useState<'username' | 'password'>('username')
    const [username, setUsername] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleContinue = () => {
        if (step === 'username' && username.trim()) {
            setStep('password')
        } else if (step === 'password' && newPassword && confirmPassword) {
            // Handle password reset logic here
            console.log('Password reset for:', username)
        }
    }

    return (
        <View style={[styles.container, isSmallScreen && styles.containerPhone]}>
            {/* Blue Section */}
            <View style={[styles.containerBlue, isSmallScreen && styles.containerBluePhone]}>
                <View style={[styles.headerRow, isSmallScreen && styles.headerRowPhone]}>
                    <Image source={require('../assets/logo_one.png')} style={[styles.logoOne, isSmallScreen && styles.logoOnePhone]} />
                    <Text style={styles.textDeconsquare}>DECONSQUARE</Text>
                </View>
                <View style={[styles.contentColumn, isSmallScreen && styles.contentColumnPhone]}>
                    <Text style={[styles.fleetSolutionsText, isSmallScreen && styles.fleetSolutionsTextPhone]}>Fleet Solutions</Text>
                    <Image source={require('../assets/Landing_Blue_Backgnround.png')} style={[styles.headerImage, isSmallScreen && styles.headerImagePhone]}></Image>
                    <Text style={[styles.bulkVehicleText, isSmallScreen && styles.bulkVehicleTextPhone]}>Bulk Vehicle Parts. </Text>
                    <Text style={[styles.simplifiedText, isSmallScreen && styles.simplifiedTextPhone]}>Simplified.</Text>
                    <Text style={[styles.descriptionText, isSmallScreen && styles.descriptionTextPhone]}>Streamline your fleet maintenance with our</Text>
                    <Text style={[styles.descriptionText2, isSmallScreen && styles.descriptionText2Phone]}>comprehensive inventory and rapid delivery network.</Text>
                </View>
            </View>

            {/* White Section */}
            <View style={[styles.containerWhite, isSmallScreen && styles.containerWhitePhone]}>
                <Text style={[styles.textWelcomeBack, isSmallScreen && styles.textWelcomeBackPhone]}>
                    {step === 'username' ? 'Reset Password' : 'Create New Password'}
                </Text>
                <Text style={[styles.subtitleText, isSmallScreen && styles.subtitleTextPhone]}>
                    {step === 'username'
                        ? 'Enter your username to reset your password'
                        : 'Enter your new password'}
                </Text>

                {step === 'username' ? (
                    <>
                        <Text style={[styles.labelText, isSmallScreen && styles.labelTextPhone]}>Username or Email</Text>
                        <TextInput
                            placeholder='Enter your username or email'
                            value={username}
                            onChangeText={setUsername}
                            style={[styles.textInput, isSmallScreen && styles.textInputPhone]}
                        />
                    </>
                ) : (
                    <>
                        <Text style={[styles.labelText, isSmallScreen && styles.labelTextPhone]}>New Password</Text>
                        <TextInput
                            placeholder='Enter new password'
                            value={newPassword}
                            onChangeText={setNewPassword}
                            secureTextEntry
                            style={[styles.textInput, isSmallScreen && styles.textInputPhone]}
                        />
                        <Text style={[styles.labelPassword, isSmallScreen && styles.labelPasswordPhone]}>Confirm Password</Text>
                        <TextInput
                            placeholder='Confirm new password'
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            secureTextEntry
                            style={[styles.textInput, isSmallScreen && styles.textInputPhone]}
                        />
                    </>
                )}

                <TouchableOpacity
                    style={[styles.submitButton, isSmallScreen && styles.submitButtonPhone]}
                    onPress={handleContinue}
                >
                    <Text style={styles.submitButtonText}>
                        {step === 'username' ? 'Continue' : 'Reset Password'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.backToLoginButton}
                    onPress={onBack}
                >
                    <Text style={[styles.backToLoginText, isSmallScreen && styles.backToLoginTextPhone]}>
                        Back to Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    containerSmall: {
        flexDirection: 'column',
    },
    containerBlue: {
        flex: 1,
        backgroundColor: '#235070',
        padding: 10,
    },
    containerBlueSmall: {
        flex: 0.4,
        paddingVertical: 15,
        paddingHorizontal: 15,
    },
    containerWhite: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '8%',
        paddingVertical: 20,
        justifyContent: 'center',
    },
    containerWhiteSmall: {
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    headerRow: {
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerRowSmall: {
        paddingTop: 15,
    },
    contentColumn: {
        flexDirection: 'column',
        marginLeft: 60,
        marginTop: 5,
    },
    contentColumnSmall: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        alignItems: 'center',
    },
    fleetSolutionsText: {
        color: '#94A3B8',
        fontSize: 12,
    },
    fleetSolutionsTextSmall: {
        fontSize: 11,
    },
    headerImage: {
        height: 150,
        width: 250,
        marginTop: 15,
    },
    headerImageSmall: {
        width: 180,
        height: 120,
    },
    bulkVehicleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5,
    },
    bulkVehicleTextSmall: {
        fontSize: 18,
        textAlign: 'center',
    },
    simplifiedText: {
        color: '#E5A913',
        fontWeight: 'bold',
        fontSize: 20,
    },
    simplifiedTextSmall: {
        fontSize: 18,
        textAlign: 'center',
    },
    descriptionText: {
        color: '#CBD5E1',
        fontWeight: '300',
        fontSize: 10,
        marginTop: 15,
    },
    descriptionTextSmall: {
        fontSize: 9,
        textAlign: 'center',
        marginTop: 10,
    },
    descriptionText2: {
        color: '#CBD5E1',
        fontWeight: '300',
        fontSize: 10,
        marginTop: 5,
    },
    descriptionText2Small: {
        fontSize: 9,
        textAlign: 'center',
    },
    textDeconsquare: {
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        padding: 10,
        marginLeft: 1,
        color: 'white',
    },
    logoOne: {
        width: 40,
        height: 40,
        marginLeft: 50,
    },
    logoOneSmall: {
        width: 32,
        height: 32,
        marginLeft: 0,
    },
    textWelcomeBack: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 8,
        color: '#14304A',
    },
    textWelcomeBackSmall: {
        fontSize: 24,
        marginTop: 20,
        marginBottom: 6,
    },
    subtitleText: {
        color: '#64748B',
        fontSize: 14,
        marginBottom: 32,
    },
    subtitleTextSmall: {
        fontSize: 12,
        marginBottom: 24,
    },
    labelText: {
        color: '#334155',
        fontSize: 13,
        marginBottom: 8,
        fontWeight: '600',
    },
    labelTextSmall: {
        fontSize: 12,
    },
    textInput: {
        height: 42,
        borderColor: '#CBD5E1',
        borderWidth: 1,
        paddingHorizontal: 12,
        borderRadius: 6,
        fontSize: 14,
        backgroundColor: '#F8FAFC',
        marginBottom: 16,
    },
    textInputSmall: {
        height: 40,
        fontSize: 13,
    },
    labelPassword: {
        color: '#334155',
        fontSize: 13,
        marginBottom: 8,
        fontWeight: '600',
    },
    labelPasswordSmall: {
        fontSize: 12,
    },
    submitButton: {
        backgroundColor: '#E5A913',
        height: 44,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    submitButtonSmall: {
        height: 42,
    },
    submitButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    backToLoginButton: {
        alignItems: 'center',
        paddingVertical: 4,
    },
    backToLoginText: {
        color: '#E5A913',
        fontSize: 14,
        fontWeight: '600',
    },
    backToLoginTextSmall: {
        fontSize: 13,
    },
})
