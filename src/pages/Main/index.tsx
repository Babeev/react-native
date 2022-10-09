import React from 'react';
import { Link } from '@react-navigation/native';
import { Text } from 'react-native';

export const Main = () => {
  return (
    <>
      <Text>Main page</Text>
      <Link to={{ screen: 'Auth' }}>Link to Auth page</Link>
    </>
  );
};
