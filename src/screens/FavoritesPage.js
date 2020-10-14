import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons' // note it's HeaderButtons
import { useSelector } from 'react-redux' // useSelector is a hook allows to select a slice of the globally managed state and use in component

import HeaderButton from '../components/HeaderButton'
import  MealList from '../components/MealList' 



const FavoritesPage = props => {

    // to use useSelector to derive the MEAL, it takes a function
    // that will be executedd by react-redux
    // state.meals select the slice of the state
    // stste.meals.meals and in the slice the .meals access the meals props in the state slice
        // const mealsAvailable = useSelector(state => state.meals.meals)
    const favoriteMeal = useSelector(state => state.meals.favoriteMeals)

    //setting dummy favorite meal
    // const favoriteMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    
    return (
        <MealList mealListData={favoriteMeal} navigation={props.navigation}/>
    );
};


// accessing the function FavoritesPage as an object to set the title
// navigationOptions can either be an object if there's static hardcoded config
// or can be a function if one need a dynamic config that depends on changing data
FavoritesPage.navigationOptions = (navData) =>  {
    // console.log(navigationData)
    return{
        headerTitle: 'Selected Favorite Meal',
        headerLeft:  ( 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title="Menu" 
                    iconName='ios-menu' 
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}
                />
            </HeaderButtons>
        )
    }
  

}


export default FavoritesPage;