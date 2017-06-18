import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Channel from './components/Channel';
import Details from './components/Details';
import Account from './components/Account';
import Change from './components/Change';
import Logout from './components/Logout';
import Setting from './components/Setting';
import Collection from './components/Collection';
import lan from './components/lan';
import NewAccount from './components/NewAccount';
import RD from './components/RD';
import LIVE from './components/LIVE';
import Details_br from './components/Details_br';
import Details_de from './components/Details_de';
import Details_voa from './components/Details_voa';
import BBC from './components/BBC';
import CNN from './components/CNN';
import ETS from './components/ETS';

export const ChannelStack = StackNavigator({
  Channel: {
    screen: Channel,
    navigationOptions: {
      header: () => ({
        style:{ backgroundColor: '#e7ba3d',},
            titleStyle: {
        color: '#ffffff'
      },
        title: 'CHANNEL',
      })
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'VoiceTube',
      })
    },
  },
   RD: {
    screen: RD,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'BBC English',
      })
    },
  },
  LIVE: {
    screen:LIVE,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'LIVE ABC',
      })
    },
  },
  Details_br: {
    screen: Details_br,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'BCC ENGLISH',
      })
    },
  },
    Details_de: {
    screen: Details_de,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'Daily English',
      })
    },
  },
      Details_voa: {
    screen: Details_voa,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'VOA English',
      })
    },
  },
      BBC: {
    screen: BBC,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'RD English',
      })
    },
  },
      CNN: {
    screen: CNN,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'CNN English',
      })
    },
  },
    ETS: {
    screen: ETS,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
           style:{ backgroundColor: '#334559'},
         
            titleStyle: {
        color: '#ffffff'
    },
        title: 'ETS TOEFL',
      })
    },
  },
});

export const AccountStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      header: () => ({
     style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
      title: 'ACCOUNT',
      })
    },
  },
  Change: {
    screen: Change,
    navigationOptions: {
      header: () => ({
        tintColor:'#ffffff',
         style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
        title: 'Change Your Photo',
      })
    },
  },
  Logout: {
    screen: Logout,
    navigationOptions: {
      header: () => ({
         tintColor:'#ffffff',
         style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
        title: 'Please Login Again',
      })
    },
  },
         NewAccount: {
        screen: NewAccount,
        navigationOptions: {
            header: ({ navigate }) => ({
                title: 'NEW ACCOUNT',
                 style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
                left: (
                    <Icon
                        name='navigate-before'
                        iconStyle={{ marginLeft: 10,color:"#ffffff" }}
                        onPress={() => navigate('Logout')}
                    />
                ),
            })
        }
    }
});

export const SettingStack = StackNavigator({
  Setting: {
    screen: Setting,
    navigationOptions: {
      header: () => ({
        style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
        title: 'SETTING',
      })
    },
  },
  lan: {
screen:lan,
navigationOptions: {
header: () => ({
   tintColor:'#ffffff',
   style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
 title: 'LANGUAGE',
})
 },
 },
});
export const CollectionStack = StackNavigator({
  Collection: {
    screen: Collection,
    navigationOptions: {
      header: () => ({
         style:{ backgroundColor: '#334559',},
            titleStyle: {
        color: '#ffffff'
      },
        title: 'COLLECTION',
      })
    },
  },
});

export const TabRouter = TabNavigator(
  {
    ChannelStack: {
      screen: ChannelStack,
      navigationOptions: {
        tabBar: {
          label: 'Channel',
          icon: ({ tintColor }) => <Icon name="home" size={32} color={tintColor} />
        },
      },
    },
    CollectionStack: {
      screen: CollectionStack,
      navigationOptions: {
        tabBar: {
          label: 'Collection',
          icon: ({ tintColor }) => <Icon name="collections" size={32} color={tintColor} />

        },
      },
    },
    AccountStack: {
      screen: AccountStack,
      navigationOptions: {
        tabBar: {
          label: 'Account',
          icon: ({ tintColor }) => <Icon name="face" size={32} color={tintColor} />
        },
      },
    },
    SettingStack: {
      screen: SettingStack,
      navigationOptions: {
        tabBar: {
          label: 'Setting',
          icon: ({ tintColor }) => <Icon name="settings" size={32} color={tintColor} />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
          tabBarOptions: {
    activeTintColor: '#334559',
    inactiveTintColor: '#8da9c8',
  },
  }

);
