import {StatusBar, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  detailImageContainer: {
    padding: 10
  },
  detailImage: {
    width: '100%',
    height: '80%'
  },
  titleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  userNameText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    paddingHorizontal: 10,
    flex: 1,
    flexWrap: 'wrap'
  },
  numberText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 16
  },
  userContainer: {
    paddingBottom: 10,
    flexDirection: 'row'
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  detailsContainer: {
    paddingVertical: 10
  }
});

export default styles;