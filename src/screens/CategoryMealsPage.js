import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'


const CategoryMealsPage = props => {
    //getParam() a method provided to extract parameters received in this case from CategoriesPage
    const foodCatId = props.navigation.getParam('foodCategoryId')

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const selectedCategory = CATEGORIES.find(cat => cat.id === foodCatId)
    return (
        <View style={styles.container}>
            <Text> Category Meals Page! </Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Meals Page" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }} />
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