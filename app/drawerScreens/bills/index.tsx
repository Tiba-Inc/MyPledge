import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import Billz from '~/assets/svgs/billz';
import Plus from '~/assets/svgs/plus';
import { useRouter, Stack } from 'expo-router';
import { billsData } from '~/lib/data/billsData';
import CalendarSync from '~/assets/svgs/calendarSync';

type Bill = {
  id: number;
  name: string;
  billCategory: string;
  amount: string;
  frequency: string;
  date: string; // Keeping as string for now; consider parsing as Date when needed
  notifications: string;
  isPaid: boolean;
};

const Bills = () => {
  const router = useRouter();
  const [bills, setBills] = useState<Bill[]>(billsData);

  const navigateToAddBill = () => {
    router.push('/drawerScreens/bills/addBill');
    console.log('Navigating to Add Bill screen');
  };

  const navigateToBillDetails = (billId: number) => {
    router.push(`/drawerScreens/bills/${billId}`); // Navigate using dynamic route
  };

  return (
    <View className="flex-1 bg-white px-4">
      <Stack.Screen options={{ headerTitle: 'Bills' }} />

      <FlatList
        className="flex-1"
        data={bills}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} // Remove scrollbar
        ListEmptyComponent={() => (
          <View className="mt-56 flex-1 items-center justify-center">
            <Billz />
            <Text className="my-3 text-center text-xl font-semibold">No Bills Added Yet</Text>
            <Text className="text-gray-600">Click the "+" button to add your monthly bills.</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="flex-row items-center justify-between py-4"
            onPress={() => navigateToBillDetails(item.id)} // Navigate to dynamic route
          >
            {/* Vertical Colored Component */}
            <View className="bg-[#AF52DE] mr-2 h-full w-1 rounded-full" />

            {/* Bill Content */}
            <View className="flex-1 flex-row items-center justify-between">
              <View>
                <Text className="text-st">{item.name}</Text>
                <View className="flex-row items-center gap-4">
                  <CalendarSync />
                  <Text className="text-reg">{item.frequency}</Text>
                </View>
              </View>
              <View>
                <Text className="text-st mr-2">
                  ${item.amount ? Number(item.amount).toFixed(2) : '0.00'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* Floating Action Button */}
      <TouchableOpacity
        className="absolute bottom-10 right-8 rounded-full bg-yellow-400 p-4 shadow-lg"
        onPress={navigateToAddBill}>
        <Plus color="#231B00" />
      </TouchableOpacity>
    </View>
  );
};

export default Bills;
