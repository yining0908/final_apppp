import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem, SearchBar } from 'react-native-elements';

class Change extends Component {
  render() {
    const { block1, block2, one, heart ,block3} = styles;
    return (
      <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <View style={{ height: 348, width: 375 }}>
          <Image
            style={{ height: 270, width: 375 }}
            source={require('../assets/pic3.png')}
          />
        </View>
        <View style={{ height: 45, width: 375 }}>
          <View style={block2}>
            <Text style={one}>Album</Text>
            <Image style={heart}
              source={require('../assets/to.png')} />
          </View>
        </View>
        <View style={{ height: 45, width: 375 }}>
          <View style={block2}>
            <Text style={one}>Camera</Text>
            <Image style={heart}
              source={require('../assets/to.png')} />
          </View>
        </View>
        <View style={{ height: 45, width: 375 }}>
          <View style={block2}>
            <Text style={one}>Delete</Text>
            <Image style={heart}
              source={require('../assets/to.png')} />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles =
  {
    block1: {
      height: 45,
    },
    block2: {
      marginTop: -50,
      backgroundColor: '#ececec',
      height: 43,
    },
     block3: {
      marginTop: -50,
      backgroundColor: '#ececec',
      height: 43,
    },
    one: {
      left: 15,
      top: 15,
      width: 150,
      color: '#334559',
      fontSize: 12,
      fontWeight: 'bold'
    },
    heart: {
      left: 335,
      bottom: 5,
      height: 24,
      width: 24,
      alignItems: 'flex-end'
    },
  }
export default Change;
