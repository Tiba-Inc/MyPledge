// app.config.js

import { ExpoConfig } from '@expo/config';

// Define environment variables
const APP_VARIANT = process.env.APP_VARIANT || 'production'; // Fallback to 'production' if undefined
const IS_DEV = APP_VARIANT === 'development';
const IS_PREVIEW = APP_VARIANT === 'preview';
const IS_PRODUCTION = process.env.NODE_ENV === 'production'; // Ensure NODE_ENV is set properly

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.asktiba.MyPledge.dev';
  }
  if (IS_PREVIEW) {
    return 'com.asktiba.MyPledge.preview';
  }
  return 'com.asktiba.MyPledge.production';
};
const getAppName = () => {
  if (IS_DEV) {
    return 'MyPledge (Dev)';
  }
  if (IS_PREVIEW) {
    return 'MyPledge';
  }
  return 'MyPledge 1.0.0';
};

export default ({ config }) => ({
  expo: {
    name: getAppName(),
    slug: 'MyPledge',
    version: '1.0.0',
    scheme: 'MyPledge',
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-dev-launcher',
        {
          launchMode: 'most-recent',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
      tsconfigPaths: true,
    },
    orientation: 'portrait',
    icon: './assets/images/Light.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/images/splash-icon-light.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: getUniqueIdentifier(),
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '3e2c96dc-b1d5-4cee-94da-23dff34f6362',
      },
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    updates: {
      url: 'https://u.expo.dev/3e2c96dc-b1d5-4cee-94da-23dff34f6362',
    },
  },
});
