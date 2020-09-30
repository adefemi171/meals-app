import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons' // note it's HeaderButtons

import HeaderButton from '../components/HeaderButton'



const FiltersPage = props => {
    return (
        <View style={styles.container}>
            <Text> FIlters Page! </Text>
        </View>
    );
};

FiltersPage.navigationOptions = (navData) =>  {
    // console.log(navigationData)
  
  return{
    headerTitle: 'Meal Filter',
    headerLeft:  ( 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Menu" 
                iconName='ios-menu' 
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    )
}

}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FiltersPage;