import React, { useState, useEffect, useCallback } from 'react'
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

    // using object destructuring to get props
    const { navigation } = props

    // state component for the switch
    const [isBromateFree, setIsBromateFree] = useState(false)
    const [isStarchFree, setIsStarchFree] = useState(false)
    const [isVeganFree, setIsVeganFree] = useState(false)
    const [isGlutenFree, setIsGlutenFree] = useState(false)


    // save filter function
    // useCallBack wraps a function and cache it and only recreated if the dependency change
    const saveFilters = useCallback(() => {
        const appliedFilters = {
            bromateFree: isBromateFree,
            starchFree: isStarchFree,
            veganFree: isVeganFree,
            glutenFree: isGlutenFree
        }
        console.log(appliedFilters)
    }, [isBromateFree, isStarchFree, isVeganFree, isGlutenFree]) // useCallBack also takes a second argument which is an array of dependencies

    
    // useEffect takes a function which runs whenever 
    // state changes or components re-
    // setParams can be used to update the params value for the currently loaded screen 
    useEffect(() => {
        navigation.setParams({save: saveFilters}) // a  called save and pointing at the saveFilter function which is ot been executed
        // store he pointer saveFilter to the key save
    }, [saveFilters]) // second argument to useEffect is an array of dependencies

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
            <FilterSwitch 
                label='Gluten Free' 
                value={isGlutenFree} 
                onSwitch={newValue => setIsGlutenFree(newValue)} 
            />
        </View>
    );
};

FiltersPage.navigationOptions = (navData) =>  {
    // console.log(navigationData)
  
  return{
    headerTitle: 'Meal Filter',
    headerLeft: () => ( 
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Menu" 
                iconName='ios-menu' 
                onPress={() => {
                    navData.navigation.toggleDrawer()
                }}
            />
        </HeaderButtons>
    ),
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="Save" 
                iconName='ios-save' 
                onPress={
                    // the way to get the parameter from line 48 setParam()
                    navData.navigation.getParam('save')
                }
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