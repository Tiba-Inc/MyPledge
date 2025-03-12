import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TextInput } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button } from '~/components/Button';

type Props = { oldPwd: string; newPwd: string; confirmPwd: string };

const UpdatePwd = (props: Props) => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    defaultValues: {
      oldPwd: '',
      newPwd: '',
      confirmPwd: '',
    },
    mode: 'onChange', // Validate on every change
  });

  const onSubmit = (data: Props) => {
    console.log(data);
  };

  // Watch the password field to enable/disable the button dynamically
  const password = watch('newPwd');

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
      <Stack.Screen options={{ headerTitle: 'Update password' }} />
      {/* Password Field */}
      <View className="mb-4 mt-7">
        <Controller
          control={control}
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Old password</Text>
              <TextInput
                placeholder="Current password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8] py-1"
                secureTextEntry
              />
            </View>
          )}
          name="oldPwd"
        />
        {errors.oldPwd && <Text className="text-red-700">{errors.oldPwd.message}</Text>}
      </View>
      {/* Password Field */}
      <View className="mb-4 mt-7">
        <Controller
          control={control}
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">New password</Text>
              <TextInput
                placeholder="New password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8] py-1"
                secureTextEntry
              />
            </View>
          )}
          name="newPwd"
        />
        {errors.newPwd && <Text className="text-red-700">{errors.newPwd.message}</Text>}
      </View>
      {/* Password Field */}
      <View className="mb-4 mt-7">
        <Controller
          control={control}
          rules={passwordRules}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Confirm password</Text>
              <TextInput
                placeholder="New password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8] py-1"
                secureTextEntry
              />
            </View>
          )}
          name="confirmPwd"
        />
        {errors.confirmPwd && <Text className="text-red-700">{errors.confirmPwd.message}</Text>}
      </View>
      <View className="mt-14">
        <Button
          textColor="#231B00"
          className="mx-4 mb-8 bg-[#FCE186]"
          title="Update password"
          disabled={!isValid}
          onPress={handleSubmit(onSubmit)} // Submit the form and close the sheet
        />
      </View>
    </View>
  );
};

export default UpdatePwd;
