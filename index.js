import React, { Component } from 'react';

import{
    View,
    AppRegistry
} from 'react-native';

import ListaItens from './src/components/ListaItens';


class RNE extends Component{

    render(){
        return(
            <View>
                <ListaItens></ListaItens>
            </View>
        );
    }
}

AppRegistry.registerComponent('RNE', () => RNE);