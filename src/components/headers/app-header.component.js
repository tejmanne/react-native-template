import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, StyleSheet} from 'react-native';

class AppHeader extends Component{

    render(){
        
        const { container,
                appTitleContainer, 
                moduleTitleContainer,
                moduleOptionsContainer,
                appName,
                moduleName } = styles;

        return(
            <View style={container}>
                <View style={appTitleContainer}>
                    <Text style={appName}>AR Memes</Text>
                </View>
                <View style={moduleTitleContainer}>
                    <Text style={moduleName}>{this.props.moduleName}</Text>
                </View>
                <View style={moduleOptionsContainer}>
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:80,
        backgroundColor: "#FbFbFb",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        flexDirection: 'row',
        padding:10,
        paddingTop: 35,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {height: 2, width: 0}
    },
    appTitleContainer:{
        flex: 0.3,
        justifyContent:'center',
    },
    moduleTitleContainer:{
        flex:0.4,
        justifyContent:'center',
        alignItems:'center'
    },
    moduleOptionsContainer:{
        flex: 0.3,
        justifyContent:'center'
    },
    appName:{
        fontSize:21,
        color: 'red'
    },
    moduleName:{
        fontSize:18,
        color: "#2E2E2E",
        paddingTop:3
    }
})

export { AppHeader };