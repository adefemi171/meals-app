import React from 'react'
import { View, Text, Button, StyleSheet, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Color'


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
        headerStyle:{
            // Using Platform to switch colors on IOS and ANdroid
            backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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