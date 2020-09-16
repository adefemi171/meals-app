import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'




const MealDetailPage = props => {
    return (
        <View style={styles.container}>
            <Text> Meal Detail Page! </Text>
            <Button title="Back to Categories Page" onPress={() => {props.navigation.popToTop()}} />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})

export default MealDetailPage;