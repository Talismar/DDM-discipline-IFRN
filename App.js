import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';

/* My Components */
import Exercise01 from './components/Exercise01';
import Exercise03 from './components/Exercise03';
import MyComponent from './components/MyComponent'

export default function App() {

  return (
    <View style={styles.container}>
      
      {/* EXERCISE 01 */}
      {/* <Exercise01 message={'Curso de ADS'} height_={100} backgroundColor_={'#FCF3D2'} backgroundBorder_={'#F6C324'}/> */}
      {/* <Exercise01 message={'Meu Componente'} height_={80} backgroundColor_={'#E4E6EB'} backgroundBorder_={'#AAB6C3'}/> */}
      {/* <Exercise01 message={'Meu Componente'} height_={80} backgroundColor_={'#E4E6EB'} backgroundBorder_={'#AAB6C3'}/> */}
      {/* <Exercise01 message={'Meu Componente'} height_={80} backgroundColor_={'#E4E6EB'} backgroundBorder_={'#AAB6C3'}/> */}
      
      {/* EXERCISE 02 */}
      {/* <Exercise01 message={'Meu Componente'} height_={80} backgroundColor_={'#E4E6EB'} backgroundBorder_={'#AAB6C3'}/> */}
      {/* <Exercise01 message={'Meu Componente'} height_={80} backgroundColor_={'#E4E6EB'} backgroundBorder_={'#AAB6C3'}/> */}
      {/* <Exercise01 message={'Meu Componente'} height_={80} backgroundColor_={'#E4E6EB'} backgroundBorder_={'#AAB6C3'}/> */}

      {/* EXERCISE 03 */}
      <Exercise03/>

      {/* <MyComponent photo={require("./assets/IMG_1153.png")}/> */}

      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  /* EXERCISE 01 */
  // container: {
  //   flex: 1,
  //   backgroundColor: '#FFF',
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },

  /* EXERCISE 02 */
  // container: {
  //   flex: 1,
  //   backgroundColor: '#FFF',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   marginTop: 50,
  //   marginBottom: 50
  // }

  /* EXERCISE 03 */
  container: {
    marginTop: 30
  }

});
