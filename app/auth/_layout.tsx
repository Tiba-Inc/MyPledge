import { View, Text } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return <Stack screenOptions={{ animation: 'slide_from_right' }}></Stack>;
}
