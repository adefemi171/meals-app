import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Platform, 
    ImageBackground 
} from 'react-native'

import TextWrapper from './TextWrapper'


const MealItem = props => {


    // variable to hold the default ripple effect by default TouchableOpacity
    let TouchEffect = TouchableOpacity

    // TouchableNativeFeedback is only supported for version >= 21
    if (Platform.OS == "android" && Platform.Version >= 21) {
        TouchEffect = TouchableNativeFeedback
    }
    return (
        <View style={styles.mealContainer}>
            <TouchEffect onPress={props.onMealSelect}>
                <View>
                    <View style={{...styles.mealRowContainer, ...styles.mealHeaderContainer}}>
                        <ImageBackground source={{uri: props.image}} style={styles.imgBg} >
                            <View style={styles.textTitleContainer}>
                                <Text style={styles.textTitle} numberOfLines={1}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRowContainer, ...styles.mealDetailContainer}}>
                        <TextWrapper>{props.duration}m</TextWrapper>
                        <TextWrapper>{props.complexity.toUpperCase()}</TextWrapper>
                        <TextWrapper>{props.affordability.toUpperCase()}</TextWrapper>
                    </View>
                </View>
            </TouchEffect>
        </View>
    )
}


const styles = StyleSheet.create({
    mealContainer:{
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: "hidden",
        marginVertical: 10
    },
    mealRowContainer: {
        flexDirection: "row"
    },
    mealHeaderContainer: {
        height: '85%'
    },
    imgBg: {
        width: '100%',
        height: '100%',
        justifyContent: "flex-end"
    },
    textTitleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    textTitle:{
        fontFamily: 'open-sans-bold',
        fontSize: 25,
        color: 'white',
    },
    mealDetailContainer:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: "center",
        height: '15%'
    }
})

export default MealItem