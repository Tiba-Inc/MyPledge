import { View, Text, TextInput, Pressable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { router, Stack } from 'expo-router';
import { Button } from '~/components/Button';
import SheetArrow from '~/assets/svgs/sheetArrow';
import ArrowDown from '~/assets/svgs/arrowDown';
import RightArrow from '~/assets/svgs/rightArrow';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import ArrowUp from '~/assets/svgs/arrowUp';

type Props = {};

const IncomeDetail = (props: Props) => {
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      amount: '',
      source: '', // This will store the selected income source
      note: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const bottomSheetModalRef = useSheetRef();

  const onSubmit = (data) => {
    // router.push('/auth/registerpwd');
    console.log(data);
  };

  const incomeSources = ['Salary', 'Gig work', 'Bonus', 'Business profits', 'Allowance', 'Other'];

  // Function to handle income source selection
  const handleIncomeSourceSelect = (source: string) => {
    setValue('source', source); // Update the form value for 'source'
    bottomSheetModalRef.current?.dismiss(); // Close the sheet
  };

  return (
    <View className="mx-4 mt-7 gap-10">
      <Stack.Screen options={{ headerTitle: 'Income detail' }} />

      {/* Amount Field */}
      <View className="mb-4">
        <Controller
          control={control}
          rules={{
            required: 'Amount is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1">Amount earned</Text>
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

      {/* Source of Income Field */}
      <View className="">
        <Controller
          control={control}
          rules={{
            required: 'Source of income is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Source of income</Text>
              <Pressable
                onPress={() => bottomSheetModalRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select source'}</Text>
                <SheetArrow />
              </Pressable>
            </View>
          )}
          name="source"
        />
        {errors.source && <Text className="text-red-700">{errors.source.message}</Text>}
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
        <Text className="text-reg mx-4 mt-2">You can add an optional note about this income</Text>
      </View>

      {/* Bottom Sheet for Income Sources */}
      <Sheet ref={bottomSheetModalRef} snapPoints={[220]}>
        <View className="flex-1">
          <Text className="text-ct text-center">Select the source of your income</Text>
          <View className="mx-4 mt-8 flex-row flex-wrap">
            {incomeSources.map((source, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleIncomeSourceSelect(source)}
                className="mb-2 mr-2">
                <Text className="text-st rounded-full border px-4 py-1">{source}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Sheet>

      {/* Submit Button */}
      <Button className="mt-14" title="Add transactions" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default IncomeDetail;
