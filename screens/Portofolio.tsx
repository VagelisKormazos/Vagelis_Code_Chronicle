// screens/Screen2.tsx
import * as React from 'react';
import { View,  StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, Image, TouchableOpacity, Linking, Pressable } from 'react-native';

interface Screen2Props {
  navigation: StackNavigationProp<any>;
}

const Screen2: React.FC<Screen2Props> = ({ navigation }) => {
  const goToScreen1 = () => {
    navigation.navigate('ScreenHome');
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
        <Text style={styles.textStyle3}>  " Any sufficiently advanced technology is</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textStyle3}>indistinguishable from magic. " </Text>
        <Text style={styles.myName}>- Arthur C. Clarke</Text>
      </View>
      
      <View style={styles.bottomBar}>
        <Image source={require('../icons/C.png')} style={styles.bottomBarImage} />
        <Image source={require('../icons/java.png')} style={styles.bottomBarImage} />
        <Image source={require('../icons/python.png')} style={styles.bottomBarImage} />
        <Image source={require('../icons/react.png')} style={styles.bottomBarImage} />
        <Image source={require('../icons/vb.png')} style={styles.bottomBarImage} />
      </View>

      <View style={styles.content}>
        <Text style={styles.textStyle3}>                This is my favorite </Text>
        <Text style={styles.myName}>GitHub Repos</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.textStyle3}> </Text>
      </View>

      <View style={styles.labelContainer2}>
        <Text style={styles.labelText1}>Car-Game</Text>
        <Text style={styles.labelText2}>C#/Engineering</Text>
      </View>
  
      
      <View style={styles.labelContainer}>
        <Text style={styles.labelText1}>Image-Analysis</Text>
        <Text style={styles.labelText2}>Python/ML</Text>
      </View>

      <View style={styles.labelContainer2}>
        <Text style={styles.labelText1}>BezierSeg-Curves</Text>
        <Text style={styles.labelText2}>Python/ML</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText1}>Audio-Stories</Text>
        <Text style={styles.labelText2}>Java/Android</Text>
      </View>

      <View style={styles.labelContainer2}>
        <Text style={styles.labelText1}>Personal-Assistant</Text>
        <Text style={styles.labelText2}>C#/Engineering</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText1}>GunSimulator</Text>
        <Text style={styles.labelText2}>C#/Engineering</Text>
      </View>

      <View style={styles.labelContainer2}>
        <Text style={styles.labelText1}>A-Star</Text>
        <Text style={styles.labelText2}>Python</Text>
      </View>

      <View style={styles.labelContainer}>
        <Text style={styles.labelText1}>Tic-Tac-Toe</Text>
        <Text style={styles.labelText2}>Java/Android</Text>
      </View>

      <View style={styles.labelContainer2}>
        <Text style={styles.labelText1}>Personal-Assistant-</Text>
        <Text style={styles.labelText2}>C#/Engineering</Text>
      </View>
  
     
      <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
          <TouchableOpacity >
              <Text style={styles.textBar}>Portfolio</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToScreen1}>
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
    fontSize: 15,
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
    marginLeft: 10,

  },
  labelText1: {
    fontSize: 16,
    color: 'white',
    marginRight: 10,
    width: 190,
    
  },
 labelText2: {
  fontSize: 16,
  color: 'white',
  textAlign: 'left',
   
},

  labelContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: '#132A24',
    marginLeft: 10,
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

export default Screen2;
