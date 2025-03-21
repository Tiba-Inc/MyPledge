import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import Calendar from '~/assets/svgs/calendar';
import CalendarIcon from '~/assets/svgs/calendarIcon';
import Trash from '~/assets/svgs/trash';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';

type Props = {};

const EditGoal = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      targetAmount: '',
      savedAmount: '',
      date: '',
    },
  });

  // Sheet refs for targetAmount and savedAmount
  const targetAmountSheetRef = useSheetRef();
  const savedAmountSheetRef = useSheetRef();

  // State to manage input values in sheets
  const [targetAmountInput, setTargetAmountInput] = useState('');
  const [savedAmountInput, setSavedAmountInput] = useState('');

  // Handle delete action
  const handleDelete = () => {
    // Add logic to delete the goal
    console.log('Delete goal:');
  };

  // Handle targetAmount sheet confirmation
  const handleTargetAmountConfirm = () => {
    setValue('targetAmount', targetAmountInput, { shouldValidate: true });
    targetAmountSheetRef.current?.dismiss();
    Keyboard.dismiss(); // Dismiss keyboard when sheet is closed
  };

  // Handle savedAmount sheet confirmation
  const handleSavedAmountConfirm = () => {
    setValue('savedAmount', savedAmountInput, { shouldValidate: true });
    savedAmountSheetRef.current?.dismiss();
    Keyboard.dismiss(); // Dismiss keyboard when sheet is closed
  };

  const onSubmit = (data) => {
    // router.push('/auth/registerpwd');
    console.log(data);
  };

  // Automatically focus the input when the sheet is opened
  useEffect(() => {
    if (targetAmountSheetRef.current?.isActive) {
      // Focus the targetAmount input when the sheet is opened
      setTimeout(() => {
        setTargetAmountInput('');
      }, 100);
    }
    if (savedAmountSheetRef.current?.isActive) {
      // Focus the savedAmount input when the sheet is opened
      setTimeout(() => {
        setSavedAmountInput('');
      }, 100);
    }
  }, [targetAmountSheetRef.current?.isActive, savedAmountSheetRef.current?.isActive]);

  return (
    <View className="mx-4">
      <Stack.Screen
        options={{
          headerTitle: 'Edit goal',
          headerRight: () => (
            <TouchableOpacity onPress={handleDelete}>
              <Trash />
            </TouchableOpacity>
          ),
        }}
      />

      {/* Name Field */}
      <View className="mb-4 mt-6">
        <Controller
          control={control}
          rules={{
            required: 'Name is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Name</Text>
              <TextInput
                placeholder="Car"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8] py-2"
              />
            </View>
          )}
          name="name"
        />
        {errors.name && <Text className="text-red-700">{errors.name.message}</Text>}
      </View>

      {/* Target Amount Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Target amount is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1 mt-6">Target amount</Text>
              <TouchableOpacity
                onPress={() => targetAmountSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || '0.0'}</Text>
              </TouchableOpacity>
            </View>
          )}
          name="targetAmount"
        />
        {errors.targetAmount && <Text className="text-red-700">{errors.targetAmount.message}</Text>}
      </View>

      {/* Saved Amount Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Saved amount is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1 mt-6">Saved amount</Text>
              <TouchableOpacity
                onPress={() => savedAmountSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || '0.0'}</Text>
              </TouchableOpacity>
            </View>
          )}
          name="savedAmount"
        />
        {errors.savedAmount && <Text className="text-red-700">{errors.savedAmount.message}</Text>}
      </View>

      {/* Date Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Date is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date</Text>
              <View className="flex-row items-center justify-between rounded-md border-2 border-[#8A4A65] pr-3">
                <TextInput
                  className="mx-3"
                  placeholder="08/17/2023"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
                <CalendarIcon />
              </View>
              <Text className="text-reg mx-4 mt-1">MM/DD/YYYY</Text>
            </View>
          )}
          name="date"
        />
        {errors.date && <Text className="text-red-700">{errors.date.message}</Text>}
      </View>

      {/* Target Amount Sheet */}
      <Sheet ref={targetAmountSheetRef} snapPoints={[300]}>
        <View className="flex-1 p-4">
          <Text className="text-ct mb-4">Target amount</Text>
          <TextInput
            placeholder="0"
            value={targetAmountInput}
            onChangeText={setTargetAmountInput}
            keyboardType="number-pad"
            autoFocus // Automatically focus the input and open the keyboard
            className="placeholder:text-center placeholder:text-[57px] placeholder:text-[#514347]"
          />
          <Button
            className="mt-4"
            variant="secondary"
            title="Confirm"
            onPress={handleTargetAmountConfirm}
          />
        </View>
      </Sheet>

      {/* Saved Amount Sheet */}
      <Sheet ref={savedAmountSheetRef} snapPoints={[300]} enablePanDownToClose={false}>
        <View className="flex-1 p-4">
          <Text className="text-ct mb-4">Saved already</Text>
          <TextInput
            placeholder="0"
            value={savedAmountInput}
            onChangeText={setSavedAmountInput}
            keyboardType="number-pad"
            autoFocus // Automatically focus the input and open the keyboard
            className="placeholder:text-center placeholder:text-[57px] placeholder:text-[#514347]"
          />
          <Button
            className="mt-4"
            variant="secondary"
            title="Confirm"
            onPress={handleSavedAmountConfirm}
          />
        </View>
      </Sheet>

      {/* Save Button */}
      <Button title="Save" onPress={handleSubmit(onSubmit)} variant="secondary" />
    </View>
  );
};

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

export default EditGoal;
