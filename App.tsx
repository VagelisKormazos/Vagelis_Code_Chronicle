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
      <Stack.Navigator initialRouteName="ScreenHome">
        <Stack.Screen name="ScreenHome" component={ScreenHome} />
        <Stack.Screen name="ScreenPortofolio" component={ScreenPortofolio} />
        <Stack.Screen name="ScreenAbout" component={ScreenAbout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
