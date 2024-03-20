import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
//import Carousel from 'react-native-snap-carousel';

const Menu = ({ navigation }) => {
  const usuarioLogado = "Fulano";
  const serieUsuario = "Infantil IV";

  const imagens = [
    require('./assets/foto1.jpg'),
    require('./assets/foto2.jpg'),
    require('./assets/foto3.jpg'),
  ];

  const renderItem = ({ item }) => {
    return (
      <Image source={item} style={styles.carouselImage} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Primeira área: faixa cinza claro no topo */}
      <View style={styles.header}>
        <Image source={require('./assets/logo_esi.png')} style={styles.logo} />
        <Text style={styles.headerText}>Agenda Escolar</Text>
      </View>

      {/* Segunda área: fundo branco com altura 10% */}
      <View style={[styles.section, { flex: 1 }]}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userInfoText}>Olá, {usuarioLogado}</Text>
          <Text style={styles.userInfoText}>{serieUsuario}</Text>
        </View>
      </View>

      {/* Terceira área: retângulo em cinza claro com altura 25% */}
      <View style={[styles.section, { flex: 2.5 }]}>
        {/*<Carousel
          data={imagens}
          renderItem={renderItem}
          sliderWidth={300}
          itemWidth={300}
          layout="default"
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
        />*/}
      </View>

      {/* Quarta área: fundo branco com botões com altura 50% */}
      <View style={[styles.section, { flex: 5, marginBottom: 15 }]}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Atividades')} 
        style={styles.button}>
          <Image source={require('./assets/caderno.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>Atividades</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 15 }]}>
          <Image source={require('./assets/atencao.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>Comunicados</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { marginTop: 15 }]}>
          <Image source={require('./assets/evento.png')} style={styles.buttonImage}/>
          <Text style={styles.buttonText}>Eventos</Text>
        </TouchableOpacity>
      </View>

      {/* Quinta área: fundo branco com botão "Sair" com altura 5% */}
      <View style={[styles.bottom, { flex: 0.5 }]}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')} 
        style={styles.button_mini}>
          <Image source={require('./assets/exit.png')} style={styles.buttonImageMini}/>
          <Text style={styles.buttonText}>Deslogar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: '#D9D9D9',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  headerText: {
    fontSize: 25,
  },
  logo: {
    width: 37,
    height: 44,
    marginRight: 10,
  },
  section: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  bottom: {
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    marginBottom: 5,
  },

  userInfoContainer: {
    alignItems: 'center',
  },
  
  userInfoText: {
    fontSize: 14,
    marginBottom: 5,
  },

  button: {
    flexDirection: 'row',
    width: '50%',
    height: '15%',
    backgroundColor: '#00c3d8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  button_mini: {
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: '#54dae8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },

  buttonText: {
    color: '#00000',
  },

  buttonImage: {
    padding: 10, 
    margin: 5, 
    height: 25, 
    width: 25, 
    resizeMode: 'stretch', 
  },

  buttonImageMini: {
    height: 15, 
    width: 15,
    margin: 5,
    resizeMode: 'stretch', 
  },

  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Menu;
