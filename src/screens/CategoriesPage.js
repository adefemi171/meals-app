import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList
 } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

// function to define how the item should be rendered
const renderGridItem = (itemData) =>{
    return (
        <View style={styles.grid}>
            <Text>{itemData.item.title}</Text>
        </View>
    )
}

const CategoriesPage = props => {
    // console.log(props)
    return (
        <FlatList
            keyExtractor={(item,index) => item.id} // redundant in newer version
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
        // <View style={styles.container}>
        //     <Text> Categories Page! </Text>
        //     <Button title="Go to Meals Page" onPress={() => {
        //         props.navigation.navigate({routeName: 'CategoryMeals'})
        //     }} />
        // </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grid:{
        flex: 1,
        margin: 15,
        height: 150
    }
})

export default CategoriesPage;