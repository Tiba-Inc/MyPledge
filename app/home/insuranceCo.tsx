import { View, Text, Dimensions, TouchableOpacity, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useRouter, Stack, router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import SheetArrow from '~/assets/svgs/sheetArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import Checkbox from 'expo-checkbox';

type Props = {};

const InsuranceCo = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      company: '',
    },
    mode: 'onChange',
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(''); // Local state to store selected frequency
  const companySheetRef = useSheetRef();

  const companyOptions = [
    'AAR Head Office',
    'APA Insurance (U)',
    'ATACO Freight Services',
    'Alliance Africa General Insurance',
  ];

  // Function to handle frequency selection
  const handleFrequencySelect = (company: string) => {
    setSelectedCompany(company); // Update local state
  };

  // Function to confirm the selection and update the form value
  const handleConfirm = () => {
    setValue('company', selectedCompany, { shouldValidate: true }); // Update the form value and trigger validation
    companySheetRef.current?.dismiss(); // Close the sheet
  };

  // Calculate dynamic height for the frequency sheet
  const calculateFrequencySheetHeight = () => {
    const itemHeight = 60;
    const headerHeight = 50;
    const padding = 32;
    const totalHeight = companyOptions.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8);
  };

  const onSubmit = (data: { company: string }) => {
    router.push('/home/pledgeTaken');
    console.log(data);
  };
  function handleCompanySelect(bank: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">Which insurance company do you use? </Text>
      {/* Frequency Field */}
      <View className="mt-12">
        <Controller
          control={control}
          rules={{
            required: 'Saving frequency is required',
          }}
          render={({ field: { value } }) => (
            <View className="mr-5">
              <Text className="text-reg mb-1">Select insurance company</Text>
              <Pressable
                onPress={() => companySheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select from list'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="company"
        />
        {errors.company && <Text className="text-red-700">{errors.company.message}</Text>}
      </View>

      {/* Frequency Sheet */}
      <Sheet ref={companySheetRef} snapPoints={[calculateFrequencySheetHeight()]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Select your insurance company </Text>
          <View className="mx-8 mt-8">
            {companyOptions.map((company, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFrequencySelect(company)}
                className="mb-4 flex-row items-center gap-5">
                <Checkbox
                  value={selectedCompany === company} // Reflect the current local state
                  onValueChange={() => handleCompanySelect(company)}
                  color={selectedCompany === company ? '#34D399' : undefined}
                  style={{
                    borderRadius: 12,
                    width: 24,
                    height: 24,
                  }}
                />
                <Text className="text-reg">{company}</Text>
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
          disabled={!isValid || !selectedCompany} // Ensure the button is enabled when a frequency is selected
        />
      </View>
    </View>
  );
};

export default InsuranceCo;
