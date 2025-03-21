import React, { useEffect, useRef } from 'react';
import { useRouter, Stack } from 'expo-router';
import Rocket from '~/assets/svgs/rocket';
import { Button } from '~/components/Button';
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

type Props = {};

const RepayDebt = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    // Focus the input field when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Form submission handler
  const onSubmit = (data: { amount: string }) => {
    // router.push('/(drawer)/(tabs)/homeScreen');
    console.log(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View className="mx-4">
        <Stack.Screen
          options={{
            headerTitle: 'Repay debt',
          }}
        />
        <View className="mt-4 items-center gap-6">
          <View className="">
            <Rocket />
          </View>
          <Text className="">Debt balance UGX (amount)</Text>
        </View>
        <View>
          {/* Phone amount Field */}
          <View className="">
            <Controller
              control={control}
              rules={{
                required: 'Phone amount is required',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View className=" mt-7">
                  <TextInput
                    ref={inputRef}
                    placeholder="UGX 0"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    keyboardType="number-pad"
                    className="placeholder:text-center placeholder:text-4xl placeholder:text-[#514347]"
                    autoFocus={true} // Ensure the keyboard is always open
                  />
                </View>
              )}
              name="amount"
            />
            {errors.amount && <Text className="text-red-700">{errors.amount.message}</Text>}
          </View>

          {/* Log In Button */}
          <Button
            className={`mt-4 ${isValid ? 'opacity-100' : 'opacity-50'}`}
            title="Save record"
            onPress={handleSubmit(onSubmit)}
            disabled={!isValid}
            variant="primary"
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RepayDebt;