/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import TEMP1 from './Source/TEMP1';
import Page2 from './Source/Page2';
import Page1 from './Source/Page1';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Page1);
