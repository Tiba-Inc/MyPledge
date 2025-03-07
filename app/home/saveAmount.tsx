import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';

type Props = {};

const SaveAmount = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const onSubmit = (data: { amount: string }) => {
    router.push('/home/desiredDate');
    console.log(data);
  };
  return (
    <View className="mx-4 mt-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">How much do you want to save?</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Goal is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Saving goal</Text>
              <TextInput
                placeholder="100,000"
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="amount"
        />
        {errors.amount && <Text className="text-red-700">{errors.amount.message}</Text>}
      </View>
      {/* Log In Button */}
      <Button
        className={` ${isValid ? 'opacity-100' : 'opacity-50'}`}
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <Text className="text-erg mt-16 text-center">
        You will be able to change this later if you need to
      </Text>
    </View>
  );
};

export default SaveAmount;
