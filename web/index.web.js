import { AppRegistry } from 'react-native';
import { App } from '../src/components/App';

AppRegistry.registerComponent('Teacher', () => App);
AppRegistry.runApplication('Teacher', {
  initialProps: {},
  rootTag: document.getElementById('root'),
});
