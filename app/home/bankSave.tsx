import { View, Text, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRouter, Stack, router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import SheetArrow from '~/assets/svgs/sheetArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import Checkbox from 'expo-checkbox';

type Props = {};

const BankSave = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      bank: '',
    },
    mode: 'onChange',
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedBank, setSelectedBank] = useState(''); // Local state to store selected frequency
  const bankSheetRef = useSheetRef();

  const bankOptions = ['ABC Capital Bank', 'ABSA Bank', 'Bank Of Baroda', 'Bank Of India'];

  // Function to handle frequency selection
  const handleFrequencySelect = (bank: string) => {
    setSelectedBank(bank); // Update local state
  };

  // Function to confirm the selection and update the form value
  const handleConfirm = () => {
    setValue('bank', selectedBank, { shouldValidate: true }); // Update the form value and trigger validation
    bankSheetRef.current?.dismiss(); // Close the sheet
  };

  // Calculate dynamic height for the frequency sheet
  const calculateFrequencySheetHeight = () => {
    const itemHeight = 60;
    const headerHeight = 50;
    const padding = 32;
    const totalHeight = bankOptions.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8);
  };

  const onSubmit = (data: { bank: string }) => {
    router.push('/home/pledgeAmount');
    console.log(data);
  };
  function handleBankSelect(bank: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">Which bank will you be saving with?</Text>
      {/* Frequency Field */}
      <View className="mt-12">
        <Controller
          control={control}
          rules={{
            required: 'Saving frequency is required',
          }}
          render={({ field: { value } }) => (
            <View className="mr-5">
              <Text className="text-reg mb-1">Select a bank</Text>
              <Pressable
                onPress={() => bankSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select from list'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="bank"
        />
        {errors.bank && <Text className="text-red-700">{errors.bank.message}</Text>}
      </View>

      {/* Frequency Sheet */}
      <Sheet ref={bankSheetRef} snapPoints={[calculateFrequencySheetHeight()]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">How often would you like to save?</Text>
          <View className="mx-8 mt-8">
            {bankOptions.map((bank, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFrequencySelect(bank)}
                className="mb-4 flex-row items-center gap-5">
                <Checkbox
                  value={selectedBank === bank} // Reflect the current local state
                  onValueChange={() => handleBankSelect(bank)}
                  color={selectedBank === bank ? '#34D399' : undefined}
                  style={{
                    borderRadius: 12,
                    width: 24,
                    height: 24,
                  }}
                />
                <Text className="text-reg">{bank}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Confirm Button */}
          <Button
            textColor="#231B00"
            className="mx-4 mb-8 bg-[#FCE186]"
            title="Confirm"
            onPress={handleConfirm} // Update form value and close sheet
          />
        </View>
      </Sheet>

      {/* Submit Button */}
      <View className="mt-16">
        <Button
          className={`${isValid ? 'opacity-100' : 'opacity-50'}`}
          title="Continue"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || !selectedBank} // Ensure the button is enabled when a frequency is selected
        />
      </View>
    </View>
  );
};

export default BankSave;
