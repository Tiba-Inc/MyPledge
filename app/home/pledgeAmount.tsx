import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';

type Props = {};

const PledgeAmount = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      pledgeAmount: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { pledgeAmount: string }) => {
    router.push('/home/insuranceCo');
    console.log(data);
  };
  return (
    <View className="mx-4 mt-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">How much are you pledging to save?</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Pledge amount is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Pledge amount</Text>
              <TextInput
                placeholder="100,000"
                onBlur={onBlur}
                onChangeText={onChange}
                keyboardType="phone-pad"
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="pledgeAmount"
        />
        {errors.pledgeAmount && <Text className="text-red-700">{errors.pledgeAmount.message}</Text>}
      </View>
      {/* Log In Button */}
      <Button
        className={` ${isValid ? 'opacity-100' : 'opacity-50'}`}
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
    </View>
  );
};

export default PledgeAmount;
