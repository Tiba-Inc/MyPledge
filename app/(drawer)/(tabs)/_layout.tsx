import { Tabs } from 'expo-router';
import { View, TouchableOpacity, Text } from 'react-native';
import Goals from '~/assets/svgs/goals';
import Home from '~/assets/svgs/home';
import Plans from '~/assets/svgs/plans';
import React, { useCallback, memo } from 'react';
import { NavigationState, Route } from 'react-native-tab-view';
import { BottomTabNavigationEventMap, BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';

// Define the type for the CustomTabBar props
type CustomTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: Record<string, BottomTabNavigationOptions & { navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap> }>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

// Custom Tab Bar Component
const CustomTabBar = memo<CustomTabBarProps>(({ state, descriptors, navigation }) => {
  const renderTab = useCallback(
    (route: Route<string>, index: number) => {
      const { options } = descriptors[route.key];
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      // Extract the title directly from the options object
      const title = options.title || route.name;

      return (
        <TouchableOpacity
          key={route.key}
          onPress={onPress}
          className="h-20 flex-1 items-center justify-center" // Increased tab height
        >
          <View className="mb-2 items-center">
            {/* Elliptical background for focused icon */}
            <View
              className={`${isFocused ? 'h-7 w-12 items-center justify-center rounded-full bg-[#fce186]' : ''}`}>
              {options.tabBarIcon({
                focused: isFocused,
                color: isFocused ? '#000' : '#888', // Adjust icon colors as needed
                size: 24,
              })}
            </View>
            {/* Tab title */}
            <Text className={`mt-1 text-xs ${isFocused ? 'text-[#231B00]' : 'text-[#231B00]'}`}>
              {title} {/* Use the title directly from options */}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [state, descriptors, navigation]
  );

  return (
    <View className="h-20 flex-row items-center justify-around border-t border-gray-200 bg-white">
      {state.routes.map((route, index) => renderTab(route, index))}
    </View>
  );
});

export default function TabLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        lazy: false, // Ensure all screens are pre-rendered
      }}>
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: 'Home', // Tab title
          tabBarIcon: ({ color }: { color: string }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Goals', // Tab title
          tabBarIcon: ({ color }: { color: string }) => <Goals color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Saving plans', // Tab title
          tabBarIcon: ({ color }: { color: string }) => <Plans color={color} />,
        }}
      />
    </Tabs>
  );
}