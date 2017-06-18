import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem, SearchBar } from 'react-native-elements';

//import me from '../json/me.json';

// Make a component

// state = { me: [] };

// componentWillMount() {
//  this.setState({ me });
//}

class Me extends Component {
  render() {
    const { block1, block2, pics, horizontal, column, two, one, heart } = styles;
    return (
      <ScrollView>
        <SearchBar 
        //lightTheme
         placeholder='Search...' />
        <View style={block1}>
          <View style={horizontal}>
            <Image style={pics}
              source={require('../assets/rd.jpg')} />
            <View style={column}>
              <Text style={one}>Last Update:</Text>
              <Text style={two}>  2017.06.26 (Monday)</Text>
              <Text style={one}>Last Seen:</Text>
              <Text style={two}>  2017.06.05 (Monday)</Text>
              <Image style={heart}
                source={require('../assets/heart.png')} />
            </View>
          </View>
        </View>

        <View style={block2}>
          <View style={horizontal}>
            <Image style={pics}
              source={require('../assets/cnn.jpg')} />
            <View style={column}>
              <Text style={one}>Last Update:</Text>
              <Text style={two}>  2017.06.24 (Saturday)</Text>
              <Text style={one}>Last Seen:</Text>
              <Text style={two}>  2017.06.14 (Wednesday)</Text>
              <Image style={heart}
                source={require('../assets/heart.png')} />
            </View>
          </View>
        </View>

        <View style={block1}>
          <View style={horizontal}>
            <Image style={pics}
              source={require('../assets/voa.jpg')} />
            <View style={column}>
              <Text style={one}>Last Update:</Text>
              <Text style={two}>  2017.06.16 (Friday)</Text>
              <Text style={one}>Last Seen:</Text>
              <Text style={two}>  2017.06.12 (Saturday)</Text>
              <Image style={heart}
                source={require('../assets/heart.png')} />
            </View>
          </View>
        </View>

        <View style={block2}>
          <View style={horizontal}>
            <Image style={pics}
              source={require('../assets/bbc.jpg')} />
            <View style={column}>
              <Text style={one}>Last Update:</Text>
              <Text style={two}>  2017.06.24 (Saturday)</Text>
              <Text style={one}>Last Seen:</Text>
              <Text style={two}>  2017.06.14 (Wednesday)</Text>
              <Image style={heart}
                source={require('../assets/heart.png')} />
            </View>
          </View>
        </View>

        <View style={block1}>
          <View style={horizontal}>
            <Image style={pics}
              source={require('../assets/vt.jpg')} />
            <View style={column}>
              <Text style={one}>Last Update:</Text>
              <Text style={two}>  2017.06.12 (Saturday)</Text>
              <Text style={one}>Last Seen:</Text>
              <Text style={two}>  2017.06.05 (Monday)</Text>
              <Image style={heart}
                source={require('../assets/heart.png')} />
            </View>
          </View>
        </View>

        <View style={block2}>
          <View style={horizontal}>
            <Image style={pics}
              source={require('../assets/de.jpg')} />
            <View style={column}>
              <Text style={one}>Last Update:</Text>
              <Text style={two}>  2017.06.14 (Wednesday)</Text>
              <Text style={one}>Last Seen:</Text>
              <Text style={two}>  2017.06.08 (Thursday)</Text>
              <Image style={heart}
                source={require('../assets/heart.png')} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles =
  {
    block1: {
      backgroundColor: '#bfcbdb',
      height: 125,
    },
    block2: {
      backgroundColor: '#e6edf5',
      height: 125,
    },
    pics: {
      width: 90,
      height: 90,
      top: 19,
      left: 28,
    },
    horizontal: {
      flexDirection: 'row',
      flex: 1,
    },
    column: {
      flexDirection: 'column',
    },
    one: {
      left: 37,
      top: 24,
      width: 150,
      color: '#334559',
      fontSize: 16,
      fontWeight: 'bold'
    },
    two: {
      left: 37,
      top: 26,
      width: 150,
      color: '#334559',
      fontSize: 12
    },
    heart: {
      left: 225,
      margin: 15,
      height: 24,
      width: 24,
      alignItems: 'flex-end'
    },
  }
export default Me;