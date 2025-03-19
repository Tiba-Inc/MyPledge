import React, { useState } from 'react';
import { useRouter, Stack } from 'expo-router';
import { Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import SheetArrow from '~/assets/svgs/sheetArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import { Button } from '~/components/Button';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

type Props = {};

const AddBill = (props: Props) => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      name: '',
      billCategory: '',
      amount: '',
      frequency: '',
      date: '',
      notifications: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const [selectedBillCategory, setSelectedBillCategory] = useState('');
  const billCategorySheetRef = useSheetRef();

  const [selectedFrequency, setSelectedFrequency] = useState('');
  const frequencySheetRef = useSheetRef();

  const [selectedDate, setSelectedDate] = useState('');
  const dateSheetRef = useSheetRef();

  const [selectedNotification, setSelectedNotification] = useState('');
  const notificationSheetRef = useSheetRef();

  const frequencyOptions = [
    'One off',
    'Daily',
    'Weekly',
    'Fortnightly',
    'Monthly',
    'Every two months',
    'Annually',
  ];

  const notificationOptions = [
    'None',
    'On due date',
    'One day before',
    'Three days before',
    'Week before',
  ];

  const handleFrequencySelect = (frequency: string) => {
    setSelectedFrequency(frequency);
  };

  const handleFrequencyConfirm = () => {
    setValue('frequency', selectedFrequency, { shouldValidate: true });
    frequencySheetRef.current?.dismiss();
  };

  const handleBillCategorySelect = (category: string) => {
    setSelectedBillCategory(category);
  };

  const handleBillCategoryConfirm = () => {
    setValue('billCategory', selectedBillCategory, { shouldValidate: true });
    billCategorySheetRef.current?.dismiss();
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleDateConfirm = () => {
    setValue('date', selectedDate, { shouldValidate: true });
    dateSheetRef.current?.dismiss();
  };

  const handleNotificationSelect = (notification: string) => {
    setSelectedNotification(notification);
  };

  const handleNotificationConfirm = () => {
    setValue('notifications', selectedNotification, { shouldValidate: true });
    notificationSheetRef.current?.dismiss();
  };

  const calculateSheetHeight = (options: string[]) => {
    const itemHeight = 60;
    const headerHeight = 50;
    const padding = 32;
    const totalHeight = options.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8);
  };

  const onSubmit = (data: {
    name: string;
    billCategory: string;
    amount: string;
    frequency: string;
    date: string;
    notifications: string;
  }) => {
    router.push('/(drawer)/(tabs)/homeScreen');
    console.log(data);
  };

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: 'Adding a bill' }} />
      {/* Name Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Name is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1 mt-6">Name</Text>
              <TextInput
                placeholder=""
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="name"
        />
        {errors.name && <Text className="text-red-700">{errors.name.message}</Text>}
      </View>

      {/* Bill Category Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Bill category is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Select a category for your bill</Text>
              <TouchableOpacity
                onPress={() => billCategorySheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select'}</Text>
                <SheetArrow />
              </TouchableOpacity>
            </View>
          )}
          name="billCategory"
        />
        {errors.billCategory && <Text className="text-red-700">{errors.billCategory.message}</Text>}
      </View>

      {/* Amount Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Amount is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1 mt-6">Amount</Text>
              <TextInput
                placeholder=""
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                keyboardType="number-pad"
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="amount"
        />
        {errors.amount && <Text className="text-red-700">{errors.amount.message}</Text>}
      </View>

      {/* Frequency Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Frequency is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Frequency</Text>
              <TouchableOpacity
                onPress={() => frequencySheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'One off'}</Text>
                <SheetArrow />
              </TouchableOpacity>
            </View>
          )}
          name="frequency"
        />
        {errors.frequency && <Text className="text-red-700">{errors.frequency.message}</Text>}
      </View>

      {/* Date Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Date is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Date</Text>
              <TouchableOpacity
                onPress={() => dateSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select date'}</Text>
                <SheetArrow />
              </TouchableOpacity>
            </View>
          )}
          name="date"
        />
        {errors.date && <Text className="text-red-700">{errors.date.message}</Text>}
      </View>

      {/* Notifications Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Notifications are required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Notifications</Text>
              <TouchableOpacity
                onPress={() => notificationSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'None'}</Text>
                <SheetArrow />
              </TouchableOpacity>
            </View>
          )}
          name="notifications"
        />
        {errors.notifications && (
          <Text className="text-red-700">{errors.notifications.message}</Text>
        )}
      </View>

      {/* Frequency Selection Sheet */}
      <Sheet ref={frequencySheetRef} snapPoints={[calculateSheetHeight(frequencyOptions)]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Select your frequency</Text>
          <View className="mx-8 mt-8">
            {frequencyOptions.map((frequency, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFrequencySelect(frequency)}
                className="mb-4 flex-row items-center gap-3">
                <View className="">
                  <BouncyCheckbox
                    isChecked={selectedFrequency === frequency}
                    onPress={() => handleFrequencySelect(frequency)}
                    fillColor={selectedFrequency === frequency ? '#34D399' : undefined}
                    size={24}
                    iconStyle={{ borderRadius: 12 }} // Ensures the checkbox remains circular
                  />
                </View>
                <Text className="text-reg">{frequency}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            textColor="#231B00"
            className="mx-4 mb-8 bg-[#FCE186]"
            title="Confirm"
            onPress={handleFrequencyConfirm}
          />
        </View>
      </Sheet>

      {/* Bill Category Selection Sheet */}
      <Sheet
        ref={billCategorySheetRef}
        snapPoints={[calculateSheetHeight(['Category1', 'Category2', 'Category3'])]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Select your bill category</Text>
          <View className="mx-8 mt-8">
            {['Category1', 'Category2', 'Category3'].map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleBillCategorySelect(category)}
                className="mb-4 flex-row items-center gap-3">
                <View className="">
                  <BouncyCheckbox
                    isChecked={selectedBillCategory === category}
                    onPress={() => handleBillCategorySelect(category)}
                    fillColor={selectedBillCategory === category ? '#34D399' : undefined}
                    size={24}
                    iconStyle={{ borderRadius: 12 }} // Ensures the checkbox remains circular
                  />
                </View>
                <Text className="text-reg">{category}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            textColor="#231B00"
            className="mx-4 mb-8 bg-[#FCE186]"
            title="Confirm"
            onPress={handleBillCategoryConfirm}
          />
        </View>
      </Sheet>

      {/* Date Selection Sheet */}
      <Sheet ref={dateSheetRef} snapPoints={[calculateSheetHeight(['Date1', 'Date2', 'Date3'])]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Select your date</Text>
          <View className="mx-8 mt-8">
            {['Date1', 'Date2', 'Date3'].map((date, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDateSelect(date)}
                className="mb-4 flex-row items-center gap-3">
                <View className="">
                  <BouncyCheckbox
                    isChecked={selectedDate === date}
                    onPress={() => handleDateSelect(date)}
                    fillColor={selectedDate === date ? '#34D399' : undefined}
                    size={24}
                    iconStyle={{ borderRadius: 12 }} // Ensures the checkbox remains circular
                  />
                </View>
                <Text className="text-reg">{date}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            textColor="#231B00"
            className="mx-4 mb-8 bg-[#FCE186]"
            title="Confirm"
            onPress={handleDateConfirm}
          />
        </View>
      </Sheet>

      {/* Notifications Selection Sheet */}
      <Sheet ref={notificationSheetRef} snapPoints={[calculateSheetHeight(notificationOptions)]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Select notification type</Text>
          <View className="mx-8 mt-8">
            {notificationOptions.map((notification, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleNotificationSelect(notification)}
                className="mb-4 flex-row items-center gap-3">
                <View className="">
                  <BouncyCheckbox
                    isChecked={selectedNotification === notification}
                    onPress={() => handleNotificationSelect(notification)}
                    fillColor={selectedNotification === notification ? '#34D399' : undefined}
                    size={24}
                    iconStyle={{ borderRadius: 12 }} // Ensures the checkbox remains circular
                  />
                </View>
                <Text className="text-reg">{notification}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            textColor="#231B00"
            className="mx-4 mb-8 bg-[#FCE186]"
            title="Confirm"
            onPress={handleNotificationConfirm}
          />
        </View>
      </Sheet>

      {/* Submit Button */}
      <View className="mt-16">
        <Button
          className={`${isValid ? 'opacity-100' : 'opacity-50'}`}
          title="Save bill"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>
    </View>
  );
};

export default AddBill;
