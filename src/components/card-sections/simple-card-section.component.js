import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SimpleCardSection = (props) => {
    return (
        <View style={styles.conatiner}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor: 'white',
        padding: 5,
        shadowOffset: {height: 0, width:0},
        shadowColor: "#000",
        shadowOpacity: 0.1,
        borderColor: '#ccc',
        borderTopWidth: StyleSheet.hairlineWidth
    }
})

export { SimpleCardSection }