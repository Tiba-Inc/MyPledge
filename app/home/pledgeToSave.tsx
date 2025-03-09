import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import Calculator from '~/assets/svgs/calculator';

type Props = {};

const PledgeToSave = (props: Props) => {
  return (
    <View className="mx-4 flex-1 justify-between">
      <Stack.Screen options={{ headerTitle: '' }} />
      <View className="items-center "></View>
      <View className="mb-12 items-center">
        <View className="items-center ">
          <Calculator />
        </View>
        <Text className="text-hero mt-10 text-center">Pledge to save</Text>
        <Text className="text-cd mt-5 text-center">
          Reach your financial milestones with our {'\n'}pledge-setting tool
        </Text>
        <Button
          className="mt-10 w-full"
          title="Take pledge"
          onPress={() => router.push('/home/pledgeName')}
        />
      </View>
    </View>
  );
};

export default PledgeToSave;
