import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import Open from '~/assets/svgs/open';
import Web from '~/assets/svgs/web';
import Caution from '~/assets/svgs/caution';
import Support from '~/assets/svgs/support';
import FeedBack from '~/assets/svgs/feedBack';

type Props = {};

const Help = (props: Props) => {
  const navigation = useNavigation(); // Use the useNavigation hook
  const router = useRouter(); // Use the useNavigation hook
  return (
    <View className="mx-4">
      <Stack.Screen
        options={{
          headerShown: true,

          headerTitle: () => <Text className="text-ct font-normal">Help center</Text>,
          headerStyle: {
            backgroundColor: '#fff', // Customize header background color
          },
        }}
      />
      <View className="mt-3 gap-3">
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Support />
            <Text className="text-st">Contact support</Text>
          </View>
          <View className="mr-8">
            <Open />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Caution />
            <Text className="text-st">Report a problem</Text>
          </View>
          <View className="mr-8">
            <Open />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <FeedBack />
            <Text className="text-st">Give us feedback</Text>
          </View>
          <View className="mr-8">
            <Open />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Web />
            <Text className="text-st">Visit our website</Text>
          </View>
          <View className="mr-8">
            <Open />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Help;
