import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-paper';
import {FlatList} from 'react-native-gesture-handler';
import {View, Button, StyleSheet} from 'react-native';
import CardView from '../component/ThemeView';
import TouchableSVG from '../component/TouchableSVG';
import {AppContext} from '../context/context';

const BookMarkScreen = () => {
  const navigation = useNavigation();
  const {state} = React.useContext(AppContext);

  return (
    <View>
      <FlatList
        data={state.stories}
        renderItem={({item}) => {
          return (
            <CardView>
              <Card.Title
                title={item.title}
                subtitle={`cards: ${item.cardCount}`}
              />
              <View style={styles.containerView}>
                <TouchableSVG story={item} />
                <Button
                  onPress={() => {
                    navigation.navigate('cardScreen', {
                      story: item,
                    });
                  }}
                  title="Go to cards"
                />
              </View>
            </CardView>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BookMarkScreen;
