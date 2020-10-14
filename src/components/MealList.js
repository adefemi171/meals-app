import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import  MealItem from '../components/MealItem' 


const MealList = props => {

    const mealsFav = useSelector(state => state.meals.favoriteMeals)

    const rederMealItem = itemData => {
        // using mealsFav to check if its a favorite
        const isFav = mealsFav.some(meal => meal.id === itemData.item.id)
        return (
            <MealItem 
                title = {itemData.item.title}
                duration = {itemData.item.duration}
                complexity = {itemData.item.complexity} 
                affordability = {itemData.item.affordability}
                image = {itemData.item.imageUrl}  
                onMealSelect = { () => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', 
                        params: {
                            mealID: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFavNav: isFav
                    } })
                }}
            />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={props.mealListData} 
                keyExtractor={(item,index) => item.id} 
                renderItem={rederMealItem}
                style={styles.listContainer} 
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        width: '100%'
    }
})

export default MealList