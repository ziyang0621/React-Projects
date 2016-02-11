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
  Navigator,
  BackAndroid,
  ToolbarAndroid,
  View
} from 'react-native';
import Main from './App/Components/Main';
import Dashboard from './App/Components/Dashboard';

let _navigator;
BackAndroid.addEventListener('hardwareBackPress', () => {
  console.log("back button pressed");
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    console.log("pop...");
    _navigator.pop();
    return true;
  }
  return false;
});

let RouteMapper = function(route, navigationOperations, onComponentRef) {
  _navigator = navigationOperations;
  let Compt = route.component;
  if (Compt === Main) {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="black"
          title={route.title} />
        <Compt navigator={navigationOperations} />
      </View>
    );
  } else if (Compt === Dashboard) {
    console.log("compt else: " + route);
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="black"
          navIcon={require('./back_button_black.png')}
          onIconClicked={navigationOperations.pop}
          title={route.title} />
        <Compt navigator={navigationOperations} userInfo={route.passProps.userInfo}/>
      </View>
    );
  } else if (route.title === 'Profile Page') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="black"
          navIcon={require('./back_button_black.png')}
          onIconClicked={navigationOperations.pop}
          title={route.title} />
        <Compt navigator={navigationOperations} userInfo={route.passProps.userInfo}/>
      </View>
    );
  } else if (route.title === 'Repos') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="black"
          navIcon={require('./back_button_black.png')}
          onIconClicked={navigationOperations.pop}
          title={route.title} />
        <Compt navigator={navigationOperations} userInfo={route.passProps.userInfo} repos={route.passProps.repos}/>
      </View>
    );
  } else if (route.title === 'Notes') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="black"
          navIcon={require('./back_button_black.png')}
          onIconClicked={navigationOperations.pop}
          title={route.title} />
        <Compt navigator={navigationOperations} userInfo={route.passProps.userInfo} notes={route.passProps.notes}/>
      </View>
    );
  } else if (route.title === 'Web View') {
    return (
      <View style={{flex: 1}}>
        <ToolbarAndroid
          actions={[]}
          style={styles.toolbar}
          titleColor="black"
          navIcon={require('./back_button_black.png')}
          onIconClicked={navigationOperations.pop}
          title={route.title} />
        <Compt navigator={navigationOperations} url={route.passProps.url}/>
      </View>
    );
  }

};


class githubNotetaker extends Component {
  render() {
    let initialRoute = {component: Main, title: 'GitHub Notetaker'};
    return (
      <Navigator
        style={styles.container}
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={RouteMapper}
      />
    );
  }
}

const styles = StyleSheet.create({
  container:{
   flex: 1,
   backgroundColor: 'white',
 },
  toolbar: {
    backgroundColor: 'white',
    height: 56,
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
