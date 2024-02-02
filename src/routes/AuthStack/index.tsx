import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Welcome} from '@screens';
import React from 'react';

const AuthStack = createNativeStackNavigator();
const AuthStackScreens = () => {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreens;
