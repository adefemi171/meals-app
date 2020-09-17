import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    Button, 
    FlatList,
    TouchableOpacity,
    Platform 
 } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Color'



const CategoriesPage = props => {

    // function to define how the item should be rendered
    const renderGridItem = (itemData) =>{
        return (
            <TouchableOpacity
                style={styles.grid} 
                onPress={() => {
                    props.navigation.navigate({routeName: 'CategoryMeals', params: {
                        foodCategoryId: itemData.item.id //forwarding this id to the CategoryMeals page to use the data in the screen 
                    }})
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
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
    headerStyle:{
        // Using Platform to switch colors on IOS and ANdroid
        backgroundColor: Platform.OS === 'android' ? Colors.secondaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

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