import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Clima from './components/Clima';
import Formulario from './components/Formulario';

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: '',
    pais: '',
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const {ciudad, pais} = busqueda;
  useEffect(() => {
    const consultarClima = async () => {
      if (consultar) {
        const appId = 'a09fbd3822a8c4b3edda687a93d7ed83';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
        try {
          const respuesta = await fetch(url);
          const resultadoApi = await respuesta.json();
          setResultado(resultadoApi);
        } catch (error) {
          mostrarAlerta();
        }
        setConsultar(false);
      }
    };
    consultarClima();
  }, [ciudad, consultar, pais]);
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otra ciudad o páis', [
      {text: 'Ok'},
    ]);
  };
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={styles.app}>
          <View style={styles.contenido}>
            <Clima resultado={resultado} />
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
