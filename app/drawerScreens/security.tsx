import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import Switch from '~/components/Switch';

type Props = {};

const Security = (props: Props) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const router = useRouter();
  const params = useLocalSearchParams(); // Access navigation params

  // Update the switch state if the PIN was successfully set
  useEffect(() => {
    if (params.pinSet === 'true') {
      setIsSwitchOn(true); // Turn the switch on
    }
  }, [params.pinSet]);

  const handleSwitchToggle = () => {
    if (isSwitchOn) {
      // If the switch is on, turning it off should disable the PIN
      setIsSwitchOn(false);
      // Optionally, you can add logic to clear the saved PIN here
    } else {
      // If the switch is off, turning it on should navigate to the SetPin screen
      router.push('/drawerScreens/setPin');
    }
  };

  return (
    <View className="mx-4 mt-9">
      <Stack.Screen options={{ headerTitle: 'Security' }} />
      <View className="flex-row items-center justify-between gap-4">
        <View className="">
          <Text className="text-btn">PIN</Text>
          <Text className="text-reg">Protect your app with a PIN at startup</Text>
        </View>
        <Switch
          isOn={isSwitchOn}
          onSwitch={handleSwitchToggle}
          // onColor="#34C759" // Custom on color (optional)
          // offColor="#E9E9EA" // Custom off color (optional)
        />
      </View>
    </View>
  );
};

export default Security;
