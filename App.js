import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import TelaSecundaria from './Login';
import Agenda from './Agenda';
import Atividades from './Atividades';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" component={TelaSecundaria} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Atividades" component={Atividades} />
        <Stack.Screen name="Agenda" component={Agenda} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
