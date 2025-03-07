import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Animated, Easing, Modal, StyleSheet } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { router, Stack, useNavigation } from 'expo-router';
import { BlurView } from 'expo-blur';
import RightArrow from '~/assets/svgs/rightArrow';
import Clock from '~/assets/svgs/clock';
import Plus from '~/assets/svgs/plus';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import ArrowUp from '~/assets/svgs/arrowUp';
import ArrowDown from '~/assets/svgs/arrowDown';

// Define types for the Legend component props
type LegendProps = {
  title: string;
  subtitle: string;
  color: string;
};

// Reusable Legend component
const Legend: React.FC<LegendProps> = ({ title, subtitle, color }) => (
  <View className="flex-row items-center">
    <View className="mr-3 h-4 w-4 rounded-full" style={{ backgroundColor: color }} />
    <View>
      <Text className="text-base font-bold text-black">{title}</Text>
      <Text className="text-sm text-black">{subtitle}</Text>
    </View>
  </View>
);

const HomeScreen: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSheetVisible, setIsSheetVisible] = useState(false); // Track sheet visibility
  const rotateValue = new Animated.Value(0);
  const [greeting, setGreeting] = useState('');
  const bottomSheetModalRef = useSheetRef();
  const Navigation = useNavigation();

  // Function to determine greeting based on the time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return 'Good morning';
    if (hour >= 12 && hour < 17) return 'Good afternoon';
    if (hour >= 17 && hour < 20) return 'Good evening';
    return 'Good night';
  };

  // Update greeting dynamically every minute
  useEffect(() => {
    setGreeting(getGreeting()); // Set initial greeting

    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    Animated.timing(rotateValue, {
      toValue: isExpanded ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const rotateInterpolation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const pieData = [
    { value: 25, color: '#34C759' },
    { value: 35, color: '#fce186' },
    { value: 40, color: '#AF52DE' },
  ];

  const legendData = [
    { title: 'Needs', subtitle: 'UGX. 0.0 left', color: '#34C759' },
    { title: 'Wants', subtitle: 'UGX. 0.0 left', color: '#fce186' },
    { title: 'Savings', subtitle: 'UGX. 0.0 left', color: '#AF52DE' },
  ];

  // Define actions for each button
  const handleSetGoal = () => {
    router.push('/home/setGoal');
    console.log('Set goal button pressed');
    // Add navigation or logic for setting a goal
  };

  const handlePledgeToSave = () => {
    console.log('Pledge to save button pressed');
    // Add navigation or logic for pledging to save
  };

  const handleAddTransaction = () => {
    setIsSheetVisible(true); // Show the sheet
    bottomSheetModalRef.current?.present(); // Present the sheet
    console.log('Add transaction button pressed');
  };

  // Function to close both modal and sheet
  const closeModalAndSheet = () => {
    setIsExpanded(false); // Close the modal
    setIsSheetVisible(false); // Hide the sheet
    bottomSheetModalRef.current?.close(); // Close the sheet
  };

  return (
    <>
      <View className="flex-1 p-4">
        <Stack.Screen
          options={{
            headerShadowVisible: false,
            header: () => (
              <View>
                <Text className="text-2xl font-bold text-black">{greeting}, User</Text>
              </View>
            ),
          }}
        />
        <Text className="text-2xl font-bold text-black">{greeting}, User</Text>
        <Text className="mt-5 text-lg font-bold text-black">Account</Text>
        <TouchableOpacity
          onPress={() => router.push('/home/account')}
          className="mt-6 flex-row items-center gap-5">
          <PieChart donut innerRadius={32} radius={60} data={pieData} />
          <View className="gap-2">
            {legendData.map((item, index) => (
              <Legend key={index} title={item.title} subtitle={item.subtitle} color={item.color} />
            ))}
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="mt-5 flex-row items-center justify-between">
          <View>
            <Text className="text-base text-black">Summary</Text>
            <Text className="text-sm text-black">Total income: 0.0 UGX</Text>
            <Text className="text-sm font-bold text-black">Spent so far: 0.0 UGX</Text>
          </View>
          <RightArrow />
        </TouchableOpacity>
        <View className="mt-8">
          <Text className="text-lg font-bold text-black">Your latest transactions</Text>
          <View className="mt-3 flex-row items-center gap-4">
            <Clock color="#514347" />
            <Text className="text-sm text-black">No recent transactions yet</Text>
          </View>
        </View>
        <View className="mt-8">
          <Text className="text-lg font-bold text-black">Your goals</Text>
          <View className="mt-3 flex-row items-center gap-4">
            <Clock color="#514347" />
            <Text className="text-sm text-black">You have not yet set any goals</Text>
          </View>
        </View>

        {/* Floating Action Button (FAB) */}
        <View className="absolute bottom-10 right-8">
          <Animated.View style={{ transform: [{ rotate: rotateInterpolation }] }}>
            <TouchableOpacity
              className="rounded-full bg-[#fce186] p-4 shadow-lg shadow-black"
              onPress={toggleExpand}>
              <Plus color="#231B00" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      </View>

      {/* Modal for Expanded FAB */}
      <Modal transparent visible={isExpanded} onRequestClose={toggleExpand}>
        {/* Blur Overlay */}
        <BlurView intensity={50} style={StyleSheet.absoluteFill} />

        {/* Expanded Buttons */}
        <View className="absolute bottom-40 right-5 gap-3">
          {[
            { label: 'Set goal', onPress: handleSetGoal },
            { label: 'Pledge to save', onPress: handlePledgeToSave },
            { label: 'Add transaction', onPress: handleAddTransaction },
          ].map((button, index) => (
            <TouchableOpacity
              key={index}
              className="text-btn flex-row items-center justify-end gap-2 self-end rounded-full bg-[#FCE186] px-4 py-2 shadow-lg"
              onPress={() => {
                button.onPress(); // Call the respective handler
                toggleExpand(); // Close the modal
              }}>
              <Plus color="#231B00" />
              <Text className="text-lg text-[#231B00]">{button.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>

      {/* Sheet (Rendered outside the modal) */}
      <Sheet ref={bottomSheetModalRef} snapPoints={[200]} onClose={closeModalAndSheet}>
        <View className="flex-1">
          <Text className="text-ct text-center">What kind of transaction is this?</Text>
          <TouchableOpacity
            onPress={() => {
              router.push('/home/incomeDetail');
              closeModalAndSheet(); // Close both modal and sheet
            }}
            className="mx-6 mt-8 flex-row items-center justify-between ">
            <View className="flex-row gap-3">
              <ArrowUp color={'#514347'} />
              <Text className="text-st">Income</Text>
            </View>
            <RightArrow />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              router.push('/home/expenseDetail');
              closeModalAndSheet(); // Close both modal and sheet
            }}
            className="mx-6 mt-8 flex-row items-center justify-between ">
            <View className="flex-row gap-3">
              <ArrowDown color={'#514347'} />
              <Text className="text-st">Expense</Text>
            </View>
            <RightArrow />
          </TouchableOpacity>
        </View>
      </Sheet>
    </>
  );
};

export default HomeScreen;
