import { Tabs } from 'expo-router';
import Goals from '~/assets/svgs/goals';
import Home from '~/assets/svgs/home';
import Plans from '~/assets/svgs/plans';

import { TabBarIcon } from '~/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Goals',
          tabBarIcon: ({ color }) => <Goals color={color} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Saving plans',
          tabBarIcon: ({ color }) => <Plans color={color} />,
        }}
      />
    </Tabs>
  );
}
