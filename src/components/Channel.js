import React ,{Component } from 'react';
import { View, Image,Text,ScrollView,Linking } from 'react-native';
import { SearchBar ,Button} from 'react-native-elements';
import { Icon } from 'react-native-elements';
//import Hyperlink from 'react-native-hyperlink'

class Page extends Component {


  goToPageTwo = () => {
    this.props.navigation.navigate('Details');
  };
    goToPageTwo1 = () => {
    this.props.navigation.navigate('Details_br');
  };
   goToPageTwo2 = () => {
    this.props.navigation.navigate('Details_de');
  };
   goToPageTwo3= () => {
    this.props.navigation.navigate('Details_voa');
  };
    goToPageTwo4= () => {
    this.props.navigation.navigate('BBC');
  };
    goToPageTwo5= () => {
    this.props.navigation.navigate('CNN');
  };
    goToPageTwo6= () => {
    this.props.navigation.navigate('ETS');
  };
   goToPageTwo7= () => {
    this.props.navigation.navigate('RD');
  };
   goToPageTwo8= () => {
    this.props.navigation.navigate('LIVE');
  };

  render(){
    const {all,box,horizontal,pic,tit,inside,readbox,read,search} = styles;
return (
        <ScrollView>
        <SearchBar 
        //lightTheme
         placeholder='Search...' />
        <View style={all}>
          <View style={horizontal}> 
           <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/vt.jpg')}/>
        <Text style={tit}>VoiceTube</Text>
        <Text style={inside}>The Little Prince Official Fanpage</Text>
          <Button 
        title='READ' 
           onPress={() => this.goToPageTwo()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
       
        </View>
         <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/rd.jpg')}/>
        <Text style={tit}>RDEnglish</Text>
        <Text style={inside}>How to be a Good Storyteller</Text>
          <Button 
        title='READ' 
        onPress={() => this.goToPageTwo4()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
       
        </View>
         <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/abc.jpg')}/>
        <Text style={tit}>LiveABC</Text>
        <Text style={inside}>To Do What You Really Want</Text>
          <Button 
        title='READ' 
           onPress={() => this.goToPageTwo8()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
        <View style={horizontal}> 
           <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/bbc.jpg')}/>
        <Text style={tit}>BBC NEWS</Text>
        <Text style={inside}>What Do You Mean</Text>
          <Button 
        title='READ' 
           onPress={() => this.goToPageTwo7()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
       
        </View>
         <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/cnn.jpg')}/>
        <Text style={tit}>CNN NEWS</Text>
        <Text style={inside}>Wedding Dress</Text>
          <Button 
        title='READ' 
          onPress={() => this.goToPageTwo5()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
       
        </View>
         <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
            <Image style={pic}
        source={require('../assets/ets.jpg')}/>
        <Text style={tit}>ETS TOEFL</Text>
        <Text style={inside}>Make The Test Easier</Text>
          <Button 
        title='READ'   
        onPress={() => this.goToPageTwo6()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
        <View style={horizontal}> 
           <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/de.jpg')}/>
        <Text style={tit}>DAILY ENGLISH</Text>
        <Text style={inside}>An English A Day  </Text>
          <Button 
        title='READ' 
        onPress={() => this.goToPageTwo2()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
       
        </View>
         <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
           <Image style={pic}
        source={require('../assets/voa.png')}/>
        <Text style={tit}>VOA ENGLISH </Text>
        <Text style={inside}>Your Everyday Day English</Text>
          <Button 
        title='READ' 
             onPress={() => this.goToPageTwo3()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
       
        </View>
         <View style={box}> 
          <Icon name="add" size={22} color="#8da9c8" marginLeft={87} marginTop={5}/>
          
         <Image style={pic}
        source={require('../assets/bcc.jpg')}/>
        <Text style={tit}>BR CUNCIL</Text>
        <Text style={inside}>To Day Is Friday</Text>
          <Button 
        title='READ' 
            onPress={() => this.goToPageTwo1()}
          backgroundColor='#334559'
          color='#ffffff'
          fontSize='10'
        buttonStyle={{borderRadius:10,width:55,height:25,marginTop:20,marginLeft:28}}
        textStyle={{textAlign: 'center',fontSize:10}} />
        </View>
        </View>
        </View>
        </ScrollView>
    );
};
  }
     
const styles =
{
all:{
flex:1},
horizontal:{
flexDirection: 'row',
 flex: 1,
},
pic:{
width:70,
height:70,
marginLeft:20.5
},
box:{
  marginLeft:10,
  marginTop:15,
  height:210,
  width:112,
  backgroundColor:'#ffffff',
  borderRadius:5
},
tit:{
  textAlign:'center',
  color:'#334559',
  fontWeight:'bold',
   fontSize:13,
   marginTop:5
},
inside:{
  marginLeft:22,
  marginRight:20,
  fontSize:9,
  color:'#aaaaaa',
  fontWeight:'bold',
  marginTop:5
},
};
export default Page;
