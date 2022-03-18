import React from "react";
import {StyleSheet,View} from "react-native";

const Paginator = ({data}) => {
    return(
        <View style={styles.container}>
            {data.map((_,i)=>{
                return <View style={[styles.dot,{width:10}]} key={i.toString()}/>
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        height:64,
        justifyContent:"center",
        alignItems:'center'
    },
    dot:{
        height:10,
        borderRadius:5,
        backgroundColor:'#5CC562',
        marginHorizontal:8
    }
})

export default Paginator