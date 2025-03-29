import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter, Stack } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';
import FireOn from '~/assets/svgs/fireOn';
import FireOff from '~/assets/svgs/fireOff';
import Badge1 from '~/assets/svgs/badge1';
import * as Progress from 'react-native-progress';
import Badge from '~/assets/svgs/badge';
import VerticalElipsis from '~/assets/svgs/verticalElipsis';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import { Slider } from '~/components/nativewindui/Slider';

type Props = {};

const Home = (props: Props) => {
  const router = useRouter();
  const bottomSheetModalRef = useSheetRef();
  const [sliderValue, setSliderValue] = React.useState(0.5);

  // Mock data for progress and streak
  const TotalDays = 30; // Total days for the challenge

  // Days of the week with their respective fire icons
  const Days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const FireIcons = [FireOn, FireOff, FireOff, FireOff, FireOff, FireOff, FireOff]; // Example icons

  // Rewards data
  const Rewards = [
    {
      id: '1',
      title: 'Badges',
      description: 'First Step – Log your first expense.',
      icon: <Badge />,
      route: '/drawerScreens/challenges/badges', // Example route
      progress: Math.random(), // Random progress value
    },
    {
      id: '2',
      title: 'Streaks',
      description: 'Maintain a 7-day streak.',
      icon: <Badge />,
      route: '/drawerScreens/challenges/streaks', // Example route
      progress: Math.random(), // Random progress value
    },
    {
      id: '3',
      title: 'Levels',
      description: 'Reach Level 5 to unlock this reward.',
      icon: <Badge />,
      route: '/drawerScreens/challenges/levels', // Example route
      progress: Math.random(), // Random progress value
    },
    {
      id: '4',
      title: 'Challenges',
      description: 'Complete the 30-day challenge.',
      icon: <Badge />,
      route: '/drawerScreens/challenges/challenges', // Example route
      progress: Math.random(), // Random progress value
    },
  ];

  return (
    <ScrollView
      className="mx-4 flex-1"
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
    >
      <Stack.Screen
        options={{
          headerTitle: 'Challenges',
          headerLeft: (props) => (
            <HeaderBackButton
              {...props}
              onPress={() => router.replace('/(drawer)/(tabs)/homeScreen')}
              style={{ marginLeft: -5 }} // Adjust this value as needed
            />
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => bottomSheetModalRef.current?.present()}>
              <VerticalElipsis color={'#514347'} />
            </TouchableOpacity>
          ),
        }}
      />
      <View className="mt-7 flex-row items-center justify-center gap-8">
        <View className="">
          <FireOn width={64} height={76} />
        </View>
        <View className="items-center">
          <Text className="text-large">1</Text>
          <Text className="text-cd">day streak</Text>
        </View>
      </View>
      <View className="mt-6 items-center ">
        <Text className="text-cd">Weekly streak summary</Text>
      </View>
      <View className="mx-auto my-6 flex-row gap-4">
        {Days.map((day, index) => (
          <View key={index} className="items-center justify-center gap-4">
            <Text className="text-st">{day}</Text>
            {FireIcons[index] && React.createElement(FireIcons[index])}
          </View>
        ))}
      </View>
      <Text className="text-reg text-center">
        Don't break your streak! Use the app every day {'\n'}to stay on top of your finances.
      </Text>
      <Text className="text-ch mx-2 mt-14">Rewards</Text>
      {Rewards.map((item) => {
        const completedDays = Math.round(item.progress * TotalDays); // Calculate completed days based on random progress
        return (
          <TouchableOpacity
            key={item.id}
            className="mt-6 rounded-2xl border border-[#C6C6C8] p-4"
            onPress={() => router.push(item.route)} // Navigate to the specified route
          >
            <Text className="text-st mx-3">{item.title}</Text>
            <View className="mt-1 items-center">{item.icon}</View>
            <View className="mt-4">
              <Text className="text-reg">{item.description}</Text>
              <View className="flex-row items-center">
                <View className="flex-grow">
                  <Progress.Bar
                    progress={item.progress}
                    width={260}
                    height={10}
                    color="#8A4A65" // Green color for progress
                    unfilledColor="#FCE186" // Light gray for unfilled portion
                    borderWidth={0}
                  />
                </View>
                <Text className="text-st ml-2">{`${completedDays}/${TotalDays}`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
      <Sheet ref={bottomSheetModalRef} snapPoints={[250]}>
        <View className="mx-4">
          <Text className="text-ct">Change status</Text>
          <View className="mt-12 w-full">
            <Slider
              style={{ width: '100%', height: 40 }}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#000000"b
              maximumTrackTintColor="#000000"
              thumbTintColor="#000000"
              onValueChange={setSliderValue}
            />
          </View>
          <Text className="text-cd mt-4 text-center">Slide bar to change your status</Text>
        </View>
      </Sheet>
    </ScrollView>
  );
};

export default Home;
