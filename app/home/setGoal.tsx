import { View, Text } from 'react-native';
import React from 'react';
import Target from '~/assets/svgs/target';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';

type Props = {};

const SetGoal = (props: Props) => {
  return (
    <>
      <View className="mx-4 flex-1 justify-between">
        <Stack.Screen options={{ headerTitle: '' }} />
        <View className="items-center "></View>
        <View className="mb-12 items-center">
          <View className="items-center ">
            <Target />
          </View>
          <Text className="text-hero mt-10">Set a saving goal</Text>
          <Text className="text-cd mt-5 text-center">
            Embark on your financial journey by setting {'\n'} clear goals and taking action.
          </Text>
          <Button
            className="mt-10 w-full"
            title="Set goal"
            onPress={() => router.push('/home/saveFor')}
          />
        </View>
      </View>
    </>
  );
};

export default SetGoal;
