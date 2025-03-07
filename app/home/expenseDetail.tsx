import { View, Text, TextInput, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { router, Stack } from 'expo-router';
import { Button } from '~/components/Button';
import SheetArrow from '~/assets/svgs/sheetArrow';
import RightArrow from '~/assets/svgs/rightArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import Checkbox from 'expo-checkbox';

type Props = {};

const ExpenseDetail = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: '',
      category: '',
      type: '',
      note: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const categorySheetRef = useSheetRef(); // Sheet for category
  const typeSheetRef = useSheetRef(); // Sheet for type

  const onSubmit = (data) => {
    router.push('/auth/registerpwd');
    console.log(data);
  };

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
  const types = ['Income', 'Expense'];
  const expenseTypes = ['Need', 'Want', 'Saving'];

  // Function to handle category selection
  const handleCategorySelect = (category: string) => {
    setValue('category', category); // Update the form value for 'category'
    categorySheetRef.current?.dismiss(); // Close the category sheet
  };

  // Function to handle type selection
  const handleTypeSelect = (type: string) => {
    setValue('type', type); // Update the form value for 'type'
    typeSheetRef.current?.dismiss(); // Close the type sheet
  };

  // Calculate dynamic height for the category sheet
  const calculateCategorySheetHeight = () => {
    const itemHeight = 25; // Height of each category item
    const headerHeight = 10; // Height of the sheet header
    const padding = 0; // Additional padding (16px top and bottom)
    const totalHeight = categories.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8); // Limit to 80% of screen height
  };

  // Calculate dynamic height for the type sheet
  const calculateTypeSheetHeight = () => {
    const itemHeight = 60; // Height of each type item
    const headerHeight = 50; // Height of the sheet header
    const padding = 32; // Additional padding (16px top and bottom)
    const totalHeight = expenseTypes.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8); // Limit to 80% of screen height
  };

  return (
    <View className="mx-4 mt-7 gap-10">
      <Stack.Screen options={{ headerTitle: 'Expense detail' }} />

      {/* Amount Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Amount is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Amount</Text>
              <TextInput
                placeholder="(input)"
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
      <View className="">
        <Controller
          control={control}
          rules={{
            required: 'Category is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Category</Text>
              <Pressable
                onPress={() => categorySheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select category'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="category"
        />
        {errors.category && <Text className="text-red-700">{errors.category.message}</Text>}
      </View>

      {/* Type Field */}
      <View className="">
        <Controller
          control={control}
          rules={{
            required: 'Type is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Type</Text>
              <Pressable
                onPress={() => typeSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select type'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="type"
        />
        {errors.type && <Text className="text-red-700">{errors.type.message}</Text>}
      </View>

      {/* Note Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Note is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Note</Text>
              <TextInput
                placeholder="Note"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                className="border-b border-b-[#C6C6C8]"
              />
            </View>
          )}
          name="note"
        />
        {errors.note && <Text className="text-red-700">{errors.note.message}</Text>}
        <Text className="text-reg mx-4 mt-2">You can add an optional note about this expense</Text>
      </View>

      {/* Category Sheet */}
      <Sheet ref={categorySheetRef} snapPoints={[calculateCategorySheetHeight()]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">Choose a category</Text>
          <View className="mx-4 mt-8 flex-row flex-wrap">
            {categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleCategorySelect(category)}
                className="mb-2 mr-2">
                <Text className="text-st rounded-full border px-4 py-1">{category}</Text>
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

      {/* Type Sheet */}
      <Sheet ref={typeSheetRef} snapPoints={[calculateTypeSheetHeight()]}>
        <View className="flex-1">
          <Text className="text-ct ml-5">What type of expense is this?</Text>
          <View className="mx-8 mt-8">
            {expenseTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleTypeSelect(type)} // Update form field immediately
                className="mb-4 flex-row items-center gap-5">
                <Checkbox
                  value={control._formValues.type === type} // Reflect the current form value
                  onValueChange={() => handleTypeSelect(type)}
                  color={control._formValues.type === type ? '#34D399' : undefined}
                  style={{
                    borderRadius: 12, // Make the checkbox round
                    width: 24,
                    height: 24,
                  }}
                />
                <Text className="text-reg">{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Sheet>

      {/* Submit Button */}
      <Button className="mt-14" title="Add transaction" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default ExpenseDetail;
