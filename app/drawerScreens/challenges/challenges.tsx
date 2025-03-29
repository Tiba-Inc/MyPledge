import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import CelebrateBig from '~/assets/svgs/celebrateBIg'; // Reuse CelebrateBig for challenges
import ChallengeItem from '~/components/ChallengeItem'; // Import the reusable ChallengeItem component
import ChallengesDET from '~/assets/svgs/ChallengesDET';
import ChallengesNCW from '~/assets/svgs/challengesNCW';
import ChallengesTRL from '~/assets/svgs/ChallengesTYL';
import ChallengesWSF from '~/assets/svgs/ChallengesWSF';
import ChallengesFFD from '~/assets/svgs/challengesFFD';
import ChallengesBS from '~/assets/svgs/challengesBS';
import ChallengesDoS from '~/assets/svgs/challengesDoS';
import CustomBottomSheet from '~/components/CustomBottomSheet';
import PendingFace from '~/assets/svgs/pendingFace';

const Challenges = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState(null);
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const challengeData = [
    {
      id: 1,
      Icon: ChallengesDET,
      title: 'Daily Expense Tracker – \nLog every single expense \nfor 7 days.',
      status: 'pending',
      CelebrateIcon: CelebrateBig, // Add CelebrateBig for the first challenge
      PendingIcon: PendingFace,
    },
    {
      id: 2,
      Icon: ChallengesNCW,
      title: 'No Coffee Week – Avoid buying \ncoffee for a week.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 3,
      Icon: ChallengesTRL,
      title: 'Track Your Lunch – Track your \nlunch expenses for a week.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 4,
      Icon: ChallengesWSF,
      title: 'Weekend Spend-Free – Spend \nnothing for 2 consecutive \nweekends.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 5,
      Icon: ChallengesFFD,
      title: 'Fast Food Detox – Avoid fast \nfood for 30 days.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 6,
      Icon: ChallengesBS,
      title: 'Budget Stickler – Stick to your \nbudget for 1 month.',
      status: 'pending',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    {
      id: 7,
      Icon: ChallengesDoS,
      title: '10 Days of Saving – Save a \nsmall amount every day for 10 \ndays.',
      status: 'earned',
      CelebrateIcon: CelebrateBig,
      PendingIcon: PendingFace,
    },
    // Add more challenges here as needed
  ];

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setIsBottomSheetVisible(true);
  };

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen
        options={{
          headerTitle: 'Challenges',
        }}
      />
      <FlatList
        data={challengeData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false} // Remove scrollbar
        renderItem={({ item }) => (
          <ChallengeItem
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

export default Challenges;
