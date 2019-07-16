import React, { Component } from 'react';

import{
  Text,
  View,
  StyleSheet,
  Image
} from 'react-native';

export default class Item extends Component{
    render(){
        return(
            <View>
                <Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}} />
                <Text>{this.props.item.titulo}</Text>
                <Text>{this.props.item.valor}</Text>
                <Text>{this.props.item.data_publicacao}</Text>
            </View>
        )
    }
}