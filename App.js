import * as React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  AppRegistry,
  TouchableHighlight,
  Linking,
  Switch,
  AsyncStorage
} from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, Header } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Audio } from 'expo-av'
import timer from 'react-native-timer';
import {cssrs1, cssrs2, cssrs3, cssrs4, cssrs5, cssrs6, immediateHelp} from './mentalHealth';
import {sceneSafe, PPE, alive, consent, breath, air, pulse, bleed} from './triage';

const Root = createStackNavigator();

const trainingItems = [
  {
    name: 'First Aid',
    providers: 'Red Cross, AHA, ECSI',
    link: 'https://www.redcross.org/take-a-class/classes/adult-first-aid%2Fcpr%2Faed/LP-00014200.html'
  },
  {
    name: 'CPR/AED',
    providers: 'Red Cross, AHA, ECSI',
    link: 'https://www.redcross.org/take-a-class/classes/adult-and-pediatric-cpr%2Faed/LP-00003600.html'
  },
  {
    name: 'Bloodborne Pathogens',
    providers: 'Red Cross, AHA, ECSI',
    link: 'https://cpr.heart.org/en/cpr-courses-and-kits/heartsaver/heartsaver-bloodborne-pathogens-training'
  },
  {
    name: 'Stop the Bleed',
    providers: 'First Care Provider, American College of Surgeons',
    link: 'https://www.stopthebleed.org/'
  },
  {
    name: 'Mental Health First Aid',
    providers: 'Mental Health First Aid USA',
    link: 'https://www.mentalhealthfirstaid.org/'
  }
];

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
          text: 'Find Training',
          page: 'Find Training',
          color: '#344c6c',
          params: {
            menuItems: trainingItems 
          },
        },
        {
          id: 2,
          text: 'About This App',
          page: 'About This App',
          color: '#344c6c',
          params: {
            call911: false,
            callPoison: false,
            callhotline: false,
            goForward: false,
            forwardPage: '',
            forwardParams: {},
            forwardText: '',
            bigText: 'Made By Toby McDonald',
            graphic: '',
            smallText: 'Support: webmaster@tfinnm.tk',
  smallText2: 'This app does not constitute or replace formal training and does not make the user a competant first aider. Always refer to your local protocals, laws, and guidelines.'
},
        },
      ],
    },
  },
];

function menuCheckListScreen({ route, navigation }) {
  const { menuItems } = route.params;
  return (
    <View style={styles.container}>
      <View style={[{ height: 0 }, { marginBottom: wp('2.5%') }]}></View>
      {menuItems.map((item) => {
        return (
          <TouchableHighlight
            onPress={() => {
            Linking.openURL(item.link);
          }}>
            <View style={[styles.MenuItem, { backgroundColor: '#344c6c' }]}>
              <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
                {item.name}
              </Text>
              <Text style={[{ color: 'grey' }]}>
                {item.providers}
              </Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

function menuScreen({ route, navigation }) {
  const { menuItems } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.logoBlock}>
        {/* this is just a buffer tbh */}
        {/*<Image style={[{ height: hp('50%') }, { width: hp('50%') }]} />*/}
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

const sound = Audio.Sound.createAsync(
       require('./chirp.mp3')
    );
async function metronomepulse() {
  await sound.playAsync();
}

const launcher = ({ navigation, route }) => (
  <View>
    {navigation.replace('Rescue Ready: First Aid Reference', { menuItems: launcherMenuItems })}
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
  const { callPoison } = route.params;
  const { goForward } = route.params;
  const { forwardPage } = route.params;
  const { forwardParams } = route.params;
  const { forwardText } = route.params;
  const { bigText } = route.params;
  const { graphic } = route.params;
  const { smallText } = route.params;
  const { smallText2 } = route.params;
  const { metronome } = route.params;
  if (metronome) {
    timer.setTimeout("metronometimer", metronomepulse(), 525);
  }
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
      {callPoison && (
        <TouchableHighlight
            onPress={() => {
            Linking.openURL('tel:18002221222');
          }}>
        <View style={[styles.MenuItem, { backgroundColor: 'red' }]}>
            <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
              Call Poison Control
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
        <Root.Screen name="Rescue Ready: First Aid Reference" component={menuScreen} />
        <Root.Screen
          name="Medical Emergency | Scene Safety"
          component={YesNoPrompt}
        />
        <Root.Screen name="Medical Emergency | PPE" component={YesNoPrompt} />
        <Root.Screen
          name="Medical Emergency | STOP! Move To Safety"
          component={stopScreen}
        />
        <Root.Screen
          name="Medical Emergency | Consciousness"
          component={YesNoPrompt}
        />
        <Root.Screen
          name="Medical Emergency| STOP! Use PPE"
          component={stopScreen}
        />
        <Root.Screen name="Medical Emergency | Obtain Consent" component={YesNoPrompt} />
        <Root.Screen name="Medical Emergency | Breathing" component={YesNoPrompt} />
        <Root.Screen name="Medical Emergency | STOP! Obtain Consent" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Brething Menu" component={menuScreen} />
        <Root.Screen name="Medical Emergency | Airway" component={YesNoPrompt} />
        <Root.Screen name="Medical Emergency | Pulse" component={YesNoPrompt} />
        <Root.Screen name="Medical Emergency | Airway Menu" component={menuScreen} />
        <Root.Screen name="Medical Emergency | CPR" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Choking" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Difficulty Breathing" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Alergic Reaction" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Bleeding" component={YesNoPrompt} />
        <Root.Screen name="Medical Emergency | Bleeding Menu" component={menuScreen} />
        <Root.Screen name="Medical Emergency | Mental Status" component={YesNoPrompt} />
        <Root.Screen name="Medical Emergency | Altered Mental Status" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Other Conditions" component={menuScreen} />
        <Root.Screen name="Medical Emergency | Bloody Nose" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Stop The Bleed" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Wound Care" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Scrapes" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Poison" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Physical Injuries" component={menuScreen} />
        <Root.Screen name="Medical Emergency | Heart Attack" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Shock" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Enviromental Menu" component={menuScreen} />
        <Root.Screen name="Medical Emergency | FrostBite" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Sunburn" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Bites/Stings" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Heat Stress" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Hypothermia" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Dehydration" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Broken Bones" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Burns" component={stopScreen} />
        <Root.Screen name="Medical Emergency | Pain" component={stopScreen} />
        
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
        <Root.Screen name="Find Training" component={menuCheckListScreen} />
        <Root.Screen name="About This App" component={stopScreen} />
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
