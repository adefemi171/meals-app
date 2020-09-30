import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Color'

import CategoriesPage from '../screens/CategoriesPage'
import CategoryMealsPage from '../screens/CategoryMealsPage'
import MealDetailPage from '../screens/MealDetailPage'
import FavoritePage from '../screens/FavoritesPage'
import FiltersPage from '../screens/FiltersPage'


// defaultsettings for NavOptions
const defaultStackNavOptions = {
    headerStyle:{
    // Using Platform to switch colors on IOS and ANdroid
        backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : ''
    },
    headerTitleStyle:{
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans-reg'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        
}



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
    defaultNavigationOptions: defaultStackNavOptions
})


// favorites stacknavigator
const FavoriteNavigator = createStackNavigator({
    Favorites:FavoritePage,
    MealDetail: MealDetailPage,
},{
    mode: 'modal',
    // this allow settings that applies to all screen
    defaultNavigationOptions: defaultStackNavOptions
})


// store the screen config for the tabs in a constanr
const bottomTabConfig = 
    {
        Meals: {
            screen: AppNavigator,
            navigationOptions:{
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor}/>
                    )
                },
                tabBarColor: Colors.secondaryColor,
                tabBarLabel: Platform.OS === 'android' 
                    ? <Text style={{fontFamily: 'open-sans-bold'}}> Meals </Text> 
                    :  'Meal'
            }
        }, //Pointing to the whole stack
        Favorites: {
            screen: FavoriteNavigator,
            navigationOptions:{
                tabBarIcon: (tabInfo) => {
                    return (
                        <Ionicons name='ios-star' size={20} color={tabInfo.tintColor}/>
                    )
                },
                tabBarColor: Colors.primaryColor,
                tabBarLabel: Platform.OS === 'android' 
                ? <Text style={{fontFamily: 'open-sans-reg'}}> Favorites </Text> 
                :  'Favorites'
            }
        } // pointing to a screen
    }


const AppFavTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(bottomTabConfig, {
            activeTintColor: Colors.secondaryColor,
            shifting: true
        }) 
        :  createBottomTabNavigator(
            bottomTabConfig , {
                tabBarOptions:{
                    labelStyle:{
                        fontFamily: 'open-sans-reg',
                    },
                    activeTintColor: Colors.primaryColor,
                    activeBackgroundColor: Colors.secondaryColor
                }
            }
)


// filter screen stack
const FiltersNavigator = createStackNavigator({
    Filters: FiltersPage
},{
    mode: 'modal',
    // this allow settings that applies to all screen
    navigationOptions:{
        drawerLabel: 'Filters'
    },
    defaultNavigationOptions: defaultStackNavOptions
})

const MainDrawerNavigator = createDrawerNavigator({
    Meals: {
        screen: AppFavTabNavigator, 
        navigationOptions:{
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions:{
        activeTintColor: Colors.secondaryColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})
export default createAppContainer(MainDrawerNavigator);