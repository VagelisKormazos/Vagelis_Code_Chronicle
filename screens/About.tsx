// screens/Screen1.tsx
import * as React from 'react';
import { View,  StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text, Image, TouchableOpacity, Linking, Pressable } from 'react-native';

interface Screen1Props {
  navigation: StackNavigationProp<any>;
}

const Screen3: React.FC<Screen1Props> = ({ navigation }) => {
  const goToScreen2 = () => {
    navigation.navigate('ScreenPortofolio');
  };
  const goToScreen1 = () => {
    navigation.navigate('ScreenHome');
  };

  const openCvPdf = () => {
    const pdfUrl = 'https://example.com/path/to/Resume_Kormazos_Evangelos.pdf';

    Linking.openURL(pdfUrl)
        .catch((err) => console.error('Error opening PDF:', err));
};

  

  return (
  <View style={styles.container}>
   
    <View style={styles.content}>
      <Text style={styles.image}  onPress={openCvPdf}>CV</Text>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>          Vagelis</Text>
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

    <Text style={styles.header}></Text> 
      <Text style={styles.paragraph}>
        This application was created by Vagelis Kormazos.
        It aims to provide users with valuable information about his skills and projects.
        For more information, you can visit his LinkedIn, GitHub, and Instagram profiles.
      </Text>
      {/* <Text style={styles.paragraph}>
      My interests include photography, traveling, jazz guitar, and tennis. I enjoy
       exploring new places with my camera, immersing myself in various cultures, and 
       capturing my experiences through the lens. Music is also a significant part of my
        life; I love playing jazz guitar and exploring the aesthetics of this genre of music.
         Additionally, tennis keeps me active and rejuvenated, serving as a form of exercise
         and relaxation simultaneously. These interests enrich my life and keep me active and
          enthusiastic.
      </Text> */}


    {/* <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
        <Image source={require('../icons/btn_linkedin.png')} style={styles.image2} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openGitHub}>
        <Image source={require('../icons/btn_github.png')} style={styles.image2} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={openInstagram}>
        <Image source={require('../icons/btn_instagram.png')} style={styles.image2} />
      </TouchableOpacity>
    </View> */}

    <View style={styles.NavContainer}>
    <View style={styles.NavBar}>
        <TouchableOpacity onPress={goToScreen2}>
            <Text style={styles.textBar}>Portfolio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToScreen1}>
            <Text style={styles.textBar}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity >
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
header: {
  fontSize: 24,
  color: '#64887C',
  fontWeight: 'bold',
  marginBottom: 10,
},
paragraph: {
  fontSize: 16,
  color: 'white',
  lineHeight: 24,
  marginLeft: 10,
  marginEnd:5
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
  textAlign: 'center',
  width: 170,
  height: 170,
  borderRadius: 10,
  resizeMode: 'cover',
  color: '#132A24',
  fontSize: 90,
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

export default Screen3;
