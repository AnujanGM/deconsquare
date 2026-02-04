import React from 'react'
import { Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View, useWindowDimensions } from 'react-native'
import CheckBox from 'react-native-check-box'

export default function index() {
  const { width } = useWindowDimensions()
  const isPhone = width < 768

  return (
    <View style={[styles.container, isPhone && styles.containerPhone]}>
      <View style={[styles.containerBlue, isPhone && styles.containerBluePhone]}>
        <View style={[styles.headerRow, isPhone && styles.headerRowPhone]}>
          <Image source={require('../../assets/logo_one.png')} style={[styles.logoOne, isPhone && styles.logoOnePhone]} />
          <Text style={styles.textDeconsquare}>DECONSQUARE</Text>
        </View>
        <View style={[styles.contentColumn, isPhone && styles.contentColumnPhone]}>
          <Text style={[styles.fleetSolutionsText, isPhone && styles.fleetSolutionsTextPhone]}>Fleet Solutions</Text>
          <Image source={require('../../assets/Landing_Blue_Backgnround.png')} style={[styles.headerImage, isPhone && styles.headerImagePhone]}></Image>
          <Text style={[styles.bulkVehicleText, isPhone && styles.bulkVehicleTextPhone]}>Bulk Vehicle Parts. </Text>
          <Text style={[styles.simplifiedText, isPhone && styles.simplifiedTextPhone]}>Simplified.</Text>
          <Text style={[styles.descriptionText, isPhone && styles.descriptionTextPhone]}>Streamline your fleet maintenance with our</Text>
          <Text style={[styles.descriptionText2, isPhone && styles.descriptionText2Phone]}>comprehensive inventory and rapid delivery network.</Text>
        </View>
      </View>
      <View style={[styles.containerWhite, isPhone && styles.containerWhitePhone]}>
        <Text style={[styles.textWelcomeBack, isPhone && styles.textWelcomeBackPhone]}>Welcome Back</Text>
        <Text style={[styles.subtitleText, isPhone && styles.subtitleTextPhone]}>Sign in to manage your fleet orders</Text>
        <Text style={[styles.labelText, isPhone && styles.labelTextPhone]}>User name or email</Text>
        <TextInput placeholder='Enter your user name or email' style={[styles.textInput, isPhone && styles.textInputPhone]} />
        <Text style={[styles.labelPassword, isPhone && styles.labelPasswordPhone]}>Password</Text>
        <TextInput placeholder='Enter your password' secureTextEntry style={[styles.textInput, isPhone && styles.textInputPhone]} />
        <View style={[styles.checkboxRow, isPhone && styles.checkboxRowPhone]}>
          <CheckBox
            style={styles.checkbox}
            onClick={() => { }}
            isChecked={false}
            checkBoxColor='#767676'
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
          <Text style={styles.forgotPasswordText} onPress={() => Linking.openURL('https://vortextsoft.com')}> Forgot password?</Text>
        </View>
        <TouchableOpacity style={[styles.signInButton, isPhone && styles.signInButtonPhone]}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        <View style={[styles.footerRow, isPhone && styles.footerRowPhone]}>
          <Text style={[styles.footerText, isPhone && styles.footerTextPhone]}>{"Don't you have a fleet account?"}</Text>
          <Text style={[styles.applyAccessText, isPhone && styles.applyAccessTextPhone]} onPress={() => Linking.openURL('https://vortextsoft.com')}>Apply for access</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  containerPhone: {
    flexDirection: 'column',
  },
  containerBlue: {
    flex: 1,
    color: 'blue',
    backgroundColor: '#235070',
    fontWeight: 'bold',
    padding: 10,
  },
  containerBluePhone: {
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
  containerWhitePhone: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  headerRow: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerRowPhone: {
    paddingTop: 15,
  },
  contentColumn: {
    flexDirection: 'column',
    marginLeft: 60,
    marginTop: 5,
  },
  contentColumnPhone: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  fleetSolutionsText: {
    color: '#94A3B8',
    fontSize: 12,
  },
  headerImage: {
    height: 150,
    width: 250,
    marginTop: 15,
  },
  bulkVehicleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  simplifiedText: {
    color: '#E5A913',
    fontWeight: 'bold',
    fontSize: 20,
  },
  descriptionText: {
    color: '#CBD5E1',
    fontWeight: '300',
    fontSize: 10,
    marginTop: 15,
  },
  descriptionText2: {
    color: '#CBD5E1',
    fontWeight: '300',
    fontSize: 10,
    marginTop: 5,
  },
  textDeconsquare: {
    flex: 1,
    alignItems: 'center',
    fontSize: 20,
    fontWeight: '700',
    padding: 10,
    marginLeft: 1,
    color: 'white',
  },
  textWelcomeBack: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 8,
    color: '#14304A',
  },
  textWelcomeBackPhone: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 6,
  },
  subtitleText: {
    color: '#64748B',
    fontSize: 14,
    marginBottom: 32,
  },
  subtitleTextPhone: {
    fontSize: 12,
    marginBottom: 24,
  },
  labelText: {
    color: '#334155',
    fontSize: 13,
    marginBottom: 8,
    fontWeight: '600',
  },
  labelTextPhone: {
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
  textInputPhone: {
    height: 40,
    fontSize: 13,
  },
  labelPassword: {
    color: '#334155',
    fontSize: 13,
    marginBottom: 8,
    fontWeight: '600',
  },
  labelPasswordPhone: {
    fontSize: 12,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkboxRowPhone: {
    marginBottom: 20,
  },
  checkbox: {
    padding: 1,
  },
  rememberMeText: {
    flex: 1,
    marginLeft: 1,
    padding: 5,
    color: '#334155',
    fontSize: 12,
  },
  forgotPasswordText: {
    color: 'blue',
    fontSize: 12,
    padding: 5,
  },
  signInButton: {
    backgroundColor: '#E5A913',
    height: 44,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signInButtonPhone: {
    height: 42,
  },
  signInButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerRowPhone: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerText: {
    color: '#64748B',
    fontSize: 13,
  },
  footerTextPhone: {
    fontSize: 12,
    marginBottom: 4,
  },
  applyAccessText: {
    color: '#E5A913',
    marginLeft: 6,
    fontSize: 13,
    fontWeight: '600',
  },
  applyAccessTextPhone: {
    fontSize: 12,
    marginLeft: 0,
  },
  logoOne: {
    width: 40,
    height: 40,
    marginLeft: 50,
  },
  logoOnePhone: {
    width: 32,
    height: 32,
    marginLeft: 0,
  },
  headerImagePhone: {
    width: 180,
    height: 120,
  },
  bulkVehicleTextPhone: {
    fontSize: 18,
    textAlign: 'center',
  },
  simplifiedTextPhone: {
    fontSize: 18,
    textAlign: 'center',
  },
  descriptionTextPhone: {
    fontSize: 9,
    textAlign: 'center',
    marginTop: 10,
  },
  descriptionText2Phone: {
    fontSize: 9,
    textAlign: 'center',
  },
  fleetSolutionsTextPhone: {
    fontSize: 11,
  }
})