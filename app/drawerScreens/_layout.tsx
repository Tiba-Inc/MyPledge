import { View, Text } from 'react-native';
import React from 'react';
import { router, Stack, useNavigation } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import { StyleSheet } from 'react-native';

export default function _layout() {
  const navigation = useNavigation();

  return (
    <Stack
      screenOptions={({ route }) => ({
        animation: 'slide_from_right',
        headerShown: true,
        headerTitleStyle: { fontWeight: 400, fontSize: 22 },
        headerStyle: {
          backgroundColor: '#fff',
        },
      })}
    />
  );
}

const styles = StyleSheet.create({
  backButton: {
    marginLeft: -5, // Adjust this value to reduce the left margin
  },
});
