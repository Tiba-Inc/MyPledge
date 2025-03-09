import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import Done from '../../assets/svgs/done';

type Props = {};

const PledgeTaken = (props: Props) => {
  return (
    <View className="mx-4 flex-1 justify-between">
      <Stack.Screen options={{ headerTitle: '' }} />
      <View className="items-center "></View>
      <View className="mb-12 items-center">
        <View className="items-center ">
          <Done />
        </View>
        <Text className="text-hero mt-10 text-center">You have taken {'\n'}your pledge</Text>
        <Text className="text-cd mt-5 text-center">
          Stay committed to your goals and earn your {'\n'}certificate. Find your pledges under
          "Savings
          {'\n'}goals."
        </Text>
        <Button
          className="mt-10 w-full"
          title="Go to homepage"
          onPress={() => router.push('/(drawer)/(tabs)/homeScreen')}
        />
      </View>
    </View>
  );
};

export default PledgeTaken;
