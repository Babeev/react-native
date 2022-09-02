import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
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
    <SafeAreaView style={styles.page}>
      <Modal title="Login to the system">
        <Input
          value={email}
          setValue={setEmail}
          placeholder="Email"
          marginTop={32}
          marginBottom={16}
        />

        <Input
          value={password}
          setValue={setPassword}
          placeholder="Password"
          marginBottom={24}
        />

        <Button
          backgroundColor="blue"
          text="Перейти в CRM"
          color="#fff"
          onClick={() => authorize(email, password)}
        />
      </Modal>
    </SafeAreaView>
  );
};
