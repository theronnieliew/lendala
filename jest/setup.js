import 'react-native-gesture-handler/jestSetup';
import {NativeModules} from 'react-native';

// Mock any modules that are not compatible with Jest
NativeModules.RNCAsyncStorage = {getItem: jest.fn()};

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
