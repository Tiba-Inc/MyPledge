import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';
import RightArrow from '~/assets/svgs/rightArrow';
import { DummyGoals } from '~/lib/data/dummyGoalsData';

type Props = {};

const GoalsActive = (props: Props) => {
  const router = useRouter();

  const activeGoals = DummyGoals.filter((goal) => goal.status === 'active');

  const totalSavings = activeGoals.reduce((total, goal) => total + goal.savedAmount, 0);

  const calculateProgress = (savedAmount: number, targetAmount: number) => {
    return savedAmount / targetAmount;
  };

  const renderGoalItem = ({ item }: { item: (typeof DummyGoals)[0] }) => {
    const progress = calculateProgress(item.savedAmount, item.targetAmount);

    return (
      <TouchableOpacity
        onPress={() => router.push(`../goals/${item.id}`)}
        className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow-sm">
        <View className="flex-1 flex-row items-center">
          <Progress.Circle
            size={50}
            progress={progress}
            color="#8A4A65"
            unfilledColor="#FCE186"
            borderWidth={0}
            thickness={5}
            showsText={true}
            formatText={() => `${Math.round(progress * 100)}%`}
          />
          <View className="ml-4 flex-1">
            <Text className="text-cd">{item.name}</Text>
            <Text className="text-reg">End Date: {item.endDate}</Text>
          </View>
        </View>
        <View className="mr-2">
          <RightArrow />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="mx-4 mt-6">
        <Text className="text-reg">Total savings</Text>
        <Text className="text-heading">UGX {totalSavings.toLocaleString()}</Text>
      </View>
      <FlatList
        data={activeGoals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGoalItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default GoalsActive;
