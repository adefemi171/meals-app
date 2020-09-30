import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import  MealItem from '../components/MealItem' 


const MealList = props => {

    const rederMealItem = itemData => {
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
                            mealID: itemData.item.id
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