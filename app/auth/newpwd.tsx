import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';

export default function NewPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      password: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { password: string }) => {
    console.log('Open toast');
    console.log(data);
  };

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '', headerTitleAlign: 'center' }} />
      <Text className="text-ch mt-1">Enter new password</Text>
      {/* Phone Number Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Password is required',
            pattern: {
              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message:
                'Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mt-8">New password</Text>
              <TextInput
                placeholder="Enter new password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="visible-password"
                className="border-b border-b-[#C6C6C8] py-1"
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text className="text-red-700">{errors.password.message}</Text>}
      </View>
      <View className="mb-10 items-center gap-3 border-t border-t-[#D8DADD] pt-4">
        {/* Log In Button */}
        <Button
          className={`mt-9 w-full`}
          title="Submit"
          onPress={handleSubmit(onSubmit)}
          // disabled={!isValid}
        />
      </View>
    </View>
  );
}
