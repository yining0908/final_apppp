import React ,{Component } from 'react';

import { ScrollView, Linking ,View,Image } from 'react-native';
import { Button, Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
class Details_de extends Component {
  render() {
    const {card,back,title,little,logo,tex,horizontal,icon1,icon2 } = styles;
    return (
      <ScrollView style={back}>
      <View style={card}> 
        <Image style={logo} source={require('../assets/Details_de.jpg')}/>
        <Text style={title}>Face-to-face communication is better</Text>
        <Text style={little}>It is better than other types of communication, such as letters, email, or telephone calls.</Text>
        <Text style={tex}>If you are talking to someone directly, 
you can see right away if they don’t understand you.
A person’s body language will tell you they 
disagree or don’t follow your line of thought. 
You can repeat yourself or paraphrase your argument.
If you had sent an e-mail, the person may have 
misinterpreted what you wanted to say. 
He or she could be insulted and you would have to 
waste time explaining yourself in another e-mail.</Text>
              
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

export default Details_de;
