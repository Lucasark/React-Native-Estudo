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
            <View style={styles.item}>
                <View style={styles.foto}>
                    <Image style={{height: 100, width: 100}} source={{uri: this.props.item.foto}} />
                </View>
                <View style={styles.descricao}>
                    <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
                    <Text style={styles.txtValor}>R$ {this.props.item.valor}</Text>
                    <Text style={styles.txtData}>Data publicacao: {this.props.item.data_publicacao}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        borderWidth: 0.5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    foto : {
        width: 120,
        height: 120
    },
    descricao : {
        marginLeft: 20,
        flex: 1
    },
    txtTitulo : {
        fontSize : 18,
        color : 'blue',
        marginBottom: 5
    },
    txtValor : {
        fontSize: 16,
        fontWeight: 'bold'
    },
    txtData : {
        fontSize : 16
    }
})