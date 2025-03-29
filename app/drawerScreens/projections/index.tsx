import { View, Text } from 'react-native';
import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {};

const Projections = (props: Props) => {
  const router = useRouter();
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: 'Projections',
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => router.replace('/(drawer)/(tabs)/homeScreen')}
              style={{ marginLeft: -5 }} // Adjust this value as needed
            />
          ),
        }}
      />
      <Text>Projections</Text>
    </View>
  );
};

export default Projections;
