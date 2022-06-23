import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './src/App';

import './src/services/i18n/i18n';

AppRegistry.registerComponent(appName, () => App);
