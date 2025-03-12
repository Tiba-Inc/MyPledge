import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import Switch from '~/components/Switch';

type Props = {};

const Notifications = (props: Props) => {
  // Define an object to store the state of each switch
  const [switches, setSwitches] = useState({
    dailyReminder: false,
    unconfirmedRecords: false,
    overspendingAlerts: false,
    recurringPayments: false,
    debts: false,
    featureUpdates: false,
    newArticles: false,
    currencyUpdates: false,
  });

  // Function to toggle a specific switch
  const handleSwitchToggle = (switchName: keyof typeof switches) => {
    setSwitches((previousState) => ({
      ...previousState,
      [switchName]: !previousState[switchName],
    }));
  };

  return (
    <View className="mx-4 mt-6 gap-6">
      <Stack.Screen options={{ headerTitle: 'Notifications' }} />

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Daily reminder</Text>
          <Text className="text-reg flex-wrap">
            Get a notification at 8 PM to track your expenses.
          </Text>
        </View>
        <Switch
          isOn={switches.dailyReminder}
          onSwitch={() => handleSwitchToggle('dailyReminder')}
        />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Unconfirmed records</Text>
          <Text className="text-reg flex-wrap">Notify me about unconfirmed records.</Text>
        </View>
        <Switch
          isOn={switches.unconfirmedRecords}
          onSwitch={() => handleSwitchToggle('unconfirmedRecords')}
        />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Overspending alerts</Text>
          <Text className="text-reg flex-wrap">Get notified when you exceed your budget.</Text>
        </View>
        <Switch
          isOn={switches.overspendingAlerts}
          onSwitch={() => handleSwitchToggle('overspendingAlerts')}
        />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Recurring payments</Text>
          <Text className="text-reg flex-wrap">Stay organized with payment reminders.</Text>
        </View>
        <Switch
          isOn={switches.recurringPayments}
          onSwitch={() => handleSwitchToggle('recurringPayments')}
        />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Debts</Text>
          <Text className="text-reg flex-wrap">Never miss a debt payment again. </Text>
        </View>
        <Switch isOn={switches.debts} onSwitch={() => handleSwitchToggle('debts')} />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Feature updates</Text>
          <Text className="text-reg flex-wrap">
            Stay up-to-date with the latest app {'\n'}features and enhancements.
          </Text>
        </View>
        <Switch
          isOn={switches.featureUpdates}
          onSwitch={() => handleSwitchToggle('featureUpdates')}
        />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">New articles</Text>
          <Text className="text-reg flex-wrap">
            Don't miss out on valuable financial tips. {'\n'}Get notified about new blog posts.
          </Text>
        </View>
        <Switch isOn={switches.newArticles} onSwitch={() => handleSwitchToggle('newArticles')} />
      </View>

      <View className="flex-row items-center justify-between">
        <View className="">
          <Text className="text-btn">Currency Updates</Text>
          <Text className="text-reg flex-wrap">
            Your currency rates will be refreshed in {'\n'}real-time for accurate calculations.
          </Text>
        </View>
        <Switch
          isOn={switches.currencyUpdates}
          onSwitch={() => handleSwitchToggle('currencyUpdates')}
        />
      </View>
    </View>
  );
};

export default Notifications;
