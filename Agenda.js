import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const Agenda = ({ navigation }) => {
  // Definir as informações do cabeçalho e do conteúdo do dia
  const cabecalho = {
    data: '18/03',
    diaSemana: 'Segunda-Feira',
  };

  const conteudoDia = {
    titulo: 'Conteúdo do dia:',
    descricao: 'Em Matemática estudamos tabuada e divisão. \nEm Inglês o verbo "To be".',
  };

  // Definir as informações das atividades
  const atividades = [
    {
      materia: 'Matemática',
      tarefas: [
        'Página 47 à 49',
        'Página 50 à 52',
      ],
      cor: 'blue',
    },
    {
      materia: 'Português',
      tarefas: [
        'Atividade na folha',
      ],
      cor: 'red',
    },
    {
      materia: 'Ciências',
      tarefas: [
        'Atividade no caderno (10 questões)',
        'Atividade no caderno (10 questões)',
        'Atividade no caderno (10 questões)',
        'Atividade no caderno (10 questões)',
      ],
      cor: 'green',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Parte superior */}
        <View style={styles.header}>
          <Text style={styles.data}>{cabecalho.data}</Text>
          <Text style={styles.diaSemana}>{cabecalho.diaSemana}</Text>
        </View>

        {/* Parte do resumo das atividades */}
        <View style={styles.resumo}>
          <Text style={styles.resumoTitle}>{conteudoDia.titulo}</Text>
          <Text style={styles.resumoTexto}>{conteudoDia.descricao}</Text>
        </View>

        {/* Parte das atividades separadas por matérias */}
        {atividades.map((atividade, index) => (
          <View style={styles.materiaContainer} key={index}>
            <Text style={styles.materiaTitle}>{atividade.materia}</Text>
            {atividade.tarefas.map((tarefa, index) => (
              <BouncyCheckbox
                key={index}
                padding={5}
                size={25}
                fillColor={atividade.cor}
                text={tarefa}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(isChecked: boolean) => {}}
              />
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Para evitar que o conteúdo fique muito próximo da borda inferior
  },
  container: {
    flex: 1,
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
    borderWidth: 1.5,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
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
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
  },
  materiaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Agenda;
