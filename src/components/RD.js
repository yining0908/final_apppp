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
        <Image style={logo} source={require('../assets/RELAX.jpg')}/>
        <Text style={title}>What should I know about the Relax feature?</Text>
        <Text style={little}>without looking at your resume</Text>
        <Text style={tex}>The Relax feature on Fitbit Blaze and 
          Fitbit Charge to provides personalized deep breathing sessions 
          that can help you find moments of calm throughout your day. You 
          can choose between two-minute or five-minute long sessions.</Text>
              
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
