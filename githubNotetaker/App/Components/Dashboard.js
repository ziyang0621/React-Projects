import React, {
  Component,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

import Profile from './Profile';
import api from '../Utils/Api';
import Repositories from './Repositories';
import Notes from './Notes';

const styles = StyleSheet.create({
  container: {
     marginTop: 65,
     flex: 1
   },
   image: {
     height: 350,
   },
   buttonText: {
     fontSize: 24,
     color: 'white',
     alignSelf: 'center'
   }
 });

class Dashboard extends Component {
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }

    if(btn === 0){
       obj.backgroundColor = '#48BBEC';
     } else if (btn === 1){
       obj.backgroundColor = '#E77AAE';
     } else {
       obj.backgroundColor = '#758BF4';
     }
     return obj;

    return obj;
  }

  goToProfile() {
    this.props.navigator.push({
         component: Profile,
         title: 'Profile Page',
         passProps: {userInfo: this.props.userInfo}
       });
  }

  goToRepro() {
    api.getRepos(this.props.userInfo.login)
      .then((res) => {
        this.props.navigator.push({
             component: Repositories,
             title: 'Repos',
             passProps: {
               userInfo: this.props.userInfo,
               repos: res
             }
           });
      });
  }

  goToNotes() {
    api.getNotes(this.props.userInfo.login)
      .then((res) => {
        res = res || {};
        this.props.navigator.push({
          component: Notes,
          title: 'Notes',
          passProps: {
            notes: res,
            userInfo: this.props.userInfo
          }
        })
      })
  }

  render() {

    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>

        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlaycolor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepro.bind(this)}
          underlaycolor='#88D4F5'>
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlaycolor='#88D4F5'>
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>

      </View>
    );
  }
};

module.exports = Dashboard;
