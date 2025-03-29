import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import CelebrateBig from '~/assets/svgs/celebrateBIg';
import StreakItem from '~/components/StreakItem'; // You'll need to create this similar to LevelItem
import CustomBottomSheet from '~/components/CustomBottomSheet';
import PendingFace from '~/assets/svgs/pendingFace';
import StreakDailyTracker from '~/assets/svgs/streakDailyTracker';
import StreakEarlyLogger from '~/assets/svgs/streakEarlyLogger';
import NoMissDays from '~/assets/svgs/streakNoMissDays';
import StreakWS from '~/assets/svgs/streakWS';
import StreakEl from '~/assets/svgs/streakEL';
import StreakBB from '~/assets/svgs/streakBB';
import StreakWDS from '~/assets/svgs/streakWDS';

const Streaks = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const streakData = [
    {
      id: 1,
      Icon: StreakDailyTracker,
      title: 'Daily Tracker – Track \nexpenses for 7 consecutive \ndays.',
      status: 'earned',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 2,
      Icon: StreakEarlyLogger,
      title: 'Early Logger – Log your first \nexpense each day for 7 days.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 3,
      Icon: NoMissDays,
      title: 'No Miss Days – Log expenses \nwithout missing a day for 14 \ndays.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 4,
      Icon: StreakWS,
      title: 'Weekly Saver – Save a set \namount every week for 4 weeks.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 5,
      Icon: StreakEl,
      title: 'Expense Logger – Log all \nexpenses daily for 30 \nconsecutive days.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 6,
      Icon: StreakBB,
      title: 'Budget Boss – Follow a budget \nfor 4 consecutive weeks.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 7,
      Icon: StreakWDS,
      title: 'Weekend Saver – Spend nothing \non non-essentials every \nweekend for a month.',
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
          headerTitle: 'Streaks',
        }}
      />
      <FlatList
        data={streakData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <StreakItem
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

export default Streaks;
