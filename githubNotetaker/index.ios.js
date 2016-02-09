/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  NavigatorIOS,
  View
} from 'react-native';
import Main from './App/Components/Main'

class githubNotetaker extends Component {

  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'GitHub Notetaker',
          component: Main
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: '#111111'
 },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
