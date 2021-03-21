import {
  Animated,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export interface Props {
  busqueda: {pais: string; ciudad: string};
  setBusqueda: Function;
}

export const Formulario: React.FC<Props> = ({busqueda, setBusqueda}) => {
  const {pais, ciudad} = busqueda;
  const [animacionBoton] = useState(new Animated.Value(1));
  const consultarClima = () => {
    if (pais.trim() === '' || ciudad.trim() === '') {
      mostrarAlerta();
      return;
    }
  };

  const mostrarAlerta = () => {
    Alert.alert('Error', 'Agrega una ciudad y país para la búsqueda', [
      {text: 'Entendido'},
    ]);
  };
  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };
  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      friction: 2,
      tension: 30,
      useNativeDriver: true,
    }).start();
  };
  const estiloAnimacion = {
    transform: [{scale: animacionBoton}],
  };
  return (
    <>
      <View>
        <View>
          <TextInput
            value={ciudad}
            style={styles.input}
            onChangeText={ciudadIn =>
              setBusqueda({...busqueda, ciudad: ciudadIn})
            }
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker
            onValueChange={paisIn => setBusqueda({...busqueda, paisIn})}
            selectedValue={pais}
            style={styles.picker}>
            <Picker.Item
              color="#FFF"
              label="-- Seleccione un páis --"
              value=""
            />
            <Picker.Item color="#FFF" label="Estados Unidos" value="US" />
            <Picker.Item color="#FFF" label="España" value="ES" />
            <Picker.Item color="#FFF" label="México" value="MX" />
            <Picker.Item color="#FFF" label="Argentina" value="AR" />
            <Picker.Item color="#FFF" label="Colombia" value="CO" />
            <Picker.Item color="#FFF" label="Costa Rica" value="CR" />
            <Picker.Item color="#FFF" label="Perú" value="PE" />
          </Picker>
        </View>
        <TouchableWithoutFeedback
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarClima()}>
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <Text style={styles.textoBuscar}>Buscar Clima</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    backgroundColor: '#FFF',
    color: '#000',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  picker: {
    height: 120,
    backgroundColor: '#FFF',
  },
  btnBuscar: {
    marginTop: 50,
    backgroundColor: '#000',
    padding: 10,
    justifyContent: 'center',
  },
  textoBuscar: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Formulario;
