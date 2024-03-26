import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Evento = ({ navigation }) => {
  // Definir as informações do evento
  const evento = {
    titulo: 'Festa da Primavera',
    data: '22/03/2024',
    mensagem: `Caros alunos,

É com grande alegria que convidamos vocês para celebrar o Dia das Crianças conosco! Este dia tão especial está chegando, e queremos fazer dele um momento inesquecível para todos.

Data: 12 de Outubro
Horário: 8h30
Local: Rua Alegre, 123

Preparem-se para um dia repleto de diversão, risadas e muitas surpresas! Teremos uma série de atividades preparadas especialmente para cada um de vocês. Desde jogos interativos até competições criativas, haverá algo para todos os gostos.

Além disso, teremos deliciosas guloseimas e lanches para garantir que a energia esteja sempre lá em cima. Vocês não vão querer perder!

Estejam prontos para celebrar a criança que há em cada um de nós. Vamos fazer deste Dia das Crianças um momento de união, alegria e muita animação.

Tragam seus sorrisos, suas energias positivas e estejam preparados para criar memórias que ficarão para sempre em nossos corações.

Contamos com a presença de todos vocês para tornar esta celebração ainda mais especial. Esperamos por vocês!`,
    imagem: require('./assets/dia-crianca.png'), // Substitua com a imagem do seu evento
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Parte superior */}
        <View style={styles.header}>
          <Text style={styles.titulo}>{evento.titulo}</Text>
          <Text style={styles.data}>{evento.data}</Text>
        </View>

        {/* Parte da mensagem do evento */}
        <View style={styles.mensagemContainer}>
          <Text style={styles.mensagem}>{evento.mensagem}</Text>
        </View>

        {/* Parte da imagem do evento */}
        <View style={styles.imagemContainer}>
          <Image source={evento.imagem} style={styles.imagem} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  data: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  mensagemContainer: {
    borderWidth: 1.5,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  mensagem: {
    fontSize: 16,
  },
  imagemContainer: {
    alignItems: 'center',
  },
  imagem: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default Evento;
