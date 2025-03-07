import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Bills from '~/assets/svgs/bills';
import Debt from '~/assets/svgs/debt';
import Investments from '~/assets/svgs/investments';
import Projections from '~/assets/svgs/projections';
import CurrencyConverter from '~/assets/svgs/currencyConverter';
import Share from '~/assets/svgs/share';
import Challenges from '~/assets/svgs/challenges';
import Articles from '~/assets/svgs/articles';
import Settings from '~/assets/svgs/settings';
import Help from '~/assets/svgs/help';
import Feedback from '~/assets/svgs/feedback';
import UserAccount from '~/assets/svgs/userAccount';
import RightArrow from '~/assets/svgs/rightArrow';
import Cancel from '~/assets/svgs/cancel';

// Define a TypeScript type for drawer items
type DrawerItemType = {
  label: string;
  icon: JSX.Element;
  route:
    | '/(drawer)/bills'
    | '/(drawer)/debt'
    | '/(drawer)/investments'
    | '/(drawer)/projections'
    | '/(drawer)/home/settings'
    | '/'
    | string; // Fallback for other potential routes
};

const DrawerLayout = () => (
  <Drawer
    drawerContent={(props) => <CustomDrawerContent {...props} />}
    screenOptions={{
      drawerHideStatusBarOnOpen: true,
      drawerActiveBackgroundColor: '#171D1E',
      drawerActiveTintColor: '#32cd32',
    }}>
    <Drawer.Screen name="bills" options={{ headerTitle: 'Home' }} />
    <Drawer.Screen name="(tabs)" options={{ headerTitle: '' }} />
  </Drawer>
);

export default DrawerLayout;

const CustomDrawerContent = React.memo((props: any) => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  // Drawer Sections
  const drawerItems: DrawerItemType[] = useMemo(
    () => [
      { label: 'Bills', icon: <Bills />, route: '/(drawer)/bills' },
      { label: 'Debt', icon: <Debt />, route: '/(drawer)/debt' },
      { label: 'Investments', icon: <Investments />, route: '/(drawer)/investments' },
      { label: 'Projections', icon: <Projections />, route: '/(drawer)/projections' },
    ],
    []
  );

  const extraItems: DrawerItemType[] = useMemo(
    () => [
      { label: 'Articles', icon: <Articles />, route: '/' },
      { label: 'Challenges', icon: <Challenges />, route: '/' },
      { label: 'Currency Converter', icon: <CurrencyConverter />, route: '/' },
      { label: 'Share App', icon: <Share />, route: '/' },
    ],
    []
  );

  const settingsItems: DrawerItemType[] = useMemo(
    () => [
      { label: 'Settings', icon: <Settings />, route: '/(drawer)/home/settings' },
      { label: 'Help', icon: <Help />, route: '/' },
      { label: 'User Feedback', icon: <Feedback />, route: '/' },
    ],
    []
  );

  return (
    <View className="flex-1 bg-gray-200">
      <DrawerContentScrollView {...props} scrollEnabled contentContainerStyle={{ paddingTop: top }}>
        {/* Close Button */}
        <TouchableOpacity className="self-end mr-2">
          <Cancel color={'#514347'} />
        </TouchableOpacity>

        {/* User Profile Section */}
        <TouchableOpacity className="mx-3 flex-1 flex-row items-center gap-2 py-6">
          <UserAccount />
          <View className="flex-1">
            <Text className="text-lg font-semibold">(Name)</Text>
            <View className="flex-1 flex-row items-center justify-between">
              <Text className="text-base text-gray-600">My account</Text>
              <RightArrow />
            </View>
          </View>
        </TouchableOpacity>

        {/* First Section */}
        <View className="border-b border-gray-300 pb-3">
          {drawerItems.map((item, index) => (
            <DrawerItem
              key={index}
              icon={() => item.icon}
              label={item.label}
              labelStyle={styles.drawerLabel}
              onPress={() => router.replace(item.route as any)} // Force TypeScript to allow this
            />
          ))}
        </View>

        {/* Extra Section */}
        <View className="border-b border-gray-300 py-3">
          {extraItems.map((item, index) => (
            <DrawerItem
              key={index}
              icon={() => item.icon}
              label={item.label}
              onPress={() => router.replace(item.route as any)}
            />
          ))}
        </View>

        {/* Settings Section */}
        <View className="py-3">
          {settingsItems.map((item, index) => (
            <DrawerItem
              key={index}
              icon={() => item.icon}
              label={item.label}
              onPress={() => router.replace(item.route as any)}
            />
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
});

// Custom Styles
const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#514347', // Dark gray
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});
