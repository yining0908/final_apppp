import React ,{Component } from 'react';

import { ScrollView, Linking ,View,Image } from 'react-native';
import { Button, Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
class Details extends Component {
  render() {
    const {card,back,title,little,logo,tex,horizontal,icon1,icon2 } = styles;
    return (
      <ScrollView style={back}>
      <View style={card}> 
        <Image style={logo} source={require('../assets/ETS_img.jpg')}/>
        <Text style={title}>Testing 123</Text>
        <Text style={little}>Be anything and study anywhere</Text>
        <Text style={tex}>This year we are launching the revised TOEFL® 
        Paper-delivered Test. The first test administration is October 14, 
        2017. Registration opens June 1.The TOEFL test is the most widely 
        respected English-language test in the world.
        Our scoring methods set us apart from other tests and result in scores you can trust.</Text>
              
           <View style={horizontal}>
              <Image style={icon1} source={require('../assets/i9.png')}/>
             <Button  
          onPress={() => Linking.openURL('https://www.youtube.com/user/bbclearningenglish')}
          backgroundColor='e7ba3d'
          color='#334559'
          fontSize='10'
          title='Youtube'
        buttonStyle={{borderRadius:3,top:24,width:79,height:25,left:50}}
        textStyle={{textAlign: 'left',fontSize:12}} />
         <Image style={icon2} source={require('../assets/i8.png')}
         />
             <Button 
        title='Facebook' 
          onPress={() => Linking.openURL('https://www.facebook.com/bbclearningenglish.multimedia/?fref=ts')}
          backgroundColor='e7ba3d'
          color='#334559'
          fontSize='10'
        buttonStyle={{borderRadius:3,top:24,width:136,height:25,left:19}}
        textStyle={{textAlign: 'right',fontSize:12}} />
        </View>
           </View>

      </ScrollView>
    );
  }
};
const styles = {
  back:{
    backgroundColor:'white'
  },
  card:{
    backgroundColor:'white',
    // width:330,
     height:800,
    // borderRadius:10,
  },
  logo:
  {
    width:377,
    height:270
    // left:15,
    // top:15,
    // borderRadius:5
  },
   title:{
     color:'#334559',
     fontSize:15,
     marginTop:50,
     fontWeight:'bold',
     textAlign:'center'
   },
   little:{
     color:'#334559',
     fontSize:12,
     marginTop:5,
     fontWeight:'bold',
     textAlign:'center'
   },
   tex:{
        textAlign:'left',
         color:'#334559',
         margin:60,
         marginTop:40,
         fonSize:9,
         lineHeight:25
   },
    
   horizontal:{
     flexDirection: 'row',
 flex: 1,
   },
   icon1:{
     height:30,
     width:30,
     left:76,
     top:20,
   },
icon2:{
     height:30,
     width:30,
     left:70,
     top:20
   }
}

export default Details;
