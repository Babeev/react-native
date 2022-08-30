import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface InputProps {
  placeholder: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#CED8EB',
    borderRadius: 8,
    padding: 10,
  },
});

export const Input: React.FC<InputProps> = ({
  placeholder,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[
        styles.input,
        { marginTop, marginRight, marginBottom, marginLeft },
      ]}
    />
  );
};
