import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export interface Props {
  resultado: {name: string; main: {temp: number}};
}

export const Clima: React.FC<Props> = ({resultado}) => {
  const {name, main} = resultado;
  if (!name) {
    return null;
  }
  // grados kelvin
  const kelvin = 273.15;
  return (
    <View style={styles.clima}>
      <Text style={[styles.texto, styles.actual]}>
        {parseInt((main.temp - kelvin).toString(), 10)}
        <Text style={styles.temperatura}>&#x2103;</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  clima: {
    marginBottom: 20,
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginRight: 20,
  },
  actual: {
    fontSize: 80,
    marginRight: 0,
    fontWeight: 'bold',
  },
  temperatura: {
    fontSize: 24,
    fontWeight: 'normal',
  },
});
export default Clima;
