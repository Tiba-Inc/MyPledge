import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';

type Props = {};

const PledgeName = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { name: string }) => {
    router.push('/home/pledgeEmail');
    console.log(data);
  };

  return (
    <View className="mx-4 mt-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">What are your names?</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Name is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Names</Text>
              <TextInput
                placeholder="Full name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="name"
        />
        {errors.name && <Text className="text-red-700">{errors.name.message}</Text>}
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
        Your name will be prominently featured on your {'\n'}personalized certificate, serving as a
        tangible {'\n'}testament to your financial accomplishment.
      </Text>
    </View>
  );
};

export default PledgeName;
