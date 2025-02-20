import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { router, Stack } from 'expo-router';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';

export default function ResetCode() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { email: string }) => {
    router.push('/auth/newpwd');
    console.log(data);
  };

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '', headerTitleAlign: 'center' }} />
      <Text className="text-ch mt-1">Enter code</Text>
      {/* Phone Number Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'The code is required',
            // pattern: {
            //   value: /^\d{10}$/, // Validates a 10-digit number
            //   message: 'Enter a valid phone number',
            // },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mt-8">Code</Text>
              <TextInput
                placeholder="1234"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="phone-pad"
                className="border-b border-b-[#C6C6C8] py-1"
              />
            </View>
          )}
          name="email"
        />
        <Text className="text-reg mt-1">Enter 4-digit code sent to (example@gm.com)</Text>
        {errors.email && <Text className="text-red-700">{errors.email.message}</Text>}
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
