import { View, Text, TextInput, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState } from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import SheetArrow from '~/assets/svgs/sheetArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';

type Props = {};

const MontlySave = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: '',
      category: 'General', // Set default category to 'General'
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const categorySheetRef = useSheetRef(); // Sheet for category

  // Dummy data for categories and types
  const categories = [
    'General',
    'Bills',
    'Entertainment',
    'Family',
    'Fines',
    'Groceries',
    'Insurances',
    'Investments',
    'Internet',
    'Personal care',
    'Rent',
    'Restaurant',
    'Shopping',
    'Taxes',
    'Transport',
    'Trips',
    'Vehicle',
  ];

  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    setValue('category', category); // Update the form value for 'category'
    categorySheetRef.current?.dismiss(); // Close the category sheet
  };

  // Calculate dynamic height for the category sheet
  const calculateCategorySheetHeight = () => {
    const itemHeight = 25; // Height of each category item
    const headerHeight = 10; // Height of the sheet header
    const padding = 32; // Additional padding (16px top and bottom)
    const totalHeight = categories.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8); // Limit to 80% of screen height
  };

  // Form submission handler
  const onSubmit = (data: { amount: string; category: string }) => {
    router.push('/home/startSaving');
    console.log(data);
  };

  return (
    <View className="mx-4">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">How much can you save per {'\n'}month</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Goal is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Amount per month</Text>
              <TextInput
                placeholder="10,000"
                keyboardType="phone-pad"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="amount"
        />
        {errors.amount && <Text className="text-red-700">{errors.amount.message}</Text>}
      </View>
      {/* Category Field */}
      <View className="mb-20">
        <Controller
          control={control}
          rules={{
            required: 'Category is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Select a category for your saving goal</Text>
              <Pressable
                onPress={() => categorySheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'General'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="category"
        />
        {errors.category && <Text className="text-red-700">{errors.category.message}</Text>}
      </View>
      <Button
        className={` ${isValid ? 'opacity-100' : 'opacity-50'}`}
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <Text className="text-erg mt-16 text-center">
        This is how much you are going to save a month to {'\n'}reach your (goal amount) with an
        estimated end{'\n'}date of (date).
      </Text>
      {/* Bottom Sheet for Categories */}
      <Sheet ref={categorySheetRef} snapPoints={[calculateCategorySheetHeight()]}>
        <View className="flex-1">
          <Text className="text-ct text-center">Select a category</Text>
          <View className="mx-4 mt-8 flex-row flex-wrap">
            {categories.map((source, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCategorySelect(source)} // Use `source` instead of `category`
                className="mb-2 mr-2">
                <Text className="text-st rounded-full border px-4 py-1">{source}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Submit Button */}
        <Button
          textColor="#231B00"
          className="mx-4 mb-8 bg-[#FCE186]"
          title="Confirm"
          onPress={handleSubmit(onSubmit)}
        />
      </Sheet>
    </View>
  );
};

export default MontlySave;
