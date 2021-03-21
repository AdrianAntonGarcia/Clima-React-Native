import {StyleSheet, TextInput, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import React from 'react';

export const Formulario = () => {
  return (
    <>
      <View style={styles.formulario}>
        <View>
          <TextInput placeholder="Ciudad" placeholderTextColor="#666" />
        </View>
      </View>
      <View>
        <Picker>
          <Picker.Item label="-- Seleccione un páis --" value="" />
          <Picker.Item label="Estados Unidos" value="US" />
          <Picker.Item label="España" value="ES" />
          <Picker.Item label="México" value="MX" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Costa Rica" value="CR" />
          <Picker.Item label="Perú" value="PE" />
        </Picker>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  formulario: {
    marginTop: 100,
  },
});

export default Formulario;