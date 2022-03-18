import React from "react";
import {View,StyleSheet,Text,Image,useWindowDimensions} from "react-native";

const OnboardingItem = ({item}) => {
    const {width} = useWindowDimensions();
    item = item.item
    return (
        <View style={[styles.container,{width}]}>
            <Image source={item.image } style={[styles.image,{width, resizeMode:'contain'}]}/>
            <View style={{flex: 0.3}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    image:{
      flex:0.7,
        justifyContent:'center'
    },
    title:{
      fontWeight:'800',
        fontSize:28,
        marginBottom:10,
        color: '#5CC562',
        textAlign:'center'
    },
    description : {
      fontWeight:'300',
        color:'#5b8b53',
        textAlign:'center',
        paddingHorizontal:64,
    }
});

export default OnboardingItem