import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet} from 'react-native';
import {Badge} from 'react-native-elements';
import {AppContext} from '../context/context';

const HeaderRight = () => {
  const {state} = React.useContext(AppContext);

  return (
    <View>
      <Icon name="book" size={30} color="#900" />

      <Badge
        status="error"
        containerStyle={styles.containerView}
        value={state.stories.length}
        textStyle={styles.badgeTextStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  badgeTextStyle: {
    fontSize: 10,
  },
});

export default HeaderRight;
