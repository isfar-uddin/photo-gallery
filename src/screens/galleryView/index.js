import React, {Component} from 'react';
import {Text, FlatList, Image, View, TouchableHighlight } from 'react-native';
import Images from './../../objects/images';
import Styles from './styles';

class GalleryView extends Component {
  constructor(props) {
    super(props);
  }

  imageRender = ({item}) => {
    return (
      <View style={Styles.infoContainer}>
        <View style={Styles.userContainer}>
          <Image style={Styles.avatar} source={{uri: item.userDetails.avatar}}/>
          <Text numberOfLines={1} style={Styles.userNameText}>
            {item.userDetails.name}
          </Text>
        </View>
        <TouchableHighlight
          style={Styles.imageContainer}
          key={item.id}
          onPress={() => this.props.navigation.navigate('Details', {
            imageDetail: item
          })}>

          <Image style={Styles.image} source={item.url}/>
        </TouchableHighlight>
      </View>
    )
  }

  render () {
    return (
      <View style={Styles.container}>
        <FlatList
          data={Images}
          renderItem={this.imageRender}
          numColumns = {3}
        />
      </View>
    )
  }
}

export default GalleryView;