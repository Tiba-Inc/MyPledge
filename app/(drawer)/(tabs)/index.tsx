import { View, Text, useWindowDimensions } from 'react-native';
import React from 'react';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Stack, useNavigation, useRouter } from 'expo-router';
import ActiveGoals from '../userProfile';
import ReachedGoals from '../reachedGoals';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {};

const renderScene = SceneMap({
  first: ActiveGoals,
  second: ReachedGoals,
});

const routes = [
  { key: 'first', title: 'Active' },
  { key: 'second', title: 'Reached' },
];

const GoalsEmply = (props: Props) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const router = useRouter();
  const navigation = useNavigation(); // Use the useNavigation hook
  return (
    <View className="flex-1">
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Goals',
          headerShadowVisible: false,
        }}
      />

      {/* Main Content Area */}
      <View className="flex-1">
        <Stack.Screen
          options={{
            headerShown: true,
            headerLeft: (props) => (
              <HeaderBackButton {...props} onPress={() => navigation.goBack()} />
            ),

            headerTitle: () => <Text className="text-ct font-normal">Goals</Text>,
            headerStyle: {
              backgroundColor: '#fff', // Customize header background color
            },
          }}
        />
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

export default GoalsEmply;
