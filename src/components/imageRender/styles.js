import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
    width: '25%'
  },
  imageContainer: {
    width: '100%',
    height: 80
  },
  image: {
    width: '100%',
    height: '100%'
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  userNameText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 5,
    flex: 1,
    flexWrap: 'wrap',
  },
  numberText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 16
  },
  userContainer: {
    flexDirection: 'row',
    paddingBottom: 5
  },
  avatar: {
    width: 25,
    height: 25,
    borderRadius: 13
  }
});

export default styles;