import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  Linking,
  Button,
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Dialog, { DialogContent } from 'react-native-popup-dialog';

const Root = createStackNavigator();

const immediateHelp = {
  call911: true,
  callhotline: true,
  goForward: false,
  forwardPage: 'launcher',
  forwardParams: {},
  forwardText: 'Home',
  bigText: 'Seek Immediate Help',
  graphic: '',
  smallText:
    'Seek Immediate Professional Help For The Patient. STAY WITH THEM UNTIL HELP ARRIVES!',
  smallText2: 'This patient has been classified as \"High Risk\" by the Columbia Protocal, an evidence based suicide traige tool. It is recommended that they get help immediately.'
};
const cssrs6 = {
  promptText:
    'Ask the patient: "In the past three months, have you done anything, started to do anything, or prepared to do anything to end your life? (For example: collecting pills, self harm, or writing a suicide note)"',
  yesPage: 'Mental Health Crisis | Seek Immediate Help',
  noPage: 'Mental Health Crisis | Seek Professional Help',
  yesParams: immediateHelp,
  noParams: {
    call911: false,
    callhotline: false,
    goForward: true,
    forwardPage: 'launcher',
    forwardParams: {},
    forwardText: 'Home',
    bigText: 'Seek Proffesional Help',
    graphic: '',
    smallText:
    'It is recommended that the patient seeks professional help.',
    smallText2: 'Although the assessment has determined that the patient is not considered \"High Risk\", a yes to any of these questions indicates that the patient should seek professional help. Even if all of the questions were answered no, it may be worth talking to a professional.'
  },
};
const cssrs5 = {
  promptText:
    'Ask the patient: "In the last month, have you worked out or started to work out the details of how to kill yourself?"',
  yesPage: 'Mental Health Crisis | Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS 6',
  yesParams: immediateHelp,
  noParams: cssrs6,
};
const cssrs4 = {
  promptText:
    'Ask the patient: "In the last month, have you had any intention of acting on these thoughts of killing yourself, as opposed to you have the thoughts but you definately would not act on them?"',
  yesPage: 'Mental Health Crisis | Seek Immediate Help',
  noPage: 'Mental Health Crisis | C-SSRS 5',
  yesParams: immediateHelp,
  noParams: cssrs5,
};
const cssrs3 = {
  promptText:
    'Ask the patient: "In the last month, have you though how you might do this?"',
  yesPage: 'Mental Health Crisis | C-SSRS 4',
  noPage: 'Mental Health Crisis | C-SSRS 4',
  yesParams: cssrs4,
  noParams: cssrs4,
};
const cssrs2 = {
  promptText:
    'Ask the patient: "In the last month, have you actually had any thoughts about killing yourself?"',
  yesPage: 'Mental Health Crisis | C-SSRS 3',
  noPage: 'Mental Health Crisis | C-SSRS 6',
  yesParams: cssrs3,
  noParams: cssrs6,
};
const cssrs1 = {
  promptText:
    'Ask the patient: "In the last month, have you wished you were dead or wished you could go to sleep and not wake up?"',
  yesPage: 'Mental Health Crisis | C-SSRS 2',
  noPage: 'Mental Health Crisis | C-SSRS 2',
  yesParams: cssrs2,
  noParams: cssrs2,
};
const bleed = {
  promptText: 'Is the patient bleeding?',
  yesPage: 'Medical Emergency | Bleeding Menu',
  noPage: 'Medical Emergency | CPR',
  yesParams: {},
  noParams: {},
};
const pulse = {
  promptText: 'Does the patient have a pulse?',
  yesPage: 'Medical Emergency | Bleeding',
  noPage: 'Medical Emergency | CPR',
  yesParams: bleed,
  noParams: {},
};
const air = {
  promptText:
    'Is the patient choking, having difficulty breathing, or have an obstructed airway?',
  yesPage: 'Medical Emergency | Airway Menu',
  noPage: 'Medical Emergency | Pulse',
  yesParams: {},
  noParams: pulse,
};
const breath = {
  promptText: 'Is the patient breathing?',
  yesPage: 'Medical Emergency | Airway',
  noPage: 'Medical Emergency | Brething Menu',
  yesParams: air,
  noParams: {},
};
const consent = {
  promptText: 'Do you have the patients explicit consent to treat them?',
  yesPage: 'Medical Emergency | Breathing',
  noPage: 'Medical Emergency | STOP! Obtain Consent',
  yesParams: breath,
  noParams: {},
};
const alive = {
  promptText: 'Is the patient conscious?',
  yesPage: 'Medical Emergency | Obtain Consent',
  noPage: 'Medical Emergency | Breathing',
  yesParams: consent,
  noParams: breath,
};
const PPE = {
  promptText:
    'Do you have proper PPE on, if availible? (Such as latex-free gloves)',
  yesPage: 'Medical Emergency | Consciousness',
  noPage: 'Medical Emergency| STOP! Use PPE',
  yesParams: alive,
  noParams: {},
};
const sceneSafe = {
  promptText: 'Are you in a safe location? Are you clear of any danger?',
  yesPage: 'Medical Emergency | PPE',
  noPage: 'Medical Emergency| STOP! Move To Safety',
  yesParams: PPE,
  noParams: {},
};

const launcherMenuItems = [
  {
    id: 1,
    text: 'Medical Emergency',
    page: 'Medical Emergency | Scene Safety',
    color: 'red',
    params: sceneSafe,
  },
  {
    id: 2,
    text: 'Mental Health Crisis',
    page: 'Mental Health Crisis | C-SSRS 1',
    color: '#344c6c',
    params: cssrs1,
  },
  {
    id: 3,
    text: 'General Info',
    page: 'General Info',
    color: '#344c6c',
    params: {
      menuItems: [
        {
          id: 1,
          text: 'My Training',
          page: 'My Training',
          color: '#344c6c',
          params: {},
        },
        {
          id: 2,
          text: 'Disclaimer & License',
          page: 'Disclaimer',
          color: '#344c6c',
          params: {},
        },
        {
          id: 3,
          text: 'About This App',
          page: 'About This App',
          color: '#344c6c',
          params: {},
        },
      ],
    },
  },
];

function menuScreen({ route, navigation }) {
  const { menuItems } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.logoBlock}>
        {/* this is just a buffer tbh */}
        <Image style={[{ height: hp('50%') }, { width: hp('50%') }]} />
      </View>
      <View style={[{ height: 0 }, { marginBottom: wp('2.5%') }]}></View>
      {menuItems.map((item) => {
        return (
          <TouchableHighlight
            onPress={() => {
              navigation.navigate(item.page, item.params);
            }}>
            <View style={[styles.MenuItem, { backgroundColor: item.color }]}>
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
    {navigation.replace('First Aid App', { menuItems: launcherMenuItems })}
  </View>
);
function YesNoPrompt({ route, navigation }) {
  const { promptText } = route.params;
  const { yesPage } = route.params;
  const { noPage } = route.params;
  const { yesParams } = route.params;
  const { noParams } = route.params;
  return (
    <View style={{ flex: 1}}>
      <Text style={{ fontSize: 15 }}>{promptText}</Text>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate(yesPage, yesParams);
          }}>
          <View style={[styles.MenuItem, { backgroundColor: '#344c6c' }]}>
            <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
              YES
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            navigation.navigate(noPage, noParams);
          }}>
          <View style={[styles.MenuItem, { backgroundColor: '#344c6c' }]}>
            <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>NO</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
function stopScreen({ route, navigation }) {
  const { call911 } = route.params;
  const { callhotline } = route.params;
  const { goForward } = route.params;
  const { forwardPage } = route.params;
  const { forwardParams } = route.params;
  const { forwardText } = route.params;
  const { bigText } = route.params;
  const { graphic } = route.params;
  const { smallText } = route.params;
  const { smallText2 } = route.params;
  return (
    <View style={{flex:1}}>
    <Text style={{fontSize: 20, textAlign:'center'}}>{bigText}</Text>
    <Text style={{fontSize:15}}>{smallText}</Text>
    <Image source={{graphic}} style={[{ height: wp('50%') }, { width: wp('100%') }]} />
    <Text style={{fontSize:15}}>{smallText2}</Text>
      <View style={{flex:1,justifyContent:'flex-end'}}>
      {call911 && (
        <TouchableHighlight
            onPress={() => {
            Linking.openURL('tel:911');
          }}>
        <View style={[styles.MenuItem, { backgroundColor: 'red' }]}>
            <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
              Call 911
            </Text>
          </View>
        </TouchableHighlight>
      )}

      {callhotline && (
        <TouchableHighlight
            onPress={() => {
            Linking.openURL('tel:18002738255');
          }}>
        <View style={[styles.MenuItem, { backgroundColor: 'red' }]}>
            <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
              Call Suicide Hotline
            </Text>
          </View>
        </TouchableHighlight>
      )}
      {goForward && (
        <TouchableHighlight
            onPress={() => {
            navigation.navigate(forwardPage, forwardParams);
          }}>
        <View style={[styles.MenuItem, { backgroundColor: '#344c6c' }]}>
            <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
              {forwardText}
            </Text>
          </View>
        </TouchableHighlight>
      )}
    </View>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="launcher" component={launcher} />
        <Root.Screen name="First Aid App" component={menuScreen} />
        <Root.Screen
          name="Medical Emergency | Scene Safety"
          component={YesNoPrompt}
        />
        <Root.Screen name="Medical Emergency | PPE" component={YesNoPrompt} />
        <Root.Screen
          name="Medical Emergency| STOP! Move To Safety"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Medical Emergency | Consciousness"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Medical Emergency| STOP! Use PPE"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | C-SSRS 1"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | C-SSRS 2"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | C-SSRS 3"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | C-SSRS 4"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | C-SSRS 5"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | C-SSRS 6"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Mental Health Crisis | Seek Professional Help"
          component={stopScreen}
        />
        <Root.Screen
          name="Mental Health Crisis | Seek Immediate Help"
          component={stopScreen}
        />
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
    height:
      hp('100%') -
      getStatusBarHeight() -
      Header.height -
      wp('2.5%') -
      launcherMenuItems.length * (wp('2.5%') + hp('10%')),
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
