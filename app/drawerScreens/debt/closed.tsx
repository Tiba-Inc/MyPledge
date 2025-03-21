import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import Ledger from '~/assets/svgs/ledger';
import { Button } from '~/components/Button';
import { useRouter } from 'expo-router';
import { DebtData } from '~/app/drawerScreens/debt/addDebt';
import { dummyDebts } from '~/lib/data/dummyDebts'; // Import dummyDebts
import { SafeAreaView } from 'react-native-safe-area-context';
import Minus from '~/assets/svgs/minus';
import Plus from '~/assets/svgs/plus';
import Bank from '~/assets/svgs/bank';
import CalendarSync from '~/assets/svgs/calendarSync';
import * as Progress from 'react-native-progress'; // Import Progress.Bar

type Props = {};

const Closed = (props: Props) => {
  const router = useRouter();

  // Filter the dummy data to get only closed debts
  const closedDebts = dummyDebts.filter((debt) => debt.status === 'closed');

  // Define icons and colors for different debt types
  const debtIcons = {
    'I lent money': Plus,
    'I borrowed from a bank': Bank,
    'I borrowed from someone': Minus,
  };

  const debtColors = {
    'I lent money': '#34C759', // Green
    'I borrowed from a bank': '#AF52DE', // Purple
    'I borrowed from someone': '#FF3B30', // Red
  };

  // Render item for FlatList
  const renderItem = ({ item }: { item: DebtData }) => {
    // Calculate progress based on total debt and amount paid so far
    const progress = item.paidAmount / item.totalAmount;
    const progressPercentage = `${Math.round(progress * 100)}%`;

    // Get the icon and color for the debt type
    const DebtIcon = debtIcons[item.type] || Bank;
    const debtColor = debtColors[item.type] || '#AF52DE';

    return (
      <TouchableOpacity
        onPress={() => router.push(`/drawerScreens/debt/${item.id}`)}
        className="mt-2 gap-1">
        <View className="flex-row items-center gap-2">
          <View
            className="size-8 items-center justify-center rounded-full"
            style={{ backgroundColor: debtColor }}>
            {/* Reduce the size of the Bank logo */}
            {item.type === 'I borrowed from a bank' ? (
              <DebtIcon width={20} height={20} />
            ) : (
              <DebtIcon color={'#FFFFFF'} />
            )}
          </View>
          <Text>{item.name}</Text>
        </View>
        <Text>{item.totalAmount}</Text>
        <View className="flex-row gap-2">
          <CalendarSync />
          <Text>{item.dueDate}</Text>
        </View>
        <View className="flex-row items-center gap-4">
          <Progress.Bar
            progress={progress}
            width={null}
            height={5}
            color="#8A4A65" // Covered color
            unfilledColor="#FCE186" // Remaining color
            borderWidth={0}
            borderRadius={5}
            className="flex-1"
          />
          <Text className="text-reg">{progressPercentage}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Component to render when the list is empty
  const renderEmptyComponent = () => (
    <View className="mt-48 items-center">
      <Ledger />
      <View className="my-4 items-center gap-4">
        <Text className="text-title">No closed debts found</Text>
        <Text className="text-cd text-center">
          Once you pay off a debt, it will appear here. {'\n'}Keep up the good work!
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView edges={['top', 'bottom']} className="mt-4 flex-1">
      <View className="mx-4 -mt-10 flex-1">
        <FlatList
          data={closedDebts}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()} // Ensure unique keys
          ListEmptyComponent={renderEmptyComponent}
          contentContainerStyle={{ flexGrow: 1 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Closed;
