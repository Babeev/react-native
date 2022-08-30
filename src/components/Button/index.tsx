import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  backgroundColor: string;
  color: string;
  text: string;
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 8,
  },
});

export const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  color,
  text,
}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]}>
      <Text style={[{ color }]}>{text}</Text>
    </TouchableOpacity>
  );
};
