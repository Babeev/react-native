/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';
import { App } from '../src/components/App';

describe('App', () => {
  it('renders correctly', () => {
    render(<App />);
  });
});
