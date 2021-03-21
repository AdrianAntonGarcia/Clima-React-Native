import {StyleSheet, View} from 'react-native';
import Formulario from './components/Formulario';
import React from 'react';

const App = () => {
  return (
    <>
      <View style={styles.app}>
        <View style={styles.contenido}>
          <Formulario />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
