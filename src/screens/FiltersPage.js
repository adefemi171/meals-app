import React, { useState } from 'react'
// Switch renders a switch 
import { View, Text, StyleSheet, Switch } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons' // note it's HeaderButtons

import HeaderButton from '../components/HeaderButton'

import Colors from '../constants/Color'


// filterswitch component
const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text> {props.label}</Text>
            <Switch
                trackColor={{true: Colors.secondaryColor}}
                // thumbColor={Platform.OS === 'android' ? Colors.primaryColor : ''} 
                value={props.value} 
                onValueChange={props.onSwitch} 
            />
        </View>
    )
}
const FiltersPage = props => { 

    // state component for the switch
    const [isBromateFree, setIsBromateFree] = useState(false)
    const [isStarchFree, setIsStarchFree] = useState(false)
    const [isVeganFree, setIsVeganFree] = useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.availFilterText}> Rendered Filter / Restrictions </Text>
            <FilterSwitch 
                label='Bromate Free' 
                value={isBromateFree} 
                onSwitch={newValue => setIsBromateFree(newValue)} 
            />
            <FilterSwitch 
                label='Starch Free' 
                value={isStarchFree} 
                onSwitch={newValue => setIsStarchFree(newValue)} 
            />
            <FilterSwitch 
                label='Vegan Free' 
                value={isVeganFree} 
                onSwitch={newValue => setIsVeganFree(newValue)} 
            />
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
        alignItems: 'center'
    },
    availFilterText: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        margin: 20
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
})

export default FiltersPage;