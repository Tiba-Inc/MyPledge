import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import RightArrow from '~/assets/svgs/rightArrow';
import { DummyGoals } from '~/lib/data/dummyGoalsData';

type Props = {};

const ReachedGoals = (props: Props) => {
  const router = useRouter();

  // Filter reached goals
  const reachedGoals = DummyGoals.filter((goal) => goal.savedAmount >= goal.targetAmount);

  // Calculate total savings for reached goals
  const TotalSavings = reachedGoals.reduce((total, goal) => total + goal.savedAmount, 0);

  // Calculate progress percentage for each goal
  const CalculateProgress = (savedAmount: number, targetAmount: number) => {
    return savedAmount / targetAmount;
  };

  // Render each goal item
  const renderGoalItem = ({ item }: { item: (typeof DummyGoals)[0] }) => {
    const progress = CalculateProgress(item.savedAmount, item.targetAmount);

    return (
      <TouchableOpacity
        onPress={() => router.push(`../goals/${item.id}`)} // Navigate to goal details
        className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow-sm">
        <View className="flex-1 flex-row items-center">
          <Progress.Circle
            size={50}
            progress={progress}
            color="#8A4A65" // Progress color
            unfilledColor="#FCE186" // Unfilled color
            borderWidth={0} // Remove border
            thickness={5} // Thickness of the progress bar
            showsText={true} // Show progress text
            formatText={() => `${Math.round(progress * 100)}%`} // Format text
          />
          <View className="ml-4 flex-1">
            <Text className="text-cd">{item.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* Total savings for reached goals
      <View className="mx-4 mt-6">
        <Text className="text-reg">Total savings</Text>
        <Text className="text-heading">UGX {totalSavings.toLocaleString()}</Text>
      </View> */}

      {/* Render reached goals */}
      <FlatList
        data={reachedGoals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGoalItem}
        contentContainerStyle={{ padding: 16 }}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Text className="text-lg text-gray-800">No reached goals found</Text>
          </View>
        }
      />
    </View>
  );
};

export default ReachedGoals;
