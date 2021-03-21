import {
  Animated,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

export const Formulario = () => {
  const [animacionBoton] = useState(new Animated.Value(1));
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
            style={styles.input}
            placeholder="Ciudad"
            placeholderTextColor="#666"
          />
        </View>
        <View>
          <Picker style={styles.picker}>
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
          onPressOut={() => animacionSalida()}>
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
