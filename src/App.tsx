import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SignIn, SplashScreen} from './pages';

const App = () => {
  return (
    <NavigationContainer>
      {/*<SplashScreen />*/}
      <SignIn />
    </NavigationContainer>
  );
};

export default App;
