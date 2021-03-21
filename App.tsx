import {ScrollView, StyleSheet} from 'react-native';
import Formulario from './components/Formulario';
import React from 'react';

const App = () => {
  return (
    <ScrollView style={styles.general}>
      <Formulario />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  general: {
    backgroundColor: '#FFF',
    height: '100%',
  },
});

export default App;
