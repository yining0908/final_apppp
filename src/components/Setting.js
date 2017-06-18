import React,{ Component} from 'react';
import { ScrollView} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Setting extends Component {


  goToPageTwo = () => {
    this.props.navigation.navigate('lan');
  };

  render(){
 return (
      <ScrollView style={{backgroundColor:'#8da9c8'}}>
        <List style={{backgroundColor:'#bfcbdb'}}>
          <ListItem 
            leftIcon={{name: 'color-lens',color:"#334559"}}
            title="Color Of Theme"  
                  rightIcon={{name:'chevron-right',color:"#334559"}}
          />
          </List>
            <List style={{backgroundColor:'#e6edf5'}}>
          <ListItem 
            leftIcon={{name: 'translate',color:"#334559"}}
            title="Language"
               onPress={() => this.goToPageTwo()}
                     rightIcon={{name:'chevron-right',color:"#334559"}}
          />
          </List>
            <List style={{backgroundColor:'#bfcbdb'}}>
          <ListItem 
             leftIcon={{name:'people',color:"#334559"}}
            title="Invite Friends"
                  rightIcon={{name:'chevron-right',color:"#334559"}}
          />
          </List>
            <List style={{backgroundColor:'#e6edf5'}}>
          <ListItem 
           leftIcon={{name:'history',color:"#334559"}}
            title="History" 
            rightIcon={{name:'chevron-right',color:"#334559"}}
                  
          />
          </List>
            <List style={{backgroundColor:'#bfcbdb',marginTop:15}}>
          <ListItem 
              leftIcon={{name:'notifications',color:"#334559"}}
            title="Notification"
                  rightIcon={{name:'chevron-right',color:"#334559"}}
          />
          </List>
            <List style={{backgroundColor:'#e6edf5'}}>
          <ListItem 
            leftIcon={{name:'description',color:"#334559"}}
            title="Policy"
                  rightIcon={{name:'chevron-right',color:"#334559"}}
          />
          </List>
            <List style={{backgroundColor:'#bfcbdb'}}>
          <ListItem 
            leftIcon={{name:'apps',color:"#334559"}}
            title="Ver  ( 1.5.1 )" 
            rightIcon={{name:'chevron-right',color:"#334559"}}
          />
          </List>
          
          
      </ScrollView>
  );
};
  }
export default Setting;
