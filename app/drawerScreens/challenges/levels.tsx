import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import CelebrateBig from '~/assets/svgs/celebrateBIg'; // Reuse CelebrateBig for levels
import LevelItem from '~/components/LevelItem'; // Import the reusable LevelItem component
import LevelsRookie from '~/assets/svgs/levelsRookie';
import LevelNovice from '~/assets/svgs/levelNovice';
import LevelLearner from '~/assets/svgs/levelLearner';
import LevelBeginner from '~/assets/svgs/levelBeginner';
import levelApprentice from '~/assets/svgs/levelApprentice';
import LevelSaver from '~/assets/svgs/levelSaver';
import LevelJourneyman from '~/assets/svgs/levelJourneyman';
import LevelBudgetter from '~/assets/svgs/levelBudgetter';
import CustomBottomSheet from '~/components/CustomBottomSheet';
import PendingFace from '~/assets/svgs/pendingFace';

const Levels = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const levelData = [
    {
      id: 1,
      Icon: LevelsRookie,
      title: 'Rookie – Create your first \nfinancial goal.',
      status: 'earned',
      CelebrateIcon: CelebrateBig, // Add CelebrateBig for the first level
      PendingIcon: PendingFace,
    },
    {
      id: 2,
      Icon: LevelNovice,
      title: 'Novice – Log 10 expenses.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 3,
      Icon: LevelLearner,
      title: 'Learner – Save UGX 50,000.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 4,
      Icon: LevelBeginner,
      title: 'Beginner – Track expenses for 1 \nweek.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 5,
      Icon: levelApprentice,
      title: 'Apprentice – Set up a budget \nand stick to it for 1 month.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 6,
      Icon: LevelSaver,
      title: 'Sparring Saver – Save UGX \n100,000.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 7,
      Icon: LevelJourneyman,
      title: 'Journeyman – Track expenses \nfor 30 days.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 8,
      Icon: LevelBudgetter,
      title: 'Budgeter – Stick to a budget for \n2 consecutive months.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    // Add more levels here as needed
  ];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsBottomSheetVisible(true);
  };

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen
        options={{
          headerTitle: 'Levels',
        }}
      />
      <FlatList
        data={levelData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} // Remove scrollbar
        renderItem={({ item }) => (
          <LevelItem
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

export default Levels;
