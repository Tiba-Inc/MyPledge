import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import Logo from '~/assets/svgs/logo';
import Sponsor from '~/assets/svgs/sponsor';
import { router } from 'expo-router';

export default function Rootindex() {
  useEffect(() => {
    // Set a timer to navigate after 3 seconds
    const timer = setTimeout(() => {
      router.push('/launch');
    }, 3000);

    // Clean up the timer if the component unmounts
    // return () => clearTimeout(timer);
  }, []);
  return (
    <View className="flex-1 justify-between ">
      <View className="mt-72 items-center">
        <Logo width={250} height={250} />
      </View>
      <View className="mb-8 items-center">
        <Text className="text">By</Text>
        <Sponsor />
      </View>
    </View>
  );
}
