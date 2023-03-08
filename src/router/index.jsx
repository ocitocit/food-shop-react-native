import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SignIn,
  SplashScreen,
  SignUp,
  SignUpAddress,
  SuccessSignUp,
  Home,
  Order,
  Profile,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  <Tab.Navigator>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Order" component={Order} />
    <Tab.Screen name="Profile" component={Profile} />
  </Tab.Navigator>;
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
