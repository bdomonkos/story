import * as React from 'react';
import {BaseNavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ThemeScreen from '../screens/ThemeScreen';
import StoryScreen from '../screens/StoryScreen';
import CardScreen from '../screens/CardScreen';
import HeaderRight from '../component/HeaderRight';
import BookMarkScreen from '../screens/BookmarkScreen';


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const RootNavigation = () => {
  const bookMarkStack = () => {
    return (
      <Stack.Navigator initialRouteName="bookmarkScreen">
        <Stack.Screen
          name="cardScreen"
          component={CardScreen}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen name="bookmarkScreen" component={BookMarkScreen} />
      </Stack.Navigator>
    );
  };

  const storiesStack = () => {
    return (
      <Stack.Navigator initialRouteName="storyScreen">
        <Stack.Screen
          name="cardScreen"
          component={CardScreen}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="storyScreen"
          component={StoryScreen}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
      </Stack.Navigator>
    );
  };

  const mainStack = () => {
    return (
      <Stack.Navigator initialRouteName="themeScreen">
        <Stack.Screen
          name="themeScreen"
          component={ThemeScreen}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="storyScreen"
          component={StoryScreen}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen
          name="cardScreen"
          component={CardScreen}
          options={{
            headerRight: () => <HeaderRight />,
          }}
        />
        <Stack.Screen name="bookmarkScreen" component={BookMarkScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <BaseNavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name="Themes" component={mainStack} />
        <Tabs.Screen name="BookMark" component={bookMarkStack} />
        <Tabs.Screen name="Stories" component={storiesStack} />
      </Tabs.Navigator>
    </BaseNavigationContainer>
  );
};
export default RootNavigation;
