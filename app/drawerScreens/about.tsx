import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import Open from '~/assets/svgs/open';

export default function About() {
  return (
    <View className="mx-4 mt-9">
      <Stack.Screen options={{ headerTitle: 'About' }} />
      <View className="">
        <Text className="text-st">Version</Text>
        <Text className="text-secondary-foreground">1.0</Text>
      </View>
      <View className="mt-6 gap-6">
        <TouchableOpacity className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Text className="text-st">Third party notices</Text>
          </View>
          <View className="mr-8">
            <Open />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Text className="text-st">Credits & acknowledgements</Text>
          </View>
          <View className="mr-8">
            <Open />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
