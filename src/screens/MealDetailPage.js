import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'


import { MEALS } from '../data/dummy-data'

const MealDetailPage = props => {

    const mealId = props.navigation.getParam('mealID') // mealID was gotten fromthe param in categorMealsPage under RendrItem

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const selectedMeal = MEALS.find(meal => meal.id === mealId) 

    return (
        <View style={styles.container}>
            <Text> {selectedMeal.title} </Text>
            <Text> Meal Detail Page! </Text>
            <Button title="Back to Categories Page" onPress={() => {props.navigation.popToTop()}} />
        </View>
    );
};


// accessing the function MealDetailPage as an object to set the title
// navigationOptions can either be an object if there's static hardcoded config
// or can be a function if one need a dynamic config that depends on changing data
// since the data is changing due to different id, title from CATEGORIES
MealDetailPage.navigationOptions = (navigationData) => {
       
    // navigationData can then be used to acces the getParam() function
    //getParam() a method provided to extract parameters received in this case from CategoriesPage
    const navigationmealId = navigationData.navigation.getParam('mealID')

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const navigationDataSelectedMeal = MEALS.find(meal => meal.id === navigationmealId)

    return{
        headerTitle: navigationDataSelectedMeal.title,
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    }
})

export default MealDetailPage;