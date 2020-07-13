import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = ( props ) => {

  const _goBack = () => props.navigation.goBack();

  return (
    <Appbar.Header>
      {
        props.backBtn &&
        <Appbar.BackAction onPress={_goBack} />
      }
      <Appbar.Content title={props.title}/>
    </Appbar.Header>
  );
};

export default Header;