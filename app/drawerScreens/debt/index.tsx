import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import BriefCase from '~/assets/svgs/briefCase';

type Props = {};

const Debt = (props: Props) => {
  return (
    <View className="mx-4 flex-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <View className="items-center flex-1 mt-48">
        <View className="items-center">
          <BriefCase />
        </View>
        <Text className="text-hero mt-10 text-center">Track your loans</Text>
        <Text className="text-cd mt-5 text-center">
          Keep tabs on all your loans, whether you're {'\n'}lending or borrowing.
        </Text>
        <Button
          className="mt-10 w-full"
          title="Start tracking my loans now"
          onPress={() => router.push('/drawerScreens/debt/debtTabs')}
        />
      </View>
    </View>
  );
};

export default Debt;
