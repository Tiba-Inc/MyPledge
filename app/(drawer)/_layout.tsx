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

// Function to determine greeting based on the time of day
const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return 'Good morning';
  if (hour >= 12 && hour < 17) return 'Good afternoon';
  if (hour >= 17 && hour < 20) return 'Good evening';
  return 'Good night';
};

const DrawerLayout = () => {
  const greeting = getGreeting(); // Get the current greeting
  const navigation = useNavigation(); // Use the useNavigation hook

  const onToggle = () => {
    try {
      navigation.dispatch(DrawerActions.openDrawer());
    } catch (error) {
      console.error('Failed to open drawer:', error);
    }
  };

  return (
    <Drawer
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerHideStatusBarOnOpen: true,
        drawerActiveBackgroundColor: '#171D1E',
        drawerActiveTintColor: '#32cd32',
        headerShown: false,
        // header: () => (
        //   <SafeAreaView style={{ marginHorizontal: 16, marginTop: 28 }}>
        //     {/* Make the Menu Icon a TouchableOpacity */}
        //     <TouchableOpacity onPress={onToggle}>
        //       <Menu color={'#514347'} />
        //     </TouchableOpacity>
        //     <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#000' }}>
        //       {greeting}, User
        //     </Text>
        //   </SafeAreaView>
        // ),
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
    { label: 'Bills', icon: <Bills />, route: '/(drawer)/bills' },
    { label: 'Debt', icon: <Debt />, route: '/(drawer)/debt' },
    { label: 'Investments', icon: <Investments />, route: '/(drawer)/investments' },
    { label: 'Projections', icon: <Projections />, route: '/(drawer)/projections' },
  ];

  const extraItems: DrawerItemType[] = [
    { label: 'Articles', icon: <Articles />, route: '/' },
    { label: 'Challenges', icon: <Challenges />, route: '/' },
    { label: 'Currency Converter', icon: <CurrencyConverter />, route: '/' },
    { label: 'Share App', icon: <Share />, route: '/' },
  ];

  const settingsItems: DrawerItemType[] = [
    { label: 'Settings', icon: <Settings />, route: '/(drawer)/home/settings' },
    { label: 'Help', icon: <Help />, route: '/' },
    { label: 'User Feedback', icon: <Feedback />, route: '/' },
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
          style={{
            marginHorizontal: 12,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 8,
            paddingVertical: 24,
          }}>
          <UserAccount />
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
