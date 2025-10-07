import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const App = () => {
  const [clicou, setClicou] = useState(false);

  const handleClique = () => {
    setClicou(true);
  };

  return (
    <View style={styles.container}>
      {/* Imagem sempre visível */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.imagem}
      />

      {/* Texto condicional */}
      {!clicou && <Text style={styles.texto}>Olá, mundo!</Text>}
      {clicou && <Text style={styles.texto}>Você clicou no botão!</Text>}

      {/* Botão */}
      <TouchableOpacity style={styles.botao} onPress={handleClique}>
        <Text style={styles.textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  imagem: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  botao: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
  },
});

export default App;
