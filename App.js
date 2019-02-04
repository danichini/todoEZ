import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './Header';
import Body from './Body';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tareas: [],
      texto: '',
    };
  }

  establecerTexto = (value) => {
    console.log(value);
    this.setState({ texto: value });
  }

  agregarTarea = () => {
    const { tareas, texto } = this.state;
    this.setState({
      tareas: [...tareas, { texto, key: Date.now().toString() }],
      texto: '',
    });
  }

  eliminarTarea = (id) => {
    const { tareas } = this.state;
    const nuevasTareas = tareas.filter(tarea => tarea.key !== id);
    this.setState({
      tareas: nuevasTareas,
    });
  }

  render() {
    const { texto, tareas } = this.state;

    return (
      <View style={styles.container}>
        <Header
          cambiarTexto={this.establecerTexto}
          agregar={this.agregarTarea}
          texto={texto}
        />
        <Body
          tareas={tareas}
          eliminar={this.eliminarTarea}
        />
      </View>
    );
  }
}
