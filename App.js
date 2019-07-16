import React, { Component }from 'react';

import{
  Text,
  Button,
  View,
  StyleSheet
} from 'react-native';

const Estilos = {
  estiloTexto: {
    fontSize: 100,
    backgroundColor: 'green',
    padding: 30
  }
};
const App = () => {
  return (
    <Text style={Estilos.estiloTexto}> Cade o café </Text>
  );
};

export default App;