import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Atividade = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Parte superior */}
      <View style={styles.header}>
        <Text style={styles.data}>18/03</Text>
        <Text style={styles.diaSemana}>Segunda-Feira</Text>
      </View>

      {/* Parte do resumo das atividades */}
      <View style={styles.resumo}>
        <Text style={styles.resumoTitle}>Conteúdo do dia:</Text>
        <Text style={styles.resumoTexto}>
          Em Matemática estudamos tabuada e divisão.
          {"\n"}
          Em Inglês o verbo "To be".
        </Text>
      </View>

      {/* Parte das atividades separadas por matérias */}
      <View style={styles.materiaContainer}>
        <Text style={styles.materiaTitle}>Matemática</Text>
          
          <BouncyCheckbox
            padding={5}
            size={25}
            fillColor="blue"
            //unfillColor="#FFFFFF"
            text="Página 47 à 49"
            //iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            //textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(isChecked: boolean) => {}}
          />

          <BouncyCheckbox
            padding={5}
            size={25}
            fillColor="blue"
            //unfillColor="#FFFFFF"
            text="Página 47 à 49"
            //iconStyle={{ borderColor: "red" }}
            innerIconStyle={{ borderWidth: 2 }}
            //textStyle={{ fontFamily: "JosefinSans-Regular" }}
            onPress={(isChecked: boolean) => {}}
          />
        
      </View>

      {/* Adicione mais matérias conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  data: {
    fontSize: 25,
  },
  diaSemana: {
    fontSize: 18,
  },
  resumo: {
    marginTop: 20,
  },
  resumoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resumoTexto: {
    fontSize: 16,
  },
  materiaContainer: {
    marginTop: 20,
  },
  materiaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Atividade;
