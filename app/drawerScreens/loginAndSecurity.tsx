import React, { useState, useRef, useMemo } from 'react';
import { Button } from '~/components/Button';
import { Text, View, TextInput, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Stack, useRouter } from 'expo-router';
import EyeOff from '~/assets/svgs/eyeOff';
import Eye from '~/assets/svgs/eye';
import RightArrow from '~/assets/svgs/rightArrow';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import BottomSheet from '@gorhom/bottom-sheet';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';

export default function LoginAndSecurity() {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      password: '',
      reason: '',
      otherReason: '', // Add otherReason to the form
    },
    mode: 'onChange',
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const reasonSheetRef = useSheetRef();

  const reasons = [
    "I'm no longer using the app.",
    'I found a better budgeting app.',
    "I'm not satisfied with the app's features.",
  ];

  // Calculate dynamic height for the sheet
  const calculateSheetHeight = () => {
    const itemHeight = 60;
    const headerHeight = 50;
    const padding = 32;
    const totalHeight = reasons.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8);
  };

  const snapPoints = useMemo(() => [calculateSheetHeight()], [reasons]);

  const handleReasonSelect = (reason: string) => {
    setSelectedReason(reason);
    setValue('reason', reason); // Update the selected reason
    setValue('otherReason', ''); // Clear the otherReason field when a checkbox is selected
  };

  const onSubmit = (data: { password: string; reason: string; otherReason: string }) => {
    console.log('Form Data:', data); // Log the form data
    // reasonSheetRef.current?.close(); // Close the sheet after submission
    // router.push('/(drawer)/(tabs)/homeScreen'); // Navigate to the home screen
  };

  return (
    <View className="mx-4 mt-7">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: () => <Text className="text-ct font-normal">Login & security</Text>,
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
      {/* Password Field */}
      <View className="mb-4">
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Password</Text>
              <View className="flex-row items-center border-b border-b-[#C6C6C8] py-2">
                <TextInput
                  placeholder="Password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry={!passwordVisible}
                  className="flex-1"
                />
                <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                  {passwordVisible ? <Eye color="#A6A6A8" /> : <EyeOff color="#A6A6A8" />}
                </TouchableOpacity>
              </View>
            </View>
          )}
          name="password"
        />
      </View>
      <View className="mt-6 gap-6">
        <TouchableOpacity
          onPress={() => router.push('/drawerScreens/updatePwd')}
          className="flex-row items-center justify-between">
          <Text className="text-st">Update password</Text>
          <View className="mr-3">
            <RightArrow />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/drawerScreens/security')}
          className="flex-row items-center justify-between">
          <View>
            <Text className="text-st">Security</Text>
            <Text className="text-cd">Protect your app with PIN or Fingerprint</Text>
          </View>
          <View className="mr-3">
            <RightArrow />
          </View>
        </TouchableOpacity>
        {/* Deactivate Button */}
        <TouchableOpacity
          className="flex-row items-center justify-between"
          onPress={() => reasonSheetRef.current?.present()}>
          <Text className="text-base text-[#FF3B30]">Deactivate your account</Text>
          <View className="mr-3">
            <RightArrow />
          </View>
        </TouchableOpacity>
      </View>
      {/* Reason Selection Sheet */}
      <Sheet ref={reasonSheetRef} snapPoints={[400]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Why are you leaving?</Text>
          <View className="mx-8 mt-5 gap-8">
            {reasons.map((reason, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleReasonSelect(reason)}
                className="flex-row items-center">
                <View className="">
                  <BouncyCheckbox
                    isChecked={selectedReason === reason}
                    onPress={() => handleReasonSelect(reason)}
                    fillColor={selectedReason === reason ? '#34D399' : undefined}
                  />
                </View>
                <Text className="text-reg">{reason}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Other Reason Field */}
          <View className="mx-4 mt-8">
            <Controller
              control={control}
              rules={{
                required: control._formValues.reason ? false : 'Reason is required', // Only require if no checkbox is selected
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Other Reason</Text>
                  <View className="flex-row items-center justify-between rounded-md border-2 border-[#8A4A65] pr-3">
                    <TextInput
                      className="mx-3"
                      placeholder="Enter your reason"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={styles.input}
                    />
                  </View>
                </View>
              )}
              name="otherReason"
            />
            {errors.otherReason && (
              <Text className="text-red-700">{errors.otherReason.message}</Text>
            )}
          </View>
          <View className="mt-5">
            <Button
              textColor="#231B00"
              className="mx-4 mb-8 bg-[#FCE186]"
              title="Continue"
              disabled={!isValid}
              onPress={handleSubmit(onSubmit)} // Submit the form and close the sheet
            />
          </View>
        </View>
      </Sheet>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  label: {
    position: 'absolute',
    top: -10,
    left: 16,
    backgroundColor: '#fff',
    paddingHorizontal: 4,
    fontSize: 14,
    color: '#000',
    zIndex: 1,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
