import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Modal } from '../../components/Modal';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#f7f9ff',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
  },
});

export const Auth = () => {
  return (
    <SafeAreaView style={styles.page}>
      <Modal title="Login to the system">
        <Input placeholder="Login" marginTop={32} marginBottom={16} />

        <Input placeholder="Password" marginBottom={24} />

        <Button backgroundColor="blue" text="Перейти в CRM" color="#fff" />
      </Modal>
    </SafeAreaView>
  );
};
