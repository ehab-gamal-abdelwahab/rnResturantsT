import * as React from 'react';
import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../activities/HomeScreen/HomeScreen';
import DetailsScreen from '../activities/DetailsScreen/DetailsScreen';

const MainStackNavigator = props => {
  const stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          // headerShown: true,
          headerTransparent: true,
          headerTintColor: Platform.OS === 'ios' ? 'green' : 'white',
          headerStyle: {
            backgroundColor: 'transparent',
          },
        }}>
        <stack.Screen
          name="home"
          component={HomeScreen}
          options={{title: ''}}
        />
        <stack.Screen
          name="details"
          component={DetailsScreen}
          options={{title: ''}}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
