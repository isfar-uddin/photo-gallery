import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageContainer: {
    padding:10,
    width: 100,
    height: 100
  },
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  }
});

export default styles;