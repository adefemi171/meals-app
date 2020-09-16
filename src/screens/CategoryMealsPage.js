import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'




const CategoryMealsPage = props => {
    return (
        <View style={styles.container}>
            <Text> Category Meals Page! </Text>
            <Button title="Go to Meals Page" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }} />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsPage;