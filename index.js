import React, { Component }from 'react';

import{
  Text,
  Button,
  View,
  StyleSheet,
  AppRegistry,
  Image
} from 'react-native';


class RNE extends Component{
    constructor(props){
        super(props);
        this.state = {
            escolhaPlayer: '',
            escolhaCPU: '',
            resultado: ''
        }
    }

    render(){
        return(
        <View> 
            <Text>Quero cafe!</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        btnEscolha: {
            width: 90
        }
    }
)
AppRegistry.registerComponent('RNE', () => RNE);