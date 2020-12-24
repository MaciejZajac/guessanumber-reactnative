import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import colors from '../constants/colors';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game is over</BodyText>
      <View style={styles.resultContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode='cover'
          />
        </View>
      </View>

      <BodyText>
        Number of rounds:
        <Text style={styles.highlight}>{props.roundsNumber}</Text>
      </BodyText>
      <BodyText>
        Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart}>New Game</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultContainer: {
    marginVertical: 30,
  },
  highlight: {
    color: colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
