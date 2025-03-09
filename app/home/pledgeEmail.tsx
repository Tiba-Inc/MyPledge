import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';

type Props = {};

const PledgeEmail = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { email: string }) => {
    router.push('/home/pledgeFrequencySave');
    console.log(data);
  };
  return (
    <View className="mx-4 mt-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">What is your email address?</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Email is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Email</Text>
              <TextInput
                placeholder="Email address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="email"
        />
        {errors.email && <Text className="text-red-700">{errors.email.message}</Text>}
      </View>
      {/* Log In Button */}
      <Button
        className={` ${isValid ? 'opacity-100' : 'opacity-50'}`}
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        // textColor={isValid ? 'text-white' : '  text-green-400'}
      />
      <Text className="text-erg mt-16 text-center">
        Please enter the email address where you'd like to {'\n'}receive your certificate.
      </Text>
    </View>
  );
};

export default PledgeEmail;
