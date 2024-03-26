import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const EventosPage = ({ navigation }) => {
  // Dados dos eventos (exemplo)
  const eventos = [
    { id: 1, titulo: 'Evento 1', data: '21/03/2024' },
    { id: 2, titulo: 'Evento 2', data: '22/03/2024' },
    { id: 3, titulo: 'Evento 3', data: '23/03/2024' },
    { id: 4, titulo: 'Evento 4', data: '24/03/2024' },
    { id: 5, titulo: 'Evento 5', data: '25/03/2024' },
  ];

  // Função para lidar com o pressionar de um evento
  const handleEventoPress = () => {
    // Aqui você pode adicionar a lógica para abrir o evento ou fazer o que for necessário
    navigation.navigate('Evento')
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {eventos.map((evento) => (
          <TouchableOpacity
            key={evento.id}
            style={styles.button}
            onPress={() => handleEventoPress()}
          >
            <Text style={styles.buttonText}>{evento.titulo}</Text>
            <Text style={styles.buttonSubText}>{evento.data}</Text>
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

export default EventosPage;
