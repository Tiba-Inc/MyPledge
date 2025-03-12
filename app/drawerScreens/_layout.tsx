import { View, Text } from 'react-native';
import React from 'react';
import { router, Stack, useNavigation } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';

export default function _layout() {
  const navigation = useNavigation(); // Use the useNavigation hook
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerLeft: (props) => (
          <HeaderBackButton
            {...props}
            onPress={() => router.replace('/(drawer)/(tabs)/homeScreen')}
            style={styles.backButton} // Apply custom styles
          />
        ),
        headerTitleStyle: { fontWeight: 400, fontSize:22 },
        headerStyle: {
          backgroundColor: '#fff', // Customize header background color,
        },
      }}
    />
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: -4, // Adjust this value to reduce the left margin
  },
});
