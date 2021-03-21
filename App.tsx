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
  const [resultado, setResultado] = useState({
    name: '',
    main: {temp: 0, temp_min: 0, temp_max: 0},
    weather: [],
  });
  const [bgColor, setbgColor] = useState('rgb(71,149,212)');
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
          // Modifica los colores del fondo basado en la temperatura

          const kelvin = 273.15;
          const {main} = resultado;
          const actual = main.temp - kelvin;
          if (actual < 10) {
            setbgColor('rgb(105,108,149)');
          } else if (actual >= 10 && actual < 25) {
            setbgColor('rgb(71,149,212)');
          } else {
            setbgColor('rgb(178,28,61)');
          }
        } catch (error) {
          mostrarAlerta();
        }
        setConsultar(false);
      }
    };
    consultarClima();
  }, [ciudad, consultar, pais, resultado]);
  const mostrarAlerta = () => {
    Alert.alert('Error', 'No hay resultados, intenta con otra ciudad o páis', [
      {text: 'Ok'},
    ]);
  };
  const ocultarTeclado = () => {
    Keyboard.dismiss();
  };
  const bgColorApp = {
    backgroundColor: bgColor,
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => ocultarTeclado()}>
        <View style={[styles.app, bgColorApp]}>
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
    justifyContent: 'center',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
