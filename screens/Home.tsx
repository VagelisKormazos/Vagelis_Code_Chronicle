// screens/Screen1.tsx
import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, Image, TouchableOpacity, Linking, Pressable } from 'react-native';

interface Screen1Props {
  navigation: StackNavigationProp<any>;
}

const Screen1: React.FC<Screen1Props> = ({ navigation }) => {
  
  const goToScreen2 = () => {
    navigation.navigate('ScreenPortofolio');
  };

  const goToScreen3 = () => {
    navigation.navigate('ScreenAbout');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/evangelos-kormazos-853448263/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/VagelisKormazos/');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/vagelis_kormazos/');
  };
  

  return (
  <View style={styles.container}>
    
    <View style={styles.content}>
      <Image
        source={require('../icons/me2.png')}
        style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Hello, I'm Vagelis</Text>
        <Text style={styles.myName}>Kormazos</Text>
        <View style={styles.line}></View>
        <Text style={styles.textStyle4}>A Mathematician with</Text>
        <Text style={styles.textStyle5}> love in computer science</Text>
      </View>
    </View>

    <View style={styles.bottomBar}>
      <Image source={require('../icons/C.png')} style={styles.bottomBarImage} />
      <Image source={require('../icons/java.png')} style={styles.bottomBarImage} />
      <Image source={require('../icons/python.png')} style={styles.bottomBarImage} />
      <Image source={require('../icons/react.png')} style={styles.bottomBarImage} />
      <Image source={require('../icons/vb.png')} style={styles.bottomBarImage} />
    </View>

    <Text style={styles.textStyle2}>Who I Am</Text>
    <Text style={styles.textStyle3}>About My Resume</Text>

    <View style={styles.labelContainer}>
      <Text style={styles.labelText1}>Age:</Text>
      <Text style={styles.labelText2}>33</Text>
    </View>
    <View style={styles.labelContainer2}>
      <Text style={styles.labelText1}>Resident:</Text>
      <Text style={styles.labelText2}>Greece</Text>
    </View>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText1}>City:</Text>
      <Text style={styles.labelText2}>Athens</Text>
    </View>
    <View style={styles.labelContainer2}>
      <Text style={styles.labelText1}>Bachelor:</Text>
      <Text style={styles.labelText2}>Mathimatics</Text>
    </View>
    <View style={styles.labelContainer}>
      <Text style={styles.labelText1}>Master:</Text>
      <Text style={styles.labelText2}>Cοmputer Science</Text>
    </View>

    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
        <Image source={require('../icons/btn_linkedin.png')} style={styles.image2} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openGitHub}>
        <Image source={require('../icons/btn_github.png')} style={styles.image2} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openInstagram}>
        <Image source={require('../icons/btn_instagram.png')} style={styles.image2} />
      </TouchableOpacity>
    </View>

    <View style={styles.NavContainer}>
    <View style={styles.NavBar}>
        <TouchableOpacity onPress={goToScreen2}>
            <Text style={styles.textBar}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={styles.textBar}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToScreen3}>
            <Text style={styles.textBar}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  );
 }
 

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: 'black',
  paddingTop: 10,
},
content: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginLeft: 20,
  marginTop: 20,
},
textContainer: {
  marginLeft: 20,
},
textStyle: {
  fontSize: 20,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 20,
},
textStyle2: {
  fontSize: 9,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 10,
},
textStyle3: {
  fontSize: 16,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  marginTop: 10,
},
textStyle4: {
  fontSize: 11,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'left',
  marginTop: 10,
},
textStyle5: {
  fontSize: 11,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'right',
  marginTop: 10,
},
myName: {
  fontSize: 22,
  color: '#64887C',//or 132A24 64887C 81AEA7
  marginTop: 10,
},
image: {
  width: 180,
  height: 200,
  borderRadius: 10,
  resizeMode: 'cover',
},
line: {
  borderBottomColor: '#64887C',
  borderBottomWidth: 0.5,
  marginBottom: 2,
},
bottomBar: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#132A24',
  padding: 10,
  alignItems: 'center',
  marginTop: 20,
},
bottomBarImage: {
  width: 30,
  height: 35,
  alignSelf: 'center',
},
labelContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
},
labelText1: {
  fontSize: 16,
  color: 'white',
  marginRight: 10,
  width: 100,
},
labelText2: {
  fontSize: 16,
  color: 'white',
  textAlign: 'center',
},
labelContainer2: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 10,
  backgroundColor: '#132A24',
},
buttonContainer: {
  padding: 15,
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 25,
},
button: {
  borderColor: '#81AEA7',
  borderWidth: 0,
  backgroundColor: 'black',
  padding: 10,
  borderRadius: 5,
  width: 70,
  height: 70
},
image2: {
  width: 50,
  height: 50,
  alignSelf: 'center',
},
NavContainer: {
  position: 'absolute',
  alignItems: 'center',
  alignSelf: 'center',
  bottom: 1,
},
NavBar: {
flexDirection: 'row',
backgroundColor: 'black',
width: '100%', justifyContent: 'space-evenly',
borderRadius: 20,
height: 40,
borderColor: '#132A24', // πράσινο περίγραμμα
borderWidth: 2, // πάχος περιγράμματος
alignItems: 'center',
},
IconBehave: {
  padding: 5,
},
textBar: {
  fontSize: 15,
  color: '#64887C', 
},
});

export default Screen1;
