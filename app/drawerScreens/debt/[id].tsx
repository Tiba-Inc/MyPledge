import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { dummyDebts } from '~/lib/data/dummyDebts'; // Import the dummy data

const DebtDetail = () => {
  const { id } = useLocalSearchParams(); // Access the dynamic `id` parameter

  // Find the debt in the dummyDebts array
  const debt = dummyDebts.find((debt) => debt.id === Number(id));

  if (!debt) {
    return (
      <View>
        <Text>Debt not found</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Debt Details</Text>
      <Text>Name: {debt.name}</Text>
      <Text>Amount: {debt.amount}</Text>
      <Text>Date: {debt.date}</Text>
      <Text>Type: {debt.type}</Text>
      <Text>Status: {debt.status}</Text>
    </View>
  );
};

export default DebtDetail;
