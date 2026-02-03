import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Linking} from 'react-native'
import React from 'react'
import CheckBox from 'react-native-check-box'

export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.containerBlue}>
        <View style={{paddingTop:30,flexDirection:'row', justifyContent:'center'}}>
        <Image source={require('../../assets/logo_one.png')} style={styles.logoOne} />
        <Text style={styles.textDeconsquare}>DECONSQUARE</Text>
      </View>
      <View style={{flexDirection:'column', marginLeft:60, marginTop:5}}>
        <Text style={{color:"#94A3B8", fontSize:12}}>Fleet Solutions</Text>
        <Image source={require('../../assets/Landing_Blue_Backgnround.png')} style={{height:150,width:250, marginTop:15}}></Image>
        <Text style={{color:'white', fontWeight:'bold', fontSize:20, marginBottom:5}}>Bulk Vehicle Parts. </Text>
        <Text style={{color:'#E5A913', fontWeight:'bold', fontSize:20}}>Simplified.</Text>
        <Text style={{color:'#CBD5E1', fontWeight:'light', fontSize:10, marginTop:15}}>Streamline your fleet maintenance with our</Text>
        <Text style={{color:'#CBD5E1', fontWeight:'light', fontSize:10, marginTop:5}}>comprehensive inventory and rapid delivery network.</Text>
      </View>
      </View>
      <View style={styles.containerWhite}>
        <Text style={styles.textWelcomeBack}>Welcome Back</Text>
        <Text style={{color:'#64748B', fontSize:12, marginLeft:20, marginTop:4, paddingLeft: 20,}}>Sign in to manage your fleet orders</Text>
        <Text style={{color:'#334155', fontSize:12, marginLeft:20, marginTop:24, paddingLeft: 20, fontWeight:'condensedBold'}}>User name or email</Text>
        <TextInput placeholder='Enter your user name or email' style={{height:30, borderColor:'#94A3B8', borderWidth:0.25, marginLeft:40, marginRight:120, marginTop:8, paddingLeft:10, borderRadius:5}} />
        <Text style={{color:'#334155', fontSize:12, marginLeft:20, marginTop:15, paddingLeft: 20, fontWeight:'condensedBold'}}>Password</Text>
        <TextInput placeholder='Enter your password' style={{height:30, borderColor:'#94A3B8', borderWidth:0.25, marginLeft:40, marginRight:120, marginTop:8, paddingLeft:10, borderRadius:5}} />
        <View style={{flexDirection:'row', marginTop:10, marginLeft:40, marginRight:40}}> 
          <CheckBox
            style={{padding: 1}}
            onClick={()=>{}}
            isChecked={false}
            checkBoxColor='#767676'
          />
          <Text style={{flex:1,marginLeft:1,padding:5,color:'#334155', fontSize:12}}>Remember me</Text>
          <Text style={{color: 'blue', fontSize:12, padding:5}} onPress={() => Linking.openURL('https://vortextsoft.com')}> Forgot password?</Text>
        </View>
        <TouchableOpacity style={{backgroundColor:'#E5A913', height:35, marginLeft:40, marginRight:120, marginTop:20, borderRadius:5, alignItems:'center', justifyContent:'center'}}>
          <Text style={{color:'white', fontWeight:'bold'}}>Sign In</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', alignItems:'center'}}>
        <Text style={{color:'#334155', fontSize:12, marginTop:15, marginLeft:60}}> {"Don't you have a fleet account?"} </Text>
        <Text style={{color: '#C4920F', marginLeft:10, marginTop:15, fontSize:12}} onPress={() => Linking.openURL('https://vortextsoft.com')}> Apply for access</Text>
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
  containerBlue: {
    flex:1,
    color: 'blue',
    backgroundColor: '#235070',
    fontWeight: 'bold',
    padding: 10,
  },
  containerWhite: {
    flex: 1,
    alignContent: 'center',
    color: 'blue',
    backgroundColor: 'white',
    padding: 10,
  },
  textDeconsquare:{
    flex: 1,
    alignItems:'center',
    fontSize: 20,
    fontWeight: '700',
    padding: 10,
    marginLeft:1,
    color: 'white',
  },
  textWelcomeBack:{
    fontSize: 24,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 15,
    marginTop: 26,
    marginLeft: 20,
    color: '#14304A',
  },
  logoOne:{
    width: 40,
    height: 40,
    marginLeft: 50,
  }
})
