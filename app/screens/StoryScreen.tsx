import React, {useEffect} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import {Card, Text} from 'react-native-paper';
import {View, Button, StyleSheet} from 'react-native';

import {useQuery} from '@apollo/client';
import CardView from '../component/ThemeView';
import TouchableSVG from '../component/TouchableSVG';
import {getStoryByThemeId} from '../graphql/Queries';
import {RootObject} from '../types/tpyes';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {params} = route;
  let id = null;
  if (params) {
    id = params.id;
  }

  const query = getStoryByThemeId(id);

  const {loading, data, error, refetch} = useQuery<RootObject>(query);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  return (
    <View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          {error ? (
            <Text>Error</Text>
          ) : (
            <FlatList
              data={data?.stories.results}
              renderItem={({item}) => (
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
              )}
            />
          )}
        </View>
      )}
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
export default StoryScreen;
