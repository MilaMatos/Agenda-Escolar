import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const Agenda = ({ navigation }) => {
  // Função para lidar com o clique em um item da agenda
  const handleItemClick = (day) => {
    console.log(`Clicou em ${day}`);
    // Aqui você pode adicionar a lógica para navegar para a tela de detalhes da atividade do dia
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {[...Array(10)].map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.item}
            onPress={() => navigation.navigate('Agenda')}
          >
            <Text style={styles.itemText}>{`Segunda - ${index + 1}/03`}</Text>
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
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1294F2',
    paddingVertical: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Agenda;
