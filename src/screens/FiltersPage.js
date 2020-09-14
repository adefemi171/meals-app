import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




const FiltersPage = props => {
    return (
        <View style={styles.container}>
            <Text> FIlters Page! </Text>
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

export default FiltersPage;