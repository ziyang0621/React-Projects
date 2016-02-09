import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E4E4E4',
    flex: 1,
    marginLeft: 15
  }
});

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator}/>
    );
  }
}

module.exports = Separator;
