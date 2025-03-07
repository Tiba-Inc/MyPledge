import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Button } from '~/components/Button';
import Calendar from '~/assets/svgs/calendar';
import CalendarIcon from '~/assets/svgs/calendarIcon';

type Props = {};

const DesiredDate = (props: Props) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    setValue, // Add setValue from react-hook-form
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      date: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Form submission handler
  const onSubmit = (data: { date: string }) => {
    router.push('/home/montlySave');
    console.log(data);
  };

  return (
    <View className="mx-4 mt-1">
      <Stack.Screen options={{ headerTitle: '' }} />
      <Text className="text-ch">Desired date</Text>
      {/* Amount Field */}
      <View className="mb-16 mt-8">
        <Controller
          control={control}
          rules={{
            required: 'Date is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Date</Text>
              <View className="flex-row items-center justify-between border-2 rounded-md border-[#8A4A65] pr-3">
                <TextInput
                className='mx-3'
                  placeholder="08/17/2023"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={styles.input}
                />
                <CalendarIcon />
              </View>
              <Text className='text-reg mx-4 mt-1'>MM/DD/YYYY</Text>
            </View>
            
          )}
          name="date"
        />
        {errors.date && <Text className="text-red-700">{errors.date.message}</Text>}
      </View>
      {/* Log In Button */}
      <Button
        className={` ${isValid ? 'opacity-100' : 'opacity-50'}`}
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <Text className="text-erg mt-16 text-center">
        Setting a target date for your goal increases your {'\n'} chances of achieving it.
      </Text>
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
    top: -10, // Adjust this value to align the label within the top border
    left: 16, // 8px from the start of the border
    backgroundColor: '#fff', // Match the background color of the parent container
    paddingHorizontal: 4, // Add some padding to the label to create space around the text
    fontSize: 14, // Adjust the font size as needed
    color: '#000', // Adjust the text color as needed
    zIndex: 1, // Ensure the label is above the TextInput
  },
  input: {
    // borderWidth: 1,
    // borderColor: '#8A4A65',
    paddingVertical: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    // borderRadius: 4, // Optional: Add border radius for a rounded look
  },
});

export default DesiredDate;
