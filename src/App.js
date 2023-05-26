import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  Icon,
  ImageBackground,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
//import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
//import ImagePicker from 'react-native-image-picker';

const App = () => {

  return(
    <>
    <View style={[styles.box, styles.box1]}>
      <Text style={{fontSize:25, color:"white"}}>Profil</Text>
    </View>
    <View style={styles.containr}>
      <View style={styles.containr1}>
        <View style={{height: 40, width: 40, backgroundColor: 'silver', margin: 10}}></View>
        <View style={styles.containr2}>
        <View style={{height: 60, width: 80, backgroundColor: 'white', marginTop: 10}}>
          <Text style={{fontWeight: 700, fontSize: 12}}>John Doe</Text>
          <Text style={{ fontSize: 12 }}>Kelas 10 IPA 8</Text>
        </View>   
        </View>
      </View>
        
    </View>
    <View style={styles.container}>
      <View style={{height: 200, width: "90%", backgroundColor: '#002984', margin: 10}}></View>
      <View style={{height: 200, width: "90%", backgroundColor: '#002984', margin: 10}}></View>
      <View style={{height: 200, width: "90%", backgroundColor: '#002984', margin: 10}}></View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  box: {
    flex: .5, 
},
box1: {
  flex: .05,
  backgroundColor: '#002984'
},

  container: {
  flex:1,
  justifyContent: 'center',
  alignItems:'center',
  flexDirection:'column',
  backgroundColor: 'white',
  
  },
  containr: {
    flex: .1,
    backgroundColor: 'white',
    flexDirection: 'column',  
    },

  containr1: {
    flex: .1,
    flexDirection: 'row',
    alignItems:"flex-start",
    backgroundColor: 'white',  
    },
    containr2: {
      flex: 1,
      flexDirection: 'column',
      alignItems:"flex-start",
      backgroundColor: 'white',  
      },

  wrapBtn: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 340,
    marginTop: 50,
  }

});

export default App;