import { Link } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';
import { useAuthController } from './controller';

interface AuthProps {
  navigation: {
    navigate: (route: string) => void;
  };
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f7f9ff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
});

export const Auth = ({ navigation }: AuthProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { authorize } = useAuthController({ navigation });

  return (
    <>
      <Text>Auth page</Text>
      <Link to={{ screen: 'Main' }}>Link to Main page</Link>
    </>
  );
};
