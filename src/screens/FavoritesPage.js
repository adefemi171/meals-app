import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons' // note it's HeaderButtons

import HeaderButton from '../components/HeaderButton'
import  MealList from '../components/MealList' 
import { MEALS } from '../data/dummy-data'


const FavoritesPage = props => {

    //setting dummy favorite meal
    const favoriteMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
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