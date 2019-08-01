import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

const SimpleCard = (props) => {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        marginTop:5
    }
})

export { SimpleCard };