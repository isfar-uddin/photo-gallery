import React from 'react';
import {StatusBar, FlatList, StyleSheet, View } from 'react-native';
import Images from './../../objects/images';
import ImageRender from './imageRender';
import Styles from './styles';


function GalleryView() {
  return(
    <View style={Styles.container}>
      <FlatList
        data={Images}
        renderItem={ImageRender}
        numColumns = {4}
      />
    </View>
  )
}

export default GalleryView;