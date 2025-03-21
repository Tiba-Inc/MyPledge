import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { dummyDebts } from '~/lib/data/dummyDebts';
import { useState, useEffect } from 'react';

const EditDebt = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const debt = dummyDebts.find((debt) => debt.id === Number(id));

  // State to hold the edited debt data
  const [editedDebt, setEditedDebt] = useState({
    name: debt?.name || '',
    totalAmount: debt?.totalAmount || 0,
    paidAmount: debt?.paidAmount || 0,
    dueDate: debt?.dueDate || '',
    type: debt?.type || '',
  });

  // Handle input changes
  const handleInputChange = (field, value) => {
    setEditedDebt((prev) => ({ ...prev, [field]: value }));
  };

  // Save the edited debt
  const handleSave = () => {
    // Update the debt in the dummy data (replace this with your actual data update logic)
    const updatedDebts = dummyDebts.map((debt) =>
      debt.id === Number(id) ? { ...debt, ...editedDebt } : debt
    );
    console.log('Updated Debts:', updatedDebts);

    // Navigate back to the debt detail screen
    router.back();
  };

  if (!debt) {
    return (
      <View>
        <Text>Debt not found</Text>
      </View>
    );
  }

  return (
    <View className="mx-4 mt-4">
      <Text className="text-title">Edit Debt</Text>

      <View className="mt-6 gap-4">
        <TextInput
          className="rounded border border-gray-300 p-2"
          placeholder="Name"
          value={editedDebt.name}
          onChangeText={(text) => handleInputChange('name', text)}
        />
        <TextInput
          className="rounded border border-gray-300 p-2"
          placeholder="Total Amount"
          value={editedDebt.totalAmount.toString()}
          onChangeText={(text) => handleInputChange('totalAmount', Number(text))}
          keyboardType="numeric"
        />
        <TextInput
          className="rounded border border-gray-300 p-2"
          placeholder="Paid Amount"
          value={editedDebt.paidAmount.toString()}
          onChangeText={(text) => handleInputChange('paidAmount', Number(text))}
          keyboardType="numeric"
        />
        <TextInput
          className="rounded border border-gray-300 p-2"
          placeholder="Due Date"
          value={editedDebt.dueDate}
          onChangeText={(text) => handleInputChange('dueDate', text)}
        />
        <TextInput
          className="rounded border border-gray-300 p-2"
          placeholder="Type"
          value={editedDebt.type}
          onChangeText={(text) => handleInputChange('type', text)}
        />
      </View>

      <TouchableOpacity className="mt-6 items-center rounded bg-blue-500 p-3" onPress={handleSave}>
        <Text className="text-white">Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditDebt;
