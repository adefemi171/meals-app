import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'




const CategoriesPage = props => {
    // console.log(props)
    return (
        <View style={styles.container}>
            <Text> Categories Page! </Text>
            <Button title="Go to Meals Page" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals'})
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

export default CategoriesPage;