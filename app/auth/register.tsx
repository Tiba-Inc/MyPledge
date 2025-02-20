import React from 'react';
import { router, Stack } from 'expo-router';
import { Text, View, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      number: '',
    },
  });

  const onSubmit = (data) => {
    router.push('/auth/registerpwd');
    console.log(data);
  };

  return (
    <View className="mx-4 mt-7">
      <Stack.Screen options={{ headerTitle: 'Sign up', headerTitleAlign: 'center' }} />

      {/* Name Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Name is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Name</Text>
              <TextInput
                placeholder="Full name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b"
              />
            </View>
          )}
          name="name"
        />
        {errors.name && <Text className="text-red-700">{errors.name.message}</Text>}
      </View>

      {/* Number Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Number is required',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Invalid number',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Number</Text>
              <TextInput
                placeholder="Phone number"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b"
                keyboardType="phone-pad"
              />
            </View>
          )}
          name="number"
        />
        {errors.number && <Text className=" text-red-700">{errors.number.message}</Text>}
      </View>

      {/* Email Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Email</Text>
              <TextInput
                placeholder="Email address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b"
                keyboardType="email-address"
              />
            </View>
          )}
          name="email"
        />
        {errors.email && <Text className="text-red-700">{errors.email.message}</Text>}
      </View>

      {/* Submit Button */}
      <Button className="mt-14" title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
