import React from 'react';
import {Text, Image, View, TouchableHighlight } from 'react-native';
import Styles from "./styles";


export default function ImageRender({ item }, navigation, switchScreenName) {
  return (
    <View style={Styles.infoContainer}>
      {/*User name and his avatar*/}
      <View style={Styles.userContainer}>
        <Image style={Styles.avatar} source={{uri: item.userDetails.avatar}}/>
        <Text numberOfLines={1} style={Styles.userNameText}>
          {item.userDetails.name}
        </Text>
      </View>

      {/*image uploaded by user*/}
      <TouchableHighlight
        style={Styles.imageContainer}
        key={item.id}
        onPress={() => navigation.navigate(switchScreenName, {
          imageDetail: item
        })}>

        <Image style={Styles.image} source={item.url}/>
      </TouchableHighlight>
    </View>
  )
}