import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ComunicadosPage = () => {
  // Dados dos comunicados (exemplo)
  const comunicados = [
    { id: 1, titulo: 'Comunicado 1', data: '21/03/2024' },
    { id: 2, titulo: 'Comunicado 2', data: '22/03/2024' },
    { id: 3, titulo: 'Comunicado 3', data: '23/03/2024' },
    { id: 4, titulo: 'Comunicado 4', data: '24/03/2024' },
    { id: 5, titulo: 'Comunicado 5', data: '25/03/2024' },
  ];

  // Função para lidar com o pressionar de um comunicado
  const handleComunicadoPress = (comunicado) => {
    // Aqui você pode adicionar a lógica para abrir o comunicado ou fazer o que for necessário
    console.log('Comunicado pressionado:', comunicado);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {comunicados.map((comunicado) => (
          <TouchableOpacity
            key={comunicado.id}
            style={styles.button}
            onPress={() => handleComunicadoPress(comunicado)}
          >
            <Text style={styles.buttonText}>{comunicado.titulo}</Text>
            <Text style={styles.buttonSubText}>{comunicado.data}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#00c3d8',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSubText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
  },
});

export default ComunicadosPage;
