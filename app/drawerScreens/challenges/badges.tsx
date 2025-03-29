import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import BadgeFirstStep from '~/assets/svgs/badgeFirstStep';
import BadgeExpenseTracker from '~/assets/svgs/BadgeExpenseTracker';
import BadgeItem from '~/components/BadgeItem';
import BadgeBB from '~/assets/svgs/badgeBudgetBeginner';
import BadgeDT from '~/assets/svgs/badgeDiligentTracker';
import BadgeSS from '~/assets/svgs/badgeSavingStarter';
import BadgeGS from '~/assets/svgs/badgeGoalStarter';
import BadgeEB from '~/assets/svgs/badgeEarlyBird';
import CustomBottomSheet from '~/components/CustomBottomSheet';
import PendingFace from '~/assets/svgs/pendingFace';
import CelebrateBig from '~/assets/svgs/celebrateBIg';

const Badges = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const badgeData = [
    {
      id: 1,
      Icon: BadgeFirstStep,
      title: `First Step – Log your first
expense.`,
      status: 'earned',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 2,
      Icon: BadgeExpenseTracker,
      title: `Expense Tracker – Track
expenses for 7 consecutive
days.`,
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 3,
      Icon: BadgeEB,
      title: `Early Bird – Track expenses first
thing in the morning for 7 days.`,
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 4,
      Icon: BadgeBB,
      title: `Budget Beginner – Stick to a
budget for one month.`,
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 5,
      Icon: BadgeDT,
      title: `Diligent Tracker – Track
expenses for 30 consecutive
days.`,
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 6,
      Icon: BadgeSS,
      title: `Savings Starter – Save 10% of
your monthly income.`,
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 7,
      Icon: BadgeGS,
      title: `Goal Setter – Create your first
savings goal.`,
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
  ];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsBottomSheetVisible(true);
  };

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen
        options={{
          headerTitle: 'Badge',
        }}
      />
      <FlatList
        data={badgeData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} // Remove scrollbar
        renderItem={({ item }) => (
          <BadgeItem
            Icon={item.Icon}
            title={item.title}
            CelebrateIcon={item.CelebrateIcon}
            onPress={() => handleItemPress(item)}
          />
        )}
        contentContainerStyle={{ paddingVertical: 16 }}
      />
      <CustomBottomSheet
        isVisible={isBottomSheetVisible}
        onClose={() => setIsBottomSheetVisible(false)}
        selectedItem={selectedItem}
      />
    </View>
  );
};

export default Badges;
