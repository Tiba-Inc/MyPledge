import React from 'react';
import { router, Stack } from 'expo-router';
import { Text, View, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';

export default function Registerpwd() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      password: '',
    },
    mode: 'onChange', // Validate on every change
  });

  const onSubmit = (data) => {
    router.push('/auth/accountCreated');
    console.log(data);
  };

  // Watch the password field to enable/disable the button dynamically
  const password = watch('password');

  // Password validation rules
  const passwordRules = {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters',
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  };

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch mt-1 leading-8">Create your password</Text>

      {/* Password Field */}
      <View className="mb-4 mt-7">
        <Controller
          control={control}
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Choose a password</Text>
              <TextInput
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b"
                secureTextEntry
              />
            </View>
          )}
          name="password"
        />
        {errors.password && <Text className="text-red-700">{errors.password.message}</Text>}
      </View>

      <Button
        className="mb-12 mt-14"
        disabled={!isValid}
        title="Done"
        onPress={handleSubmit(onSubmit)}
      />

      <Text className="text-reg text-center leading-4">
        By registering, you accept our <Text className="text-[#34C759]">Terms of Use</Text> and
        {'\n'} <Text className="text-[#34C759]">Privacy policy</Text>
      </Text>
    </View>
  );
}
