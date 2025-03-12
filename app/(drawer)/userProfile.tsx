import { Stack, useNavigation, useRouter } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import User from '~/assets/svgs/user';
import React, { useState } from 'react';
import { Button } from '~/components/Button';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Pencil from '~/assets/svgs/pencil';
import Settings from '~/assets/svgs/settings';
import RightArrow from '~/assets/svgs/rightArrow';

type Props = {};

const UserProfile = (props: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      number: '',
      email: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { number: string; email: string }) => {
    router.push('/carousel');
    console.log(data);
  };

  const navigation = useNavigation(); // Use the useNavigation hook
  const router = useRouter(); // Use the useNavigation hook
  return (
    <View className="mx-4">
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: (props) => (
            <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
          ),

          headerTitle: () => <Text className="text-ct font-normal">User profile</Text>,
          headerStyle: {
            backgroundColor: '#fff', // Customize header background color
          },
        }}
      />
      <View className="">
        <View className="mt-5 items-center justify-center gap-4">
          <View className="rounded-full bg-[#FFD9E5] p-3">
            <User height={51.26414489746094} width={56.36817932128906} color="#514347" />
          </View>
          <Text className="text-ct font-bold">Ssempijja Charles</Text>
        </View>
      </View>

      {/* Password Field */}
      <View className="mb-4 mt-3">
        <Controller
          control={control}
          rules={{
            required: 'Number is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Number</Text>
              <View className="flex-row items-center py-2">
                <TextInput
                  placeholder="Phone number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="phone-pad"
                  className="flex-1"
                />
                <TouchableOpacity className="mr-8">
                  <Pencil />
                </TouchableOpacity>
              </View>
            </View>
          )}
          name="number"
        />
        {errors.number && <Text className="text-red-700">{errors.number.message}</Text>}
      </View>
      {/* Password Field */}
      <View className="">
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Email</Text>
              <View className="flex-row items-center py-2">
                <TextInput
                  placeholder="examples@ex.com"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  value={value}
                  className="flex-1"
                />
                <TouchableOpacity className="mr-8">
                  <Pencil />
                </TouchableOpacity>
              </View>
            </View>
          )}
          name="email"
        />
        {errors.email && <Text className="text-red-700">{errors.email.message}</Text>}
      </View>

      <TouchableOpacity
        onPress={() => router.push('/drawerScreens/settings')}
        className="mt-9 flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          <Settings height={20} width={20} />
          <Text className="text-st">Settings</Text>
        </View>
        <View className="mr-10">
          <RightArrow />
        </View>
      </TouchableOpacity>

      {/* Log In Button */}
      <Button className={`mt-14 bg-[#BA1A1A]`} title="Log out" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default UserProfile;
