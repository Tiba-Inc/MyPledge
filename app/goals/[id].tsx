import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import * as Progress from 'react-native-progress'; // Import react-native-progress
import { DummyGoals } from '~/lib/data/dummyGoalsData'; // Import your dummy data
import Pencil from '~/assets/svgs/pencil'; // Import your icons
import Trash from '~/assets/svgs/trash';
import Check from '~/assets/svgs/check';
import { Button } from '~/components/Button';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';

type Props = {};

const GoalDetails = (props: Props) => {
  const { id } = useLocalSearchParams(); // Get the goal ID from the URL
  const router = useRouter();

  // Find the goal by ID
  const goal = DummyGoals.find((goal) => goal.id === Number(id));

  // Sheet ref for Add money
  const addMoneySheetRef = useSheetRef();

  // State to manage the amount input
  const [amountInput, setAmountInput] = useState('');

  if (!goal) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg text-gray-800">Goal not found</Text>
      </View>
    );
  }

  // Handle edit action
  const handleEdit = () => {
    router.push(`./editGoal`); // Navigate to edit screen
  };

  // Handle delete action
  const handleDelete = () => {
    // Add logic to delete the goal
    console.log('Delete goal:', goal.id);
  };

  // Handle mark as complete action
  const handleComplete = () => {
    // Add logic to mark the goal as complete
    console.log('Mark goal as complete:', goal.id);
  };

  // Handle Add money sheet confirmation
  const handleAddMoneyConfirm = () => {
    // Add logic to save the amount
    console.log('Add money:', amountInput);
    addMoneySheetRef.current?.dismiss();
  };

  // Calculate progress percentage
  const progress = goal.savedAmount / goal.targetAmount;

  // Check if the goal is reached
  const isReachedGoal = goal.savedAmount >= goal.targetAmount;

  return (
    <View className="flex-1 bg-gray-100 p-4">
      {/* Customize the header */}
      <Stack.Screen
        options={{
          headerTitle: 'Goal Details',
          headerRight: () =>
            goal.status === 'active' ? (
              <View className="flex-row items-center gap-6 px-1">
                <TouchableOpacity onPress={handleDelete}>
                  <Trash />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleComplete}>
                  <Check width={24} height={24} color={'#514347'} />
                </TouchableOpacity>
              </View>
            ) : null, // No headerRight for reached goals
        }}
      />

      {/* Render goal details */}
      <View className="">
        <View className="mx-4 mt-2 items-center">
          <Text className="text-cd">{goal.name}</Text>
          <Text className="text-ct">UGX {goal.targetAmount.toLocaleString()}</Text>
        </View>
        <View className="mb-6 mt-4 items-center">
          <Text className="text-cd rounded-3xl border px-3 py-1">{goal.category}</Text>
        </View>

        {/* Buttons (only for active goals) */}
        {!isReachedGoal && (
          <View className="mb-6 flex-row justify-between gap-6">
            <Button
              onPress={() => addMoneySheetRef.current?.present()} // Open Add money sheet
              className="flex-grow"
              title="Add money"
              variant="secondary"
            />
            <Button
              onPress={handleEdit}
              className="flex-grow"
              title="Edit goal"
              variant="secondary"
            />
          </View>
        )}

        {/* Progress Bar */}
        <View className="mb-2">
          <Progress.Bar
            progress={progress}
            width={null} // Use full width of the container
            color="#8A4A65" // Progress color
            unfilledColor="#FCE186" // Unfilled color
            borderWidth={0} // Remove border
            height={10} // Height of the progress bar
            borderRadius={8} // Rounded corners
          />
        </View>

        {/* Start and End Dates */}
        <View className="mb-6 flex-row justify-between">
          <View>
            <Text className="text-reg">{goal.startDate}</Text>
          </View>
          <View>
            <Text className="text-reg">{goal.endDate}</Text>
          </View>
        </View>

        <View className="mx-2 gap-3">
          <View className="flex-row items-center">
            <View className="w-24 flex-row items-center gap-4">
              <Text className="text-reg">Last added amount</Text>
            </View>
            <View className="mx-2 w-36 border-b border-gray-300" />
            <Text className="text-reg">{goal.savedAmount}</Text>
          </View>
          <View className="flex-row items-center">
            <View className="w-24 flex-row items-center gap-4">
              <Text className="text-reg">Est. time to reach goal</Text>
            </View>
            <View className="mx-2 w-36 border-b border-gray-300" />
            <Text className="text-reg">{goal.endDate}</Text>
          </View>
        </View>
      </View>

      {/* Add Money Sheet (only for active goals) */}
      {!isReachedGoal && (
        <Sheet ref={addMoneySheetRef} snapPoints={[300]} enablePanDownToClose={false}>
          <View className="flex-1">
            <View className="p-4">
              <Text className="text-ct mb-4">Add money</Text>
              <TextInput
                placeholder="0"
                value={amountInput}
                onChangeText={setAmountInput}
                keyboardType="number-pad"
                className="placeholder:text-center placeholder:text-[57px] placeholder:text-[#514347]"
              />
              <Button
                className="mt-4"
                variant="secondary"
                title="Confirm"
                onPress={handleAddMoneyConfirm}
              />
            </View>
          </View>
        </Sheet>
      )}
    </View>
  );
};

export default GoalDetails;