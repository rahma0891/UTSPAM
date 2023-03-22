import  {Component,View,Button,StyleSheet,Text, Image, Linking, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';



const ProfileScreen=()=>{
    const navigation = useNavigation();


    
  return (

        <View className="content-list" style={styles.Content}>
          <View style={styles.contentName2}>
            <Image style={{width:200,height:200, marginBottom:40}} source={require("./photo.png")}/>
            <Text style={styles.Name}>RAHMA WATI</Text>
            <Text style={styles.Name}>120140184</Text>
            <Text style={styles.Name}>Teknik Informatika</Text>
            <Text style={styles.Name}>2020</Text>
            <TouchableOpacity onPress={() => Linking.openURL("https://instagram.com/radsgn89/")}>
            <Text style={styles.Name}>@radsgn89</Text>
            </TouchableOpacity>
            <Text style={styles.Name}>Indonesia</Text>
          </View>
        </View>
  
  )
}

const styles = StyleSheet.create({
    Content:{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'#FF8B13',
      height:1000,
    },

    Name:{
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: "300",
   
    },
    contentName2:{
      width:'100%',
      display:'flex',
      position:"relative",
      textAlign:"center",
      marginTop:25,
      paddingTop:30, 
      alignItems:"center",
    },

  });

export default ProfileScreen;