// App.tsx
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenHome from './screens/Home';
import ScreenPortofolio from './screens/Portofolio';
import ScreenAbout from './screens/About';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black', // Ορίστε το επιθυμητό χρώμα φόντου εδώ
          },
          headerTintColor: '#64887C', // Ορίστε το επιθυμητό χρώμα κειμένου επικεφαλίδας εδώ
          headerTitleStyle: {
            fontWeight: 'bold', 
            color: '#64887C',// Ορίστε το επιθυμητό στυλ κειμένου επικεφαλίδας εδώ
          },
          
        }}>
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen name="Portofolio" component={ScreenPortofolio} />
        <Stack.Screen name="About" component={ScreenAbout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
