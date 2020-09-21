import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Color'

import CategoriesPage from '../screens/CategoriesPage'
import CategoryMealsPage from '../screens/CategoryMealsPage'
import MealDetailPage from '../screens/MealDetailPage'
import FavoritePage from '../screens/FavoritesPage'

const AppNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesPage,
        navigationOptions:{
            headerTitle: 'Food Categories'
        }
    },
    CategoryMeals: {
        screen: CategoryMealsPage
    },
    MealDetail: MealDetailPage
}, {
    mode: 'modal',
    // this allow settings that applies to all screen
    defaultNavigationOptions: {
        headerStyle:{
            // Using Platform to switch colors on IOS and ANdroid
            backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})

const AppFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: AppNavigator,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor}/>
                )
            }
        }
    }, //Pointing to the whole stack
    Favorites: {
        screen: FavoritePage,
        navigationOptions:{
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons name='ios-star' size={20} color={tabInfo.tintColor}/>
                )
            }
        }
    } // pointing to a screen
}, {
    tabBarOptions:{
        activeTintColor: Colors.primaryColor,
        activeBackgroundColor: Colors.secondaryColor
    }
}
)

export default createAppContainer(AppFavTabNavigator);