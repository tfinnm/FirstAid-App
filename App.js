import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const Root = createStackNavigator();

const cssrs6 = {
  promptText: 'Ask the patient: "In the past three months, have you done anything, started to do anything, or prepared to do anything to end your life? (For example: collecting pills, self harm, or writing a suicide note)"',
  yesPage: 'Mental Health Crisis | C-SSRS Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS Seek Professional Help',
  yesParams: {},
  noParams: {}
}
const cssrs5 = {
  promptText: "Ask the patient: \"In the last month, have you worked out or started to work out the details of how to kill yourself?\"",
  yesPage: 'Mental Health Crisis | C-SSRS Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS 6',
  yesParams: {},
  noParams: cssrs6
}
const cssrs4 = {
  promptText: 'Ask the patient: "In the last month, have you had any intention of acting on these thoughts of killing yourself, as opposed to you have the thoughts but you definately would not act on them?"',
  yesPage: 'Mental Health Crisis | C-SSRS Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS 5',
  yesParams: {},
  noParams: cssrs5
}
const cssrs3 = {
  promptText: 'Ask the patient: "In the last month, have you though how you might do this?"',
  yesPage: 'Mental Health Crisis | C-SSRS 4',
  noPage: 'Mental Health Crisis | C-SSRS 4',
  yesParams: cssrs4,
  noParams: cssrs4
}
const cssrs2 = {
  promptText: 'Ask the patient: "In the last month, have you actually had any thoughts about killing yourself?"',
  yesPage: 'Mental Health Crisis | C-SSRS 3',
  noPage: 'Mental Health Crisis | C-SSRS 6',
  yesParams: cssrs3,
  noParams: cssrs6
}
const cssrs1 = {
  promptText: "Ask the patient: \"In the last month, have you wished you were dead or wished you could go to sleep and not wake up?\"",
  yesPage: 'Mental Health Crisis | C-SSRS 2',
  noPage: 'Mental Health Crisis | C-SSRS 2',
  yesParams: cssrs2,
  noParams: cssrs2
}


const launcherMenuItems = [
  {
    id: 1,
    text: "Medical Emergency",
    page: "Medical Emergency | Scene Safety",
    color: 'red',
    params: {
        promptText: "Are you in a safe location? Are you clear of any danger?",
        yesPage: 'Medical Emergency | Airway/Breathing',
        noPage: 'Move To Safety',
        yesParams: {

        },
        noParams: {

        }
    },
  },
  {
    id: 2,
    text: "Mental Health Crisis",
    page: "Mental Health Crisis | C-SSRS 1",
    color: '#344c6c',
    params: cssrs1
  },
  {
    id: 3,
    text: "General Info",
    page: "General Info",
    color: '#344c6c',
    params: {
      menuItems: [{
        id: 1,
        text: "My Training",
        page: "My Training",
        color: '#344c6c',
        params: {
        }
      },
      {
        id: 2,
        text: "Disclaimer & License",
        page: "Disclaimer",
        color: '#344c6c',
        params: {
        }
      },
      {
        id: 3,
        text: "About This App",
        page: "About This App",
        color: '#344c6c',
        params: {
        }
      }]
    }
  },
];

function menuScreen({ route, navigation }) {
  const { menuItems } = route.params;
  return (
    <View style={styles.container}>
    <View style={styles.logoBlock}>
    {/* this is just a buffer tbh */}
      <Image
        style={[{ height: hp('50%') }, { width: hp('50%') }]}
      />
    </View>
    <View style={[{height: 0},{marginBottom:wp('2.5%')}]}>
    </View>
    {menuItems.map((item) => {
      return (
      <TouchableHighlight
      onPress={() => {
        navigation.navigate(item.page, item.params);
      }}>
      <View style={[styles.MenuItem,{backgroundColor: item.color,}]}>
        <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
          {item.text}
        </Text>
      </View>
    </TouchableHighlight>
      );
    })}
  </View>
  );
}

const launcher = ({ navigation, route }) => (
  <View>
    {navigation.replace("First Aid App", {menuItems: launcherMenuItems})}
  </View>
);

function YesNoPrompt({ route, navigation }) {
  const { promptText } = route.params;
  const { yesPage } = route.params;
  const { noPage } = route.params;
  const { yesParams } = route.params;
  const { noParams } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'top', justifyContent: 'top' }}>
      <Text style={{fontSize:15}}>
        {promptText}
      </Text>
      <TouchableHighlight
      onPress={() => {
        navigation.navigate(yesPage, yesParams);
      }}>
      <View style={[styles.MenuItem,{backgroundColor: '#344c6c',}]}>
        <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
          YES
        </Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight
      onPress={() => {
        navigation.navigate(noPage, noParams);
      }}>
      <View style={[styles.MenuItem,{backgroundColor: '#344c6c',}]}>
        <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
          NO
        </Text>
      </View>
    </TouchableHighlight>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="launcher" component={launcher} />
        <Root.Screen name="First Aid App" component={menuScreen} />
        {/* 
          Medical Emergency Screens
        */}
        <Root.Screen name="Medical Emergency | Scene Safety" component={YesNoPrompt} />
        {/* 
          Mental Health/CSSRS Screesns
        */}
        <Root.Screen name="Mental Health Crisis | C-SSRS 1" component={YesNoPrompt} />
        <Root.Screen name="Mental Health Crisis | C-SSRS 2" component={YesNoPrompt} />
        <Root.Screen name="Mental Health Crisis | C-SSRS 3" component={YesNoPrompt} />
        <Root.Screen name="Mental Health Crisis | C-SSRS 4" component={YesNoPrompt} />
        <Root.Screen name="Mental Health Crisis | C-SSRS 5" component={YesNoPrompt} />
        <Root.Screen name="Mental Health Crisis | C-SSRS 6" component={YesNoPrompt} />
        <Root.Screen name="Mental Health Crisis | Seek Professional Help" component={launcher} />
        <Root.Screen name="Mental Health Crisis | Seek Immediate Help" component={launcher} />
        {/* 
          General Info Screens
        */}
        <Root.Screen name="General Info" component={menuScreen} />
        <Root.Screen name="My Training" component={launcher} />
        <Root.Screen name="Disclaimer" component={launcher} />
        <Root.Screen name="About This App" component={launcher} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'Bold',
    fontSize: 25,
    color: 'white',
  },
  logoBlock: {
    backgroundColor: '#344c6c',
    height: (hp('100%') - getStatusBarHeight() - Header.height - wp('2.5%') - (launcherMenuItems.length*(wp('2.5%')+hp('10%')))),
    //  width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MenuItem: {
    marginLeft: wp('2.5%'),
    marginRight: wp('2.5%'),
    marginBottom: wp('2.5%'),
    height: hp('10%'),
    //   width: 250,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
