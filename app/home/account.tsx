import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Stack, useRouter } from 'expo-router';
import All from './all';
import Needs from './needs';
import Savings from './savings';
import Wants from './wants';

type Props = {};

const renderScene = SceneMap({
  first: All,
  second: Needs,
  third: Wants,
  fourth: Savings,
});

const routes = [
  { key: 'first', title: 'All' },
  { key: 'second', title: 'Needs' },
  { key: 'third', title: 'Wants' },
  { key: 'fourth', title: 'Savings' },
];

const Account = (props: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const router = useRouter();

  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Navigation',
          headerShadowVisible: false,
        }}
      />

      {/* Main Content Area */}
      <View className="flex-1">
        <Stack.Screen options={{ headerTitle: 'Account' }} />
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={(props: any) => (
            <TabBar
              {...props}
              style={{ backgroundColor: '#FFFFFF' }} // Corrected the color code (removed extra 'F')
              scrollEnabled={false} // Disable horizontal scrolling
              tabStyle={{ width: layout.width / routes.length }} // Equal width for each tab
              labelStyle={{ fontSize: 14, fontWeight: '600' }} // General label styles
              indicatorStyle={{ backgroundColor: '#8A4A65', height: 3 }} // Indicator for active tab
              activeColor="#171D1E" // Color for active tab text
              inactiveColor="#A0A0A0" // Color for inactive tab text
            />
          )}
        />
      </View>
    </View>
  );
};

export default Account;
