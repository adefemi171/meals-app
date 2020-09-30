import React from 'react'
import { Text, StyleSheet } from 'react-native'

const TextWrapper = props => {
    return (
        <Text style={styles.textContainer}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    textContainer: {
        fontFamily: 'open-sans-reg'
    }
})

export default TextWrapper