import { View, Text } from 'react-native';
import React from 'react';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import BriefCase from '~/assets/svgs/briefCase';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {};

const Debt = (props: Props) => {
  return (
    <View className="mx-4 flex-1">
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => router.replace('/(drawer)/(tabs)/homeScreen')}
              style={{ marginLeft: -5 }} // Adjust this value as needed
            />
          ),
        }}
      />
      <View className="mt-48 flex-1 items-center">
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
