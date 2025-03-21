import { View, Text, Dimensions, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useRouter, Stack, router } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import SheetArrow from '~/assets/svgs/sheetArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox'; // Import BouncyCheckbox

type Props = {};

const PledgeFrequencySave = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      frequency: '',
    },
    mode: 'onChange',
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedFrequency, setSelectedFrequency] = useState(''); // Local state to store selected frequency
  const frequencySheetRef = useSheetRef();

  const frequencyOptions = ['Daily', 'Weekly', 'Fortnightly', 'Monthly'];

  // Function to handle frequency selection
  const handleFrequencySelect = (frequency: string) => {
    setSelectedFrequency(frequency); // Update local state
  };

  // Function to confirm the selection and update the form value
  const handleConfirm = () => {
    setValue('frequency', selectedFrequency, { shouldValidate: true }); // Update the form value and trigger validation
    frequencySheetRef.current?.dismiss(); // Close the sheet
  };

  // Calculate dynamic height for the frequency sheet
  const calculateFrequencySheetHeight = () => {
    const itemHeight = 60;
    const headerHeight = 50;
    const padding = 32;
    const totalHeight = frequencyOptions.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8);
  };

  const onSubmit = (data: { frequency: string }) => {
    router.push('/home/bankSave');
    console.log(data);
  };

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">How frequent do you save?</Text>
      {/* Frequency Field */}
      <View className="mt-12">
        <Controller
          control={control}
          rules={{
            required: 'Saving frequency is required',
          }}
          render={({ field: { value } }) => (
            <View className="mr-5">
              <Text className="text-reg mb-1">Select saving frequency</Text>
              <Pressable
                onPress={() => frequencySheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select frequency'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="frequency"
        />
        {errors.frequency && <Text className="text-red-700">{errors.frequency.message}</Text>}
      </View>

      {/* Frequency Sheet */}
      <Sheet ref={frequencySheetRef} snapPoints={[calculateFrequencySheetHeight()]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">How often would you like to save?</Text>
          <View className="mx-8 mt-8">
            {frequencyOptions.map((frequency, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFrequencySelect(frequency)}
                className="mb-4 flex-row items-center gap-5">
                <View className="|">
                  <BouncyCheckbox
                    isChecked={selectedFrequency === frequency} // Reflect the current local state
                    onPress={() => handleFrequencySelect(frequency)}
                    fillColor={selectedFrequency === frequency ? '#34D399' : undefined}
                    size={24}
                    iconStyle={{ borderRadius: 12 }} // Ensure the checkbox is a perfect circle
                    innerIconStyle={{ borderRadius: 12 }} // Ensure the inner icon is also a perfect circle
                  />
                </View>
                <Text className="text-reg">{frequency}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {/* Confirm Button */}
          <View>
            <Button
              className="mx-4 mb-8"
              variant="secondary"
              title="Confirm"
              onPress={handleConfirm} // Update form value and close sheet
            />
          </View>
        </View>
      </Sheet>

      {/* Submit Button */}
      <View className="mt-16">
        <Button
          className={`${isValid ? 'opacity-100' : 'opacity-50'}`}
          title="Continue"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid || !selectedFrequency} // Ensure the button is enabled when a frequency is selected
        />
      </View>
    </View>
  );
};

export default PledgeFrequencySave;
