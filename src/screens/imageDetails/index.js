import React from 'react';
import { View, Image, Text } from 'react-native';
import Styles from './styles';
import Header from './../../components/header'

export default function ImageDetails ({route, navigation}) {

  /*Get image details from params*/
  const { imageDetail } = route.params;

  return (
    <View>
      <Header backBtn="Gallery" title="Details" navigation={navigation}/>
      <View  style={Styles.detailImageContainer}>
        <View style={Styles.userContainer}>
          <Image style={Styles.avatar} source={{uri: imageDetail.userDetails.avatar}}/>
          <Text style={Styles.userNameText}>
            {imageDetail.userDetails.name}
          </Text>
        </View>
        <Image style={Styles.detailImage} source={imageDetail.url}/>

        <View style={Styles.detailsContainer}>
          <Text style={Styles.titleText}>Likes: <Text style={Styles.numberText}>{imageDetail.likes}</Text></Text>
          <Text style={Styles.titleText}>Comments: <Text style={Styles.numberText}> {imageDetail.comments}</Text></Text>
        </View>
      </View>
    </View>
  )
}