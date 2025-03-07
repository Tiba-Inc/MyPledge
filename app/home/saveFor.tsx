import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';

type Props = {};

const SaveFor = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      goal: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { goal: string }) => {
    router.push('/home/saveAmount');
    console.log(data);
  };

  return (
    <View className="mx-4 mt-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">What are you saving for?</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Goal is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Name your goal</Text>
              <TextInput
                placeholder="Your goal’s name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="goal"
        />
        {errors.goal && <Text className="text-red-700">{errors.goal.message}</Text>}
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
        People that personalize their goals are more likely {'\n'} to achieve them.
      </Text>
    </View>
  );
};

export default SaveFor;
