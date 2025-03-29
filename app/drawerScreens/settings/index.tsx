import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Security from '~/assets/svgs/security';
import RightArrow from '~/assets/svgs/rightArrow';
import Info from '~/assets/svgs/info';
import Doc from '~/assets/svgs/doc';
import Media from '~/assets/svgs/media';
import Help from '~/assets/svgs/help';
import AskHelp from '~/assets/svgs/askHelp';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {};

const Settings = (props: Props) => {
  const router = useRouter(); // Use the useNavigation hook
  return (
    <View className="mx-4">
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => router.replace('/(drawer)/(tabs)/homeScreen')}
              style={{ marginLeft: -5 }} // Adjust this value as needed
            />
          ),
          headerTitle: () => <Text className="text-ct font-normal">Settings</Text>,
          headerStyle: {
            backgroundColor: '#fff', // Customize header background color
          },
        }}
      />
      <View className="gap-3">
        <TouchableOpacity
          onPress={() => router.push('/drawerScreens/loginAndSecurity')}
          className="mt-9 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Security />
            <Text className="text-st">Login & security</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/drawerScreens/notifications')}
          className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Security />
            <Text className="text-st">Notifications</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-cd mt-7">Support</Text>
      <View className="mt-3 gap-3">
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <AskHelp />
            <Text className="text-st">Help center</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Media />
            <Text className="text-st">How the app works</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
      </View>
      <Text className="text-cd mt-7">Legal</Text>
      <View className="mt-3 gap-3">
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Doc />
            <Text className="text-st">Privacy policy</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Doc />
            <Text className="text-st">Terms of service</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Doc />
            <Text className="text-st">Software licenses</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/drawerScreens/about')}
          className="mt-3 flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Info />
            <Text className="text-st">About app</Text>
          </View>
          <View className="mr-8">
            <RightArrow />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
