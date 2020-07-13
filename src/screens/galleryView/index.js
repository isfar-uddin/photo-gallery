import React from 'react';
import { View, FlatList } from 'react-native';
import Images from '../../dummyData';
import ImageRender from '../../components/imageRender';
import Header from './../../components/header';


export default function GalleryView ({ navigation }) {
  return (
    <View>
      <Header title="Gallery"/>
      <FlatList
        data={Images}
        renderItem={(item,index) => ImageRender(item, navigation, 'ImageDetails')}
        numColumns = {4}
      />
    </View>
  )
}