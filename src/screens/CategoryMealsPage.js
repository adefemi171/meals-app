import React from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'

import { CATEGORIES, MEALS } from '../data/dummy-data'


const CategoryMealsPage = props => {

    const rederMealItem = itemData => {
        return (
            <View>
                <Text>{itemData.item.title}</Text>
            </View>
        )
    }
    //getParam() a method provided to extract parameters received in this case from CategoriesPage
    const foodCatId = props.navigation.getParam('foodCategoryId')

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const selectedCategory = CATEGORIES.find(cat => cat.id === foodCatId) // not needed anymore

    // Finding the meals that fit into selected categories
    // storing them in a const called showMeals
    // filter is a javascript object to run a function in an array
    const showMeals = MEALS.filter(
        meal => meal.categoryIDs.indexOf(foodCatId) >= 0
    )

    return (
        <View style={styles.container}>
            <FlatList 
                data={showMeals} 
                keyExtractor={(item,index) => item.id} 
                renderItem={rederMealItem} 
            />
        </View>
    );
};

// accessing the function CategoryMealsPage as an object to set the title
// navigationOptions can either be an object if there's static hardcoded config
// or can be a function if one need a dynamic config that depends on changing data
// since the data is changing due to different id, title from CATEGORIES
CategoryMealsPage.navigationOptions = (navigationData) => {
    // console.log(navigationData)
    
    // navigationData can then be used to acces the getParam() function
    //getParam() a method provided to extract parameters received in this case from CategoriesPage
    const navigationDataFoodCatId = navigationData.navigation.getParam('foodCategoryId')

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const navigationDataSelectedCategory = CATEGORIES.find(cat => cat.id === navigationDataFoodCatId)

    return{
        headerTitle: navigationDataSelectedCategory.title,
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsPage;