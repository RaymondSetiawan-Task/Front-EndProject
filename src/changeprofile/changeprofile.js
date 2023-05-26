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

const changephoto = () => {
  const[state,setState] = useState({
    photo: " ",
  });

  const option = {
    mediaType:'photo',
    quality: 1,
    saveToPhotos:true,
    includeBase64:false,
  };

  const toast = (msg) =>{
    ToastAndroid.show(msg, ToastAndroid.SHORT);
  }

  const openCamera = () =>{
    ImagePicker.launchCamera({mediaType:'photo',
    quality: 1,
    saveToPhotos:true},(res) =>{
      if(res.didCancel){
        toast('Cancel pick picture')
      }else if(res.errorCode){
        toast('Error', res.errorCode)
      }else{
        console.log(res.uri);
      }
    })
  }
  const openGallery = () =>{
    ImagePicker.launchImageLibrary({mediaType:'photo',
    quality: 1,
    saveToPhotos:true}, (res) =>{
      if(res.didCancel){
        toast('Cancel pick picture')
      }else if(res.errorCode){
        toast('Error', res.errorCode)
      }else{
        console.log(res.uri);
      }
    })
  }

  return(
    <>
    <View style={[styles.box, styles.box1]}>
      <Text style={{fontSize:25, color:"white"}}>Ganti Foto Profil</Text>
    </View>
    <View style={styles.container}>
      <View style={{height: 400, width: 400, backgroundColor: 'silver', marginBottom: 150}}></View>
      {state.photo == "" ? (<Text>No Image</Text>
      ) : (
        <Image source={{ uri: state.photo }} />)}
      <View style={[styles.wrapBtn]}>
        <Button
          onPress={openCamera}
          title="Ambil dari kamera"/>
      </View>
      <View style={styles.wrapBtn}>
        <Button
          onPress={openGallery}
          title="Ambil dari gallery" />
      </View>
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
    width: 380,
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: '#002984',
  },

  //image:{
    //height: 250,
    //width: 250,
  //}
});

export default changephoto;