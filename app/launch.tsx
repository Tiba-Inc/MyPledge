import { View, Text } from 'react-native';
import React from 'react';
import Logo from '~/assets/svgs/logo';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function Launch() {
  return (
    <View className="flex-1 justify-between">
      <Stack.Screen options={{ animation: 'fade_from_bottom' }} />
      <View className="mt-64 items-center">
        <Logo width={250} height={250} />
        <Text className="text-hero mb-6 mt-2 text-center">Welcome to {'\n'}Mypledge</Text>
        <Text className="text-reg text-center">
          Effortlessly manage your finances with our {'\n'}practical tool, designed to help you
          implement the {'\n'}50/30/20 rule for lasting financial wellness.
        </Text>
      </View>
      <Animated.View
        className=""
        entering={FadeInDown.duration(1000).delay(300).springify().damping(12)}>
        <View className="mx-4 mb-4 flex-row justify-around gap-3">
          <Button
            className="text-btn w-[48%]"
            title="Log in"
            onPress={() => router.push('/auth/login')}
          />
          <Button
            className="text-btn w-[48%] text-green-600"
            title="Register"
            onPress={() => router.push('/auth/register')}
          />
        </View>
        <Button
          onPress={() => router.push('/carousel')}
          className="mx-4 mb-8 bg-transparent"
          textColor="#8A4A65"
          title="Continue as guest"
        />
      </Animated.View>
    </View>
  );
}
