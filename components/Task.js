import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';






const Task = (props) => { //passing the item

    

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>

                <Text style={styles.itemText}>{props.text}</Text>
               
            </View> 


        </View>

    )
    

    
}




const styles = StyleSheet.create({
    item: {
        width: 270,
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius:20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginRight: 15,
        marginLeft: -10,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
       
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%',
       
    },
   
        
   

});

export default Task;