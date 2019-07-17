import React, { Component } from 'react';
import axios from 'axios';

import{
  ScrollView
} from 'react-native';
import Item from './Item';

export default class ListaItens extends Component{
    constructor(props){
        super(props);
        this.state = {
            listaItens: []
        };
    }
    
    componentWillMount(){
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then(response => {
                this.setState({
                    listaItens: response.data
                });
            })
            .catch(() => {
                console.log('Erro ao recuperar');
            });
    }

    render(){
        return(
            <ScrollView style={{backgroundColor: '#DDD'}}>
                {this.state.listaItens.map( 
                    item => (
                        <Item key={item.titulo} item={item}></Item>
                    )
                )}
            </ScrollView>
        )
    }
}