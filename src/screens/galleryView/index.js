import React from 'react';
import { FlatList } from 'react-native';
import Images from './../../objects/images';
import ImageRender from '../../components/imageRender';


export default function GalleryView ({ navigation }) {
  return (
    <FlatList
      data={Images}
      renderItem={(item,index) => ImageRender(item,navigation, 'ImageDetails')}
      numColumns = {4}
    />
  )
}