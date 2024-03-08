import React from 'react';
import { Text, Image, View, StyleSheet, TouchableOpacity, Linking, Pressable } from 'react-native';
import { useAppNavigation } from './useAppNavigation';



const Portfolio = () => {

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
          source={require('./me2.png')}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Hello, I'm Vagelis</Text>
          <Text style={styles.myName}>Kormazos</Text>
          <View style={styles.line}></View>
          <Text style={styles.textStyle4}>A Mathematician with</Text>
          <Text style={styles.textStyle5}> love in computer science</Text>
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Image source={require('./C.png')} style={styles.bottomBarImage} />
        <Image source={require('./java.png')} style={styles.bottomBarImage} />
        <Image source={require('./python.png')} style={styles.bottomBarImage} />
        <Image source={require('./react.png')} style={styles.bottomBarImage} />
        <Image source={require('./vb.png')} style={styles.bottomBarImage} />
      </View>
      
     

      <View style={styles.NavContainer}>
        <View style={styles.NavBar}>
          <Pressable onPress={() => console.log('Text changed to: Favourites')} style={styles.IconBehave} android_ripple={{borderless:true,radius:50}}>
            <Text style={styles.textBar}>Portfolio</Text>
          </Pressable>
          <Pressable onPress={() => console.log('Text changed to: Favourites')} style={styles.IconBehave} android_ripple={{borderless:true,radius:50}}>
            <Text style={styles.textBar}>Home</Text>
          </Pressable>
          <Pressable onPress={() => console.log('Text changed to: Favourites')} style={styles.IconBehave} android_ripple={{borderless:true,radius:50}}>
            <Text style={styles.textBar}>About</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

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
  width: '100%',
  justifyContent: 'space-evenly',
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

export default Portfolio;
