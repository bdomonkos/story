import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Card, Text} from 'react-native-paper';
import {Button, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import CardView from '../component/ThemeView';
import {getThemes} from '../graphql/Queries';
import {Themes, RootObject} from '../types/tpyes';

const ThemeScreen = () => {
  const navigation = useNavigation();
  // const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

  const {loading, data, error} = useQuery<RootObject>(getThemes);
  const route = useRoute();

  // apolloClient.query({ query }).then(response => {
  //   console.log(response.data.themes);
  // });

  return (
    <View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <View>
          {error ? (
            <Text>Error during fetches the themes</Text>
          ) : (
            <FlatList
              data={data?.themes}
              renderItem={({item}) => {
                return (
                  <CardView
                    onPress={() => {
                      navigation.navigate('storyScreen', {
                        id: item.id,
                      });
                    }}>
                    <Card.Title
                      title={item.title}
                      subtitle={`Stories: ${item.storyCount}`}
                    />
                    <View style={{alignItems: 'flex-end'}}>
                      <Button
                        onPress={() => {
                         
                          navigation.navigate('storyScreen', {
                            id: item.id,
                          });
                        }}
                        title="Check Stories"
                      />
                    </View>
                  </CardView>
                );
              }}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default ThemeScreen;
