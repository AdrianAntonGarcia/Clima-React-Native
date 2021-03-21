import {
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Formulario from './components/Formulario';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, setConsultar] = useState(false);
  const {ciudad, pais} = busqueda;
  useEffect(() => {
    if (consultar) {
      const appId = 'a09fbd3822a8c4b3edda687a93d7ed83';
      const url = `api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
      console.log(url);
      setConsultar(false);
    }
  }, [ciudad, consultar, pais]);
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Formulario
              busqueda={busqueda}
              setBusqueda={setBusqueda}
              setConsultar={setConsultar}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
