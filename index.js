import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import EntryPoint from './src/entryPoint';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => EntryPoint);
