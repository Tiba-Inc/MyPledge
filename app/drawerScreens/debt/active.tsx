import { View, Text, FlatList, TouchableOpacity } from 'react-native'; // Import TouchableOpacity
import React from 'react';
import Ledger from '~/assets/svgs/ledger';
import { Button } from '~/components/Button';
import { useRouter } from 'expo-router';
import { DebtData } from '~/app/drawerScreens/debt/addDebt';
import { dummyDebts } from '~/lib/data/dummyDebts';
import { SafeAreaView } from 'react-native-safe-area-context'; // Import SafeAreaView

type Props = {};

const Active = (props: Props) => {
  const router = useRouter();

  // Filter the dummy data to get only active debts
  const activeDebts = dummyDebts.filter((debt) => debt.status === 'active');

  // Render item for FlatList
  const renderItem = ({ item }: { item: DebtData }) => (
    <TouchableOpacity
      onPress={() => router.push(`/drawerScreens/debt/${item.id}`)} // Navigate to debt details screen
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.name}</Text>
      <Text>{item.amount}</Text>
      <Text>{item.date}</Text>
      <Text>{item.type}</Text>
    </TouchableOpacity>
  );

  // Component to render when the list is empty
  const renderEmptyComponent = () => (
    <View className="mt-48 items-center">
      <Ledger />
      <View className="my-4 items-center gap-4">
        <Text className="text-title">No active debts found</Text>
        <Text className="text-cd text-center">
          Add your debts to start tracking and {'\n'}managing them effectively.
        </Text>
      </View>
      <Button
        className="w-full"
        title="Add debt"
        variant="secondary"
        onPress={() => router.push('/drawerScreens/debt/addDebt')}
      />
    </View>
  );

  return (
    <SafeAreaView edges={['top', 'bottom']} className="mt-4 flex-1">
      {/* Wrap with SafeAreaView */}
      <View className="mx-4 -mt-10 flex-1">
        <FlatList
          data={activeDebts}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false} // Remove scrollbar
          keyExtractor={(item) => item.id.toString()} // Use item.id as the key
          ListEmptyComponent={renderEmptyComponent} // Render this when the list is empty
          contentContainerStyle={{ flexGrow: 1 }} // Ensure the list takes up the full space
        />
      </View>
    </SafeAreaView>
  );
};

export default Active;
