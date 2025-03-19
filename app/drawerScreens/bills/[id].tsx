import { View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { billsData } from '~/lib/data/billsData';
import { useRouter, Stack } from 'expo-router';
import Detail from '~/assets/svgs/detail';
import CalendarSync from '~/assets/svgs/calendarSync';
import Calendar from '~/assets/svgs/calendar';
import Pencil from '~/assets/svgs/pencil';
import Trash from '~/assets/svgs/trash';

const BillDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams(); // Get dynamic ID from URL params
  const bill = billsData.find((b) => b.id.toString() === id); // Find the bill

  if (!bill) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold text-red-500">Bill not found</Text>
      </View>
    );
  }

  return (
    <View className="mx-4 mt-4 flex-1 bg-white">
      <Stack.Screen
        options={{
          headerTitle: 'Bill details',
          headerRight: () => (
            <View className=" flex-row items-center gap-6 px-1">
              <TouchableOpacity onPress={() => router.push('./editBill')}>
                <Pencil />
              </TouchableOpacity>
              <TouchableOpacity>
                <Trash />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View className="items-center">
        <View className="size-12 items-center justify-center rounded-full bg-[#AF52DE]">
          <Detail />
        </View>
        <View className="mt-6 items-center">
          <Text className="text-cd">{bill.name}</Text>
          <Text className="text-ct">UGX -{Number(bill.amount).toFixed(2)}</Text>
        </View>
        <View className="mt-4 flex-row items-center gap-4 rounded-lg border px-3 py-1">
          <CalendarSync />
          <Text className="text-gray-600">{bill.frequency}</Text>
        </View>
      </View>

      <View className="mx-2 mt-7 gap-6">
        <Text className="text-cd">Overview</Text>

        {/* Due Date Section */}
        <View className="flex-row items-center">
          <View className="w-24 flex-row items-center gap-4">
            <CalendarSync />
            <Text className="text-reg">Due date</Text>
          </View>
          {/* Horizontal Line with Fixed Width */}
          <View className="mx-2 w-32 border-b border-gray-300" />
          <Text className="text-reg">{bill.date}</Text>
        </View>

        {/* Frequency Section */}
        <View className="flex-row items-center">
          <View className="w-24 flex-row items-center gap-4">
            <CalendarSync />
            <Text className="text-reg">Frequency</Text>
          </View>
          {/* Horizontal Line with Fixed Width */}
          <View className="mx-2 w-32 border-b border-gray-300" />
          <Text className="text-reg">{bill.frequency}</Text>
        </View>

        {/* Type Section */}
        <View className="flex-row items-center">
          <View className="w-24 flex-row items-center gap-4">
            <CalendarSync />
            <Text className="text-reg">Type</Text>
          </View>
          {/* Horizontal Line with Fixed Width */}
          <View className="mx-2 w-32 border-b border-gray-300" />
          <Text className="text-reg">{bill.billCategory}</Text>
        </View>
      </View>
    </View>
  );
};

export default BillDetails;
