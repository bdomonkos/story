import React from 'react';
import {Text} from 'react-native-paper';
import {View, Image, StyleSheet} from 'react-native';
import {Card} from '../types/tpyes';

// eslint-disable-next-line import/prefer-default-export
export const ChartStoryView = ({card}: Card) => {
  return (
    <View style={styles.containerView}>
      <Image
        style={styles.imageView}
        source={{
          uri: card.image,
        }}
      />
      <Text>{card.imageCaption}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    alignItems: 'center',
  },
  imageView: {
    width: 300,
    height: 100,
  },
});
