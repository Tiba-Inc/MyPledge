import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useRouter, useNavigation } from 'expo-router';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions } from '@react-navigation/native';

// Import your SVG icons
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
import Menu from '~/assets/svgs/menu';
import User from '~/assets/svgs/user';

// Define a TypeScript type for drawer items
type DrawerItemType = {
  label: string;
  icon: JSX.Element;
  route:
    | '/drawerScreens/bills'
    | '/drawerScreens/debt'
    | '/drawerScreens/investments'
    | '/drawerScreens/projections'
    | '/drawerScreens/articles'
    | '/drawerScreens/challenges'
    | '/drawerScreens/currencyConverter'
    | '/drawerScreens/share'
    | '/drawerScreens/settings'
    | '/drawerScreens/help'
    | '/drawerScreens/feedback'
    | '/'
    | string; // Fallback for other potential routes
};

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: '#171D1E',
        drawerActiveTintColor: '#32cd32',
        headerShown: false,
      }}>
      <Drawer.Screen name="bills" options={{ headerTitle: 'Home' }} />
      <Drawer.Screen name="(tabs)" options={{ headerTitle: '' }} />
    </Drawer>
  );
};

export default DrawerLayout;

const CustomDrawerContent = (props: any) => {
  const router = useRouter();
  const { top } = useSafeAreaInsets();

  // Drawer Sections
  const drawerItems: DrawerItemType[] = [
    { label: 'Bills', icon: <Bills />, route: '/drawerScreens/bills' },
    { label: 'Debt', icon: <Debt />, route: '/drawerScreens/debt' },
    { label: 'Investments', icon: <Investments />, route: '/drawerScreens/investments' },
    { label: 'Projections', icon: <Projections />, route: '/drawerScreens/projections' },
  ];

  const extraItems: DrawerItemType[] = [
    { label: 'Articles', icon: <Articles />, route: '/drawerScreens/articles' },
    { label: 'Challenges', icon: <Challenges />, route: '/drawerScreens/challenges' },
    {
      label: 'Currency Converter',
      icon: <CurrencyConverter />,
      route: '/drawerScreens/currencyConverter',
    },
    { label: 'Share App', icon: <Share />, route: '/drawerScreens/share' },
  ];

  const settingsItems: DrawerItemType[] = [
    { label: 'Settings', icon: <Settings />, route: '/drawerScreens/settings' },
    { label: 'Help', icon: <Help />, route: '/drawerScreens/help' },
    { label: 'User Feedback', icon: <Feedback />, route: '/drawerScreens/feedback' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <DrawerContentScrollView {...props} scrollEnabled contentContainerStyle={{ paddingTop: top }}>
        {/* Close Button */}
        <TouchableOpacity
          style={{ marginRight: 10, alignSelf: 'flex-end' }}
          onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
          <Cancel color={'#514347'} />
        </TouchableOpacity>

        {/* User Profile Section */}
        <TouchableOpacity
          onPress={() => router.push('/(drawer)/userProfile')}
          className="mx-3 flex-row items-center gap-2 py-3">
          <View className="size-14 items-center justify-center rounded-full bg-[#FFD9E5]">
            <User width={56} height={56} color="#514347" />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>(Name)</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{ fontSize: 16, color: '#666' }}>My account</Text>
              <RightArrow />
            </View>
          </View>
        </TouchableOpacity>

        {/* First Section */}
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 12 }}>
          {drawerItems.map((item, index) => (
            <DrawerItem
              key={index}
              icon={() => item.icon}
              label={item.label}
              labelStyle={styles.drawerLabel}
              onPress={() => router.replace(item.route)}
            />
          ))}
        </View>

        {/* Extra Section */}
        <View style={{ borderBottomWidth: 1, borderBottomColor: '#ccc', paddingVertical: 12 }}>
          {extraItems.map((item, index) => (
            <DrawerItem
              key={index}
              icon={() => item.icon}
              label={item.label}
              onPress={() => router.replace(item.route)}
            />
          ))}
        </View>

        {/* Settings Section */}
        <View style={{ paddingVertical: 12 }}>
          {settingsItems.map((item, index) => (
            <DrawerItem
              key={index}
              icon={() => item.icon}
              label={item.label}
              onPress={() => router.replace(item.route)}
            />
          ))}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

// Custom Styles
const styles = StyleSheet.create({
  drawerLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#514347',
    lineHeight: 20,
    letterSpacing: 0.1,
  },
});
