import React, { useState, useEffect } from 'react';
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import SheetArrow from '~/assets/svgs/sheetArrow';
import { Button } from '~/components/Button';
import CalendarSync from '~/assets/svgs/calendarSync';
import { Calendar } from 'react-native-calendars';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { DummyDebts } from '~/lib/data/dummyDebts';

const EditDebt = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const debt = DummyDebts.find((d) => d.id === Number(id));

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      type: '',
      name: '',
      amount: '',
      date: '',
    },
    mode: 'onChange',
  });

  const [selectedDebtType, setSelectedDebtType] = useState('');
  const [isDateModalVisible, setDateModalVisible] = useState(false);
  const [startDate, setStartDate] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);

  const debtTypeSheetRef = useSheetRef();

  const debtTypes = ['I lent money', 'I borrowed from a bank', 'I borrowed from someone'];

  // Initialize form with debt data
  useEffect(() => {
    if (debt) {
      // Parse the date range from the debt (assuming format "dd/mm/yy - dd/mm/yy")
      const [start, end] = debt.dueDate.split(' - ').map(date => {
        const [day, month, year] = date.split('/');
        return `20${year}-${month}-${day}`; // Convert to YYYY-MM-DD format
      });

      reset({
        type: debt.type,
        name: debt.name,
        amount: debt.totalAmount.toString(),
        date: debt.dueDate,
      });
      setSelectedDebtType(debt.type);
      setStartDate(start);
      setEndDate(end);
    }
  }, [debt, reset]);

  const handleDebtTypeSelect = (type: string) => {
    setSelectedDebtType(type);
  };

  const handleDatePress = () => {
    setDateModalVisible(true);
  };

  const handleDateSelect = (date: string) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate) {
      setEndDate(date);
    } else {
      // Reset and start over if both dates are already selected
      setStartDate(date);
      setEndDate(null);
    }
  };

  const confirmDates = () => {
    if (startDate && endDate) {
      const formattedDateRange = `${formatDate(startDate)} - ${formatDate(endDate)}`;
      setValue('date', formattedDateRange, { shouldValidate: true });
      setDateModalVisible(false);
    }
  };

  const calculateDuration = (start: string, end: string) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    const diffTime = Math.abs(endDateObj.getTime() - startDateObj.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit',
    });
  };

  const handleDebtTypeConfirm = () => {
    setValue('type', selectedDebtType, { shouldValidate: true });
    debtTypeSheetRef.current?.dismiss();
  };

  const onSubmit = (data: { name: string; type: string; amount: string; date: string }) => {
    // Update the debt in your data store
    const updatedDebts = DummyDebts.map((d) =>
      d.id === Number(id) ? { 
        ...d, 
        type: data.type,
        name: data.name,
        totalAmount: Number(data.amount),
        dueDate: data.date
      } : d
    );
    console.log('Updated debt:', updatedDebts);
    router.back(); // Go back to the debt detail screen
  };

  const calculateSheetHeight = (options: string[]) => {
    const itemHeight = 60;
    const headerHeight = 50;
    const padding = 32;
    const totalHeight = options.length * itemHeight + headerHeight + padding;
    return Math.min(totalHeight, Dimensions.get('window').height * 0.8);
  };

  const getMarkedDates = () => {
    const markedDates: { [key: string]: any } = {};

    if (startDate) {
      markedDates[startDate] = {
        startingDay: true,
        color: '#8A4A65',
        textColor: 'white',
        customContainerStyle: { borderRadius: 50 },
      };
    }

    if (endDate) {
      markedDates[endDate] = {
        endingDay: true,
        color: '#8A4A65',
        textColor: 'white',
        customContainerStyle: { borderRadius: 50 },
      };
    }

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      let current = new Date(start);

      while (current <= end) {
        const currentDate = current.toISOString().split('T')[0];
        if (currentDate !== startDate && currentDate !== endDate) {
          markedDates[currentDate] = { color: '#FCE186', textColor: '#231B00' };
        }
        current.setDate(current.getDate() + 1);
      }
    }

    return markedDates;
  };

  if (!debt) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold text-red-500">Debt not found</Text>
      </View>
    );
  }

  return (
    <View className="mx-4 mr-6">
      <Stack.Screen options={{ headerTitle: 'Edit Debt' }} />
      
      {/* Debt Type Field */}
      <View className="mt-10">
        <Controller
          control={control}
          rules={{
            required: 'Debt type is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Debt type</Text>
              <TouchableOpacity
                onPress={() => debtTypeSheetRef.current?.present()}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || 'Select'}</Text>
                <SheetArrow />
              </TouchableOpacity>
            </View>
          )}
          name="type"
        />
        {errors.type && <Text className="text-red-700">{errors.type.message}</Text>}

        {/* Name Field */}
        <View className="">
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
      </View>

      {/* Amount Field */}
      <View className="mt-10">
        <Controller
          control={control}
          rules={{
            required: 'Amount is required',
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <Text className="text-reg mb-1 mt-6">Amount in UGX</Text>
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

      {/* Date Field */}
      <View className="mt-10">
        <Controller
          control={control}
          rules={{
            required: 'Date is required',
          }}
          render={({ field: { value } }) => (
            <View>
              <Text className="text-reg mb-1">Loan timeline</Text>
              <TouchableOpacity
                onPress={handleDatePress}
                className="flex-row items-center justify-between">
                <Text className="text-st mb-1">{value || '(dd/mm/yy) - (dd/mm/yy)'}</Text>
                <View className="flex-row items-center gap-4 rounded-lg border px-3 py-1">
                  <CalendarSync />
                  <Text className="text-st">
                    {startDate && endDate ? calculateDuration(startDate, endDate) : 'duration'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
          name="date"
        />
        {errors.date && <Text className="text-red-700">{errors.date.message}</Text>}
      </View>

      {/* Debt Type Selection Sheet */}
      <Sheet ref={debtTypeSheetRef} snapPoints={[calculateSheetHeight(debtTypes)]}>
        <View className="mb-3 flex-1">
          <Text className="text-ct ml-5">Debt type</Text>
          <View className="mx-8 mt-8">
            {debtTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleDebtTypeSelect(type)}
                className="mb-4 flex-row items-center gap-3">
                <View className="">
                  <BouncyCheckbox
                    isChecked={selectedDebtType === type}
                    onPress={() => handleDebtTypeSelect(type)}
                    fillColor={selectedDebtType === type ? '#34D399' : undefined}
                    size={24}
                    iconStyle={{ borderRadius: 12 }}
                  />
                </View>
                <Text className="text-reg">{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Button
            variant="secondary"
            className="mx-4 mb-8"
            title="Confirm"
            onPress={handleDebtTypeConfirm}
          />
        </View>
      </Sheet>

      {/* Date Selection Modal */}
      <Modal visible={isDateModalVisible} transparent={false} animationType="slide">
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="w-[90%] rounded-lg bg-white p-5">
            <Text className="text-center text-lg font-bold">Loan timeline</Text>
            <View className="mt-4 flex-row items-center justify-between">
              <Text className="text-center text-lg font-bold">
                {startDate && endDate
                  ? `${formatDate(startDate)} - ${formatDate(endDate)}`
                  : '(dd/mm/yy) - (dd/mm/yy)'}
              </Text>
            </View>
            <ScrollView>
              <Calendar
                current={startDate || undefined}
                onDayPress={(day) => handleDateSelect(day.dateString)}
                markedDates={getMarkedDates()}
                markingType="period"
                theme={{
                  calendarBackground: 'white',
                  textSectionTitleColor: '#b6c1cd',
                  selectedDayBackgroundColor: '#34D399',
                  selectedDayTextColor: 'white',
                  todayTextColor: '#34D399',
                  dayTextColor: '#2d4150',
                  textDisabledColor: '#d9e1e8',
                  arrowColor: '#34D399',
                  monthTextColor: '#34D399',
                  textDayFontWeight: '300',
                  textMonthFontWeight: 'bold',
                  textDayHeaderFontWeight: '300',
                  textDayFontSize: 16,
                  textMonthFontSize: 18,
                  textDayHeaderFontSize: 16,
                }}
                className="mb-4"
                enableSwipeMonths={true}
                scrollEnabled={true}
                calendarHeight={600}
              />
            </ScrollView>
            <View className="flex-row justify-between">
              <Button
                title="Cancel"
                onPress={() => setDateModalVisible(false)}
                variant="secondary"
              />
              <Button title="Confirm" onPress={confirmDates} disabled={!startDate || !endDate} />
            </View>
          </View>
        </View>
      </Modal>

      {/* Submit Button */}
      <View className="mt-16">
        <Button
          className={`${isValid ? 'opacity-100' : 'opacity-50'}`}
          title="Save Changes"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        />
      </View>
    </View>
  );
};

export default EditDebt;