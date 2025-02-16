import { View, Text } from 'react-native';
import React from 'react';
import Logo from '~/assets/svgs/logo';
import { Button } from '~/components/Button';
import { router } from 'expo-router';

export default function Launch() {
  return (
    <View className="flex-1 justify-between">
      <View className="mt-72 items-center">
        <Logo width={250} height={250} />
        <Text className="text-title mb-6 mt-2">Welcome to Mypledge</Text>
        <Text className="text mx-8 mb-8 text-center">
          Effortlessly manage your finances with our practical tool,{'\n'} designed to help you
          implement the 50/30/20 rule for{'\n'} lasting financial wellness.
        </Text>
      </View>
      <View className="">
        <View className="mx-4 mb-4 flex-row justify-around gap-3">
          <Button className="text-btn w-[48%]" title="Log in" />
          <Button className="text-btn w-[48%] text-green-600" title="Register" />
        </View>
        <Button
          onPress={() => router.push('/carousel')}
          className="mx-4 mb-8 bg-transparent"
          textColor="#8A4A65"
          title="Continue as guest"
        />
      </View>
    </View>
  );
}
