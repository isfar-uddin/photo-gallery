import React from 'react';
import { View, FlatList } from 'react-native';
import {connect} from 'react-redux';
import ImageRender from '../../components/imageRender';
import Header from './../../components/header';
import {fetchImages} from "../../actions/imageActions";

function GalleryView (props) {
  /*Fetch images*/
  props.fetchImages();

  return (
    <View style={{flex:1}}>
      <Header title="Gallery"/>
      <FlatList
        data={props.images}
        renderItem={(item,index) => ImageRender(item, props.navigation, 'ImageDetails')}
        numColumns = {4}
      />
    </View>
  )
}

const mapStateToProps = state => {
  return ({
    images: state.data.images
  })
}

export default connect(mapStateToProps, { fetchImages })(GalleryView);