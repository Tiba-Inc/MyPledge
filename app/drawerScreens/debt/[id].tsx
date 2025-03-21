import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { dummyDebts } from '~/lib/data/dummyDebts';
import { useRouter, Stack } from 'expo-router';
import Bank from '~/assets/svgs/bank';
import CalendarSync from '~/assets/svgs/calendarSync';
import Minus from '~/assets/svgs/minus';
import Plus from '~/assets/svgs/plus';
import * as Progress from 'react-native-progress';
import Check from '~/assets/svgs/check';
import Tick from '~/assets/svgs/tick';
import Pencil from '~/assets/svgs/pencil';
import Trash from '~/assets/svgs/trash';

const DebtDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const debt = dummyDebts.find((debt) => debt.id === Number(id));

  if (!debt) {
    return (
      <View>
        <Text>Debt not found</Text>
      </View>
    );
  }

  const debtIcons = {
    'I lent money': Plus,
    'I borrowed from a bank': Bank,
    'I borrowed from someone': Minus,
  };

  const debtColors = {
    'I lent money': '#34C759',
    'I borrowed from a bank': '#AF52DE',
    'I borrowed from someone': '#FF3B30',
  };

  const DebtIcon = debtIcons[debt.type] || Bank;
  const debtColor = debtColors[debt.type] || '#AF52DE';
  const progress = debt.paidAmount / debt.totalAmount;
  const progressPercentage = `${(progress * 100).toFixed(0)}%`;

  // Render a single repayment item
  const renderRepayment = ({ item }) => (
    <View className="flex-row items-center gap-4 border-b border-gray-200 py-4">
      <Tick />
      <View className="gap-2">
        <Text className="text-reg">UGX {Number(item.amount)}</Text>
        <Text className="text-reg">{item.date}</Text>
      </View>
    </View>
  );

  // Navigate to the edit screen with the debt ID
  const handleEdit = () => {
    router.push({
      pathname: '/drawerScreens/debt/editDebt',
      params: { id: debt.id }, // Pass the debt ID to the edit screen
    });
  };

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen
        options={{
          headerTitle: 'Debt details',
          // Conditionally set the headerRight based on the debt status
          headerRight: () =>
            debt.status === 'active' ? (
              <View className="flex-row items-center gap-6 px-1">
                <TouchableOpacity onPress={handleEdit}>
                  <Pencil />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Trash />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Check width={24} height={24} color={'#514347'} />
                </TouchableOpacity>
              </View>
            ) : null, // No headerRight for closed debts
        }}
      />
      <View className="mt-2 items-center">
        <View
          className="size-12 items-center justify-center rounded-full"
          style={{ backgroundColor: debtColor }}>
          <DebtIcon color={'#FFFFFF'} />
        </View>
        <View className="mt-6 items-center">
          <Text className="text-cd">{debt.type}</Text>
          <Text className="text-ct">UGX {Number(debt.totalAmount)}</Text>
        </View>
      </View>

      <View className="mx-2 mt-7 gap-6">
        <Text className="text-cd">Overview</Text>

        <View className="flex-row items-center gap-4">
          <Progress.Bar
            progress={progress}
            width={null}
            height={10}
            color={debtColor}
            unfilledColor="#E0E0E0"
            borderWidth={0}
            borderRadius={5}
            className="my-4 flex-1"
          />
          <Text className="text-reg">{progressPercentage}</Text>
        </View>

        <View className="flex-row items-center">
          <View className="w-24 flex-row items-center gap-4">
            <CalendarSync />
            <Text className="text-reg">Paid off</Text>
          </View>
          <View className="mx-2 w-28 border-b border-gray-300" />
          <Text className="text-reg">
            UGX {Number(debt.paidAmount)} of {'\n'}UGX {Number(debt.totalAmount)}
          </Text>
        </View>

        <View className="flex-row items-center">
          <View className="w-24 flex-row items-center gap-4">
            <CalendarSync />
            <Text className="text-reg">Due date</Text>
          </View>
          <View className="mx-2 w-28 border-b border-gray-300" />
          <Text className="text-reg">{debt.dueDate}</Text>
        </View>

        <View className="flex-row items-center">
          <View className="w-24 flex-row items-center gap-4">
            <CalendarSync />
            <Text className="text-reg">Name</Text>
          </View>
          <View className="mx-2 w-28 border-b border-gray-300" />
          <Text className="text-reg">{debt.name}</Text>
        </View>
      </View>

      <View className="mt-6">
        <Text className="text-btn">Payments history</Text>
        <FlatList
          data={debt.repayments}
          renderItem={renderRepayment}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* Conditionally render the floating button for active debts */}
      {debt.status === 'active' && (
        <TouchableOpacity
          onPress={() => router.push('/drawerScreens/debt/repayDebt')}
          className="absolute bottom-10 right-6 flex-1 rounded-full bg-[#fce186] p-4 shadow-lg shadow-black">
          <Plus color={'#231B00'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default DebtDetail;
