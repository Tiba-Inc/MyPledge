import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Success from '~/assets/svgs/success';
import { router, Stack } from 'expo-router';
import { Button } from '~/components/Button';
import IOSToggle from '~/components/Toggle';
import Toggle from '~/components/Toggle';

export default function AccountCreated() {
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleToggleSubscription = () => {
    setIsSubscribed((prev) => !prev);
  };
  return (
    <View className="flex-1">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Content Section */}
      <View className="flex-1">
        <View className="mt-72 items-center">
          <Success />
        </View>
      </View>

      <View className="mx-4">
        <Text className="text-ct mt-8 text-center">Account successfully{'\n'} created!</Text>
        <View className="mx-4 mt-4 flex-row items-center justify-between">
          <Text className="text-reg text-[#171D1E]">
            I agree to receive banking and financial{'\n'}tips and updates from Uganda Institute
            {'\n'}of Banking and Financial Services and{'\n'}its partners.
          </Text>
          <Toggle
            isOn={isSubscribed}
            onToggle={handleToggleSubscription}
            onColor="#8A4A65"
            offColor="#E9E9EA"
          />
        </View>
      </View>

      {/* Button Section */}
      <View className="mx-4 mb-8 mt-10">
        <Button title="Done" onPress={() => router.push('/auth/passkey')} />
      </View>
    </View>
  );
}
