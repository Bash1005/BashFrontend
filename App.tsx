import React from 'react';
import {Text, View} from 'react-native';
import codePush from 'react-native-code-push';

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
  installMode: codePush.InstallMode.IMMEDIATE,
};
const App = () => {
  return (
    <View>
      <Text>Hello Code Push</Text>
    </View>
  );
};

export default codePush(codePushOptions)(App);
