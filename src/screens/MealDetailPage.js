import React from 'react'
import { ScrollView, View, Text, Button, StyleSheet, Image } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons' // note it's HeaderButtons


import { MEALS } from '../data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import TextWrapper from '../components/TextWrapper'



// sepererate component to style the ingredients and steps
const ItemList = props => {
    return (
        <View style={styles.itemList}>
            <TextWrapper>{props.children}</TextWrapper>
        </View>
    )
}
const MealDetailPage = props => {

    const mealId = props.navigation.getParam('mealID') // mealID was gotten fromthe param in categorMealsPage under RendrItem

    // function to find selected food category and returns item where the function is true
    //find takes a function and executes on every element in the array
    const selectedMeal = MEALS.find(meal => meal.id === mealId) 

    return (
        <ScrollView>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.imageContainer}/>
            <View style={styles.mealDetailContainer}>
                <TextWrapper>{selectedMeal.duration}m</TextWrapper>
                <TextWrapper>{selectedMeal.complexity.toUpperCase()}</TextWrapper>
                <TextWrapper>{selectedMeal.affordability.toUpperCase()}</TextWrapper>
            </View>
            <Text style={styles.ingredientText}> Ingredients </Text>
            {selectedMeal.ingredients.map(ingredient => (
                <ItemList key={ingredient}>* {ingredient}</ItemList>
            ))}
            <Text style={styles.stepsText}> Steps taken </Text>
            {selectedMeal.steps.map(step => (
                <ItemList key={step}>=> {step}</ItemList>
            ))}
        </ScrollView>
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
        headerRight: () => 
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Favorite' 
                    iconName='ios-star' 
                    onPress={() => { 
                        console.log('Maked as favorite')
                    }}
                />
            </HeaderButtons>
        
    }

}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: 200
    },
    mealDetailContainer: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    ingredientText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    stepsText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center'
    },
    itemList: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }

})

export default MealDetailPage;