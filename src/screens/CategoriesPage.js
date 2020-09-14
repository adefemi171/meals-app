import React from 'react'
import { View, Text, StyleSheet } from 'react-native'




const CategoriesPage = props => {
    return (
        <View style={styles.container}>
            <Text> Categories Page! </Text>
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