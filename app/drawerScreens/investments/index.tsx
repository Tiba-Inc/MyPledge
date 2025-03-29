import { View, Text } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {};

const Investments = (props: Props) => {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: 'Investments',
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => router.replace('/(drawer)/(tabs)/homeScreen')}
              style={{ marginLeft: -5 }} // Adjust this value as needed
            />
          ),
        }}
      />
      <Text>Investments</Text>
    </View>
  );
};

export default Investments;
