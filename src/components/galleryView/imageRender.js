import React from 'react';
import { View, Image } from 'react-native';
import Styles from './styles';

function ImageRender({ item }) {
  return (
    <View style={Styles.imageContainer}>
      <Image style={Styles.stretch} source={item.url}/>
    </View>
  )
}

export default ImageRender;