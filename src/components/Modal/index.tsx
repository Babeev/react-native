import React, { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ModalProps {
  title: string;
  children: ReactNode;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 48,
    width: '70%',
    maxWidth: 472,
    alignSelf: 'center',
    borderRadius: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});

export const Modal: React.FC<ModalProps> = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {children}
    </View>
  );
};
