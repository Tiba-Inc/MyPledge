import React, { useState } from 'react';
import { Button } from '~/components/Button';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { router, Stack } from 'expo-router';
import EyeOff from '~/assets/svgs/eyeOff';
import Eye from '~/assets/svgs/eye';

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      number: '',
      password: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const [passwordVisible, setPasswordVisible] = useState(false);

  // Form submission handler
  const onSubmit = (data: { number: string; password: string }) => {
    router.push('/(drawer)/(tabs)/homeScreen');
    console.log(data);
  };

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen options={{ headerTitle: 'Log in', headerTitleAlign: 'center' }} />

      <KeyboardAvoidingView className="flex-1">
        {/* Phone Number Field */}
        <View className="mb-4">
          <Controller
            control={control}
            rules={{
              required: 'Phone number is required',
              pattern: {
                value: /^\d{10}$/, // Validates a 10-digit number
                message: 'Enter a valid phone number',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <View>
                <Text className="text-reg mb-1 mt-6">Phone Number</Text>
                <TextInput
                  placeholder="Enter your phone number"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="phone-pad"
                  className="border-b border-b-[#C6C6C8] py-2"
                />
              </View>
            )}
            name="number"
          />
          {errors.number && <Text className="text-red-700">{errors.number.message}</Text>}
        </View>

        {/* Password Field */}
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
                <Text className="text-reg mb-1">Password</Text>
                <View className="flex-row items-center border-b border-b-[#C6C6C8] py-2">
                  <TextInput
                    placeholder="Enter your password"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!passwordVisible} // Toggles secure input
                    className="flex-1"
                  />
                  <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                    {passwordVisible ? <EyeOff color="#A6A6A8" /> : <Eye color="#A6A6A8" />}
                  </TouchableOpacity>
                </View>
              </View>
            )}
            name="password"
          />
          {errors.password && <Text className="text-red-700">{errors.password.message}</Text>}
        </View>

        {/* Log In Button */}
        <Button
          className={`mt-14 ${isValid ? 'opacity-100' : 'opacity-50'}`}
          title="Log in"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
          variant='primary'
        />

        {/* Forgot Password Button */}
        <Button
          className="mt-3 bg-transparent"
          textColor="#8A4A65"
          title="Forgot password"
          onPress={() => router.push('/auth/resetpwd')}
        />
      </KeyboardAvoidingView>

      {/* Create Account Section */}
      <View className="mb-10 items-center gap-3 border-t border-t-[#D8DADD] pt-4">
        <Text className="text-[#514347]">Or</Text>
        <Button
          onPress={() => router.push('/auth/register')}
          className="w-full bg-transparent"
          title="Create a new account"
          textColor="#8A4A65"
        />
      </View>
    </View>
  );
}
