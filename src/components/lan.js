import React, { Component } from 'react';
import { ScrollView, View, Image, Text } from 'react-native';
import { Tile, List, ListItem, SearchBar } from 'react-native-elements';

//import me from '../json/me.json';

// Make a component

// state = { me: [] };

// componentWillMount() {
//  this.setState({ me });
//}

class lan extends Component {
  render() {
    const { block1, block2, one, } = styles;
    return (
      <ScrollView>
        <View style={block1}>
          <Text style={one}>Chinese (中文)</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Thai（ไทย）</Text>
        </View>

        <View style={block1}>
          <Text style={one}>Japanese（日本の）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Korean (한국의)</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Turkish（Türk）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Vietnamese（tiếng việt）</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Russian（русский）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Malayanian（Bahasa Malaysia）</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Icelandic（icelandic）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Maori（Maori）</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Nepalese（नेपाली）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Spanish（idioma español）</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Lithuanian（Lietuvos）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Czech（český）</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Javanese（Jawa）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>Greek（ελληνικά）</Text>
        </View>
        
        <View style={block1}>
          <Text style={one}>Latin（Latine）</Text>
        </View>
        <View style={block2}>
          <Text style={one}>German（Deutsch）</Text>
        </View>
        
      </ScrollView>
    );
  }
}
const styles =
  {
    block1: {
      backgroundColor: '#bfcbdb',
      height: 50,
    },
    block2: {
      backgroundColor: '#e6edf5',
      height: 50,
    },
    one: {
      left: 17,
      top: 20,
      color: '#334559',
      fontSize: 12,
      fontWeight: 'bold'
    },
  }
export default lan;