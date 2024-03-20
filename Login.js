import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const TelaSecundaria = ({ navigation }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (login === 'aluno' && senha === 'aluno') {
      // Redireciona para o Menu se o login for válido
      navigation.navigate('Menu');
    } else {
      alert('Login ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      {/* Parte Superior (40% da tela) */}
      <View style={[styles.section, { flex: 2 }]}>
        <Image source={require('/assets/logo_esi.png')} style={styles.image} />
      </View>

      {/* Parte do Login (40% da tela) */}
      <View style={[styles.section, { flex: 4 }]}>
        <Text style={styles.loginText}>Entrar</Text>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Parte de Problemas no Login (20% da tela) */}
      <View style={[styles.section, { flex: 2 }]}>
        <Text>Algum problema no login?</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Entre em contato com a coordenação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },

  section: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },

  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#1294F2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
  },

  contactButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
  },

  contactButtonText: {
    color: '#1294F2',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Ajusta a imagem para caber dentro do contêiner
  },
});

export default TelaSecundaria;
