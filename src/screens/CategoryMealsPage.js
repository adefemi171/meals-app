import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




const CategoryMealsPage = props => {
    return (
        <View style={styles.container}>
            <Text> Category Meals Page! </Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsPage;