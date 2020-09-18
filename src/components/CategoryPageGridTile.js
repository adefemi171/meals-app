import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, Platform, TouchableNativeFeedback } from 'react-native'


const CategoryPageGridTile = props => {

    // variable to hold the default ripple effec by default TouchableOpacity
    let TouchEffect = TouchableOpacity

    if (Platform.OS == "android" && Platform.Version >= 21) {
        TouchEffect = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridTile}>
            <TouchEffect
            style={{flex:1}}
                onPress={props.onSelectNav}
            >
            <View style={{...styles.tileContainer, ...{backgroundColor: props.tileColor}}}>
                <Text style={styles.tileTitle} numberOfLines={2}>{props.tileTitle}</Text>
            </View>
            </TouchEffect>
        </View>
    )
};



const styles =  StyleSheet.create({
    gridTile:{
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden"
    },
    tileContainer:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height:2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    tileTitle:{
        fontFamily: 'open-sans-bold',
        fontSize: 18,
        textAlign: "right"
    }
})


export default CategoryPageGridTile