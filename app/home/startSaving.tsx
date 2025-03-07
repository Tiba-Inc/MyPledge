import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import Done from '../../assets/svgs/done';

type Props = {};

const StartSaving = (props: Props) => {
  return (
    <View className="mx-4 flex-1 justify-between">
      <Stack.Screen options={{ headerTitle: '' }} />
      <View className="items-center "></View>
      <View className="mb-12 items-center">
        <View className="items-center ">
          <Done />
        </View>
        <Text className="text-hero mt-10 text-center">You are ready to {'\n'}start saving!</Text>
        <Text className="text-cd mt-5 text-center">
          You are set too save (amount) a month in {'\n'}order to reach your goal of (goal) by
          (date).
        </Text>
        <Button
          className="mt-10 w-full"
          title="Check overviewl"
          // onPress={() => router.push('/home/saveFor')}
        />
      </View>
    </View>
  );
};

export default StartSaving;
