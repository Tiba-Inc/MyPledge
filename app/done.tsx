import { View, Text } from 'react-native';
import React from 'react';
import Done from '~/assets/svgs/done';
import { router, Stack } from 'expo-router';
import { Button } from '~/components/Button';
export default function AllDone() {
  return (
    <View className="mx-4 flex-1 items-center justify-between">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 items-center">
        <View className="mb-10 mt-72">
          <Done />
        </View>
        <Text className="text-big">All done</Text>
        <Text className="text-cd mt-4">You are ready to start your journey!</Text>
      </View>
      <Button onPress={() => router.push('./sponsors')} className="mb-14 w-full" title="Done" />
    </View>
  );
}
