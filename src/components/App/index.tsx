import 'whatwg-fetch';
import React, { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Auth } from '../../pages/Auth';
import { store } from '../../redux/store';
import { Main } from '../../pages/Main';

const Stack = createNativeStackNavigator();

const linking: LinkingOptions<{
  Auth?: string;
  Main?: string;
}> = {
  prefixes: ['http://localhost:8080', 'localhost://'],
  config: {
    screens: {
      Auth: 'auth',
      Main: 'main',
    },
  },
};

export const App: React.FC = () => {
  return (
    <StrictMode>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer linking={linking}>
            <Stack.Navigator
              initialRouteName="Auth"
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Main" component={Main} />

              <Stack.Screen name="Auth" component={Auth} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </StrictMode>
  );
};
