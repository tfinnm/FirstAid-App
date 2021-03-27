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

launcherMenuItems = [
  {
    id: 1,
    text: "Medical Emergency",
    page: "med",
    color : 'red',
  },
  {
    id: 2,
    text: "Mental Health Crisis",
    page: "mh",
    color : '#344c6c',
  },
  {
    id: 3,
    text: "General Info",
    page: "info",
    color : '#344c6c',
  },
];

const launcher = ({ navigation, route }) => (
  <View style={styles.container}>
    <View style={styles.logoBlock}>
      <Image
        style={[{ height: hp('50%') }, { width: hp('50%') }]}
      />
    </View>
    <View style={[{height: 0},{marginBottom:wp('2.5%')}]}>
    </View>
    {launcherMenuItems.map((item) => {
      return (
      <TouchableHighlight
      onPress={() => {
        navigation.push(item.page);
      }}>
      <View style={[styles.MenuItem,{backgroundColor: item.color,}]}>
        <Text style={[{ color: 'white' }, { fontWeight: 'bold' }]}>
          {item.text}
        </Text>
      </View>
    </TouchableHighlight>
        //<Button style={{borderColor: prop[0]}}  key={key}>{prop[1]}</Button>
      );
    })}
  </View>
);

const link1 = ({ navigation, route }) => (
  <Text style={styles.title}>Screen 2</Text>
);

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="First Aid App" component={launcher} />
        {/* 
          Medical Emergency Screens
        */}
        <Root.Screen name="Medical Emergency | Scene Safety" component={link1} />
        {/* 
          Mental Health/CSSRS Screesns
        */}

        {/* 
          General Info Screens
        */}
        <Root.Screen name="General Info" component={link1} />
        <Root.Screen name="My Training" component={link1} />
        <Root.Screen name="Disclaimer" component={link1} />
        <Root.Screen name="About This App" component={link1} />
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
