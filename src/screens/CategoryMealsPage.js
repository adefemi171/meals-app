import React from 'react'
import { useSelector } from 'react-redux' // useSelector is a hook allows to select a slice of the globally managed state and use in component

import { CATEGORIES } from '../data/dummy-data'
import  MealList from '../components/MealList' 


const CategoryMealsPage = props => {

  
    //getParam() a method provided to extract parameters received in this case from CategoriesPage
    const foodCatId = props.navigation.getParam('foodCategoryId')

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const selectedCategory = CATEGORIES.find(cat => cat.id === foodCatId) // not needed anymore

    // to use useSelector to derive the MEAL, it takes a function
    // that will be executedd by react-redux
    const mealsAvailable = useSelector(state => state.meals.filteredMeals)
    
    // Finding the meals that fit into selected categories
    // storing them in a const called showMeals
    // filter is a javascript object to run a function in an array
    const showMeals = mealsAvailable.filter(
        meal => meal.categoryIDs.indexOf(foodCatId) >= 0
    )

    return (
        <MealList mealListData={showMeals} navigation={props.navigation}/>
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


export default CategoryMealsPage;