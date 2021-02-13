// eslint-disable-next-line @typescript-eslint/no-use-before-define
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';
import {Text, Card} from 'react-native-paper';
import {StyleSheet, View, Dimensions} from 'react-native';

import {ChartStoryView} from '../component/ChartStoryView';
import CardView from '../component/ThemeView';

const {width} = Dimensions.get('window');

const CardScreen = () => {
  const route = useRoute();
  const {params} = route;
  const {story} = params;

  return (
    <ScrollView
      style={styles.container}
      // pagingEnabled={true}
      horizontal
      decelerationRate={0}
      snapToInterval={width - 60}
      snapToAlignment="center"
      contentInset={{
        top: 0,
        left: 30,
        bottom: 0,
        right: 30,
      }}>
      {story.cards.map((item) => {
        return (
          <View style={styles.view}>
            <CardView height={400}>
              <Card.Title
                title={
                  item.headline || item.label || item.takeaway || item.body
                }
                subtitle={`Card type:${item.cardType}`}
              />
              {item.cardType === 'chart' ? (
                <ChartStoryView card={item} />
              ) : (
                <Text>{item.body || item.takeaway || item.description}</Text>
              )}
            </CardView>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  view: {
    marginTop: 100,
    backgroundColor: 'white',
    width: width - 80,
    margin: 10,
    height: 400,
    borderRadius: 10,
    // paddingHorizontal : 30
  },
  view2: {
    marginTop: 100,
    backgroundColor: 'red',
    width: width - 80,
    margin: 10,
    height: 200,
    borderRadius: 10,
    // paddingHorizontal : 30
  },
});
export default CardScreen;
