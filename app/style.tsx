import {StyleSheet} from 'react-native';

const styles = {
  title: {
    fontSize: 20,
    textAlign: 'center',
    padding: 20,
  },
  description: {
    fontSize: 12,
    padding: 20,
  },
  href: {
    fontSize: 15,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
};
export default StyleSheet.create(styles);
