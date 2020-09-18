import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    FlatList,
    TouchableOpacity,
 
 } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import CategoryPageGridTile from '../components/CategoryPageGridTile'


const CategoriesPage = props => {

    // function to define how the item should be rendered
    const renderGridItem = (itemData) =>{
        return (
          <CategoryPageGridTile 
            tileTitle={itemData.item.title} // Passed this to CategoryPageGridTile
            tileColor={itemData.item.color} // Passed this to CategoryPageGridTile
            onSelectNav={() => {
                props.navigation.navigate({routeName: 'CategoryMeals', params: {
                    foodCategoryId: itemData.item.id //forwarding this id to the CategoryMeals page to use the data in the screen 
                }}) //// Passed this to CategoryPageGridTile
          }}/>
        )
    }
    // console.log(props)
    return (
        <FlatList
            keyExtractor={(item,index) => item.id} // redundant in newer version
            data={CATEGORIES} 
            renderItem={renderGridItem} 
            numColumns={2} 
        />
    );
};

// accessing the function CategoriesPage as an object to set the title
CategoriesPage.navigationOptions = {
    headerTitle: 'Food Categories',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

})

export default CategoriesPage;