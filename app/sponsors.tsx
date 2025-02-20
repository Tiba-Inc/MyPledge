import React from 'react';
import { View, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { router, Stack } from 'expo-router';
import Cancel from '~/assets/svgs/cancel';
import RightArrow from '~/assets/svgs/rightArrow';
import BOU from '~/assets/svgs/bou';
import Citi from '~/assets/svgs/citi';
import Absa from '~/assets/svgs/absa';
import UgaFode from '~/assets/svgs/ugafode';
import DTB from '~/assets/svgs/dtb';
import UIA from '~/assets/svgs/uia';
import DPF from '~/assets/svgs/dpf';
import { Button } from '~/components/Button';

// Define the type for the Icon prop
type IconComponent = React.FC<{ width?: number; height?: number; color?: string }>;

// Define the props for the SponsorItem component
interface SponsorItemProps {
  Icon: IconComponent;
  name: string;
  onPress?: (event: GestureResponderEvent) => void;
  showArrow?: boolean;
}

// Reusable Sponsor Item Component
const SponsorItem = ({ Icon, name, onPress, showArrow = true }: SponsorItemProps) => (
  <TouchableOpacity className="flex-row items-center justify-between px-4 py-3" onPress={onPress}>
    <View className="flex-row items-center gap-4">
      <View className="-ml-6">
        <Icon />
      </View>
      <Text className="text-st text-base">{name}</Text>
    </View>
    {showArrow && <RightArrow />}
  </TouchableOpacity>
);

export default function Sponsors() {
  const handleCancel = () => {
    // Handle cancel action
  };

  const handleDone = () => {
    router.push('./launch');
  };

  return (
    <View className="flex-1 bg-white px-4">
      <Stack.Screen
        options={{
          headerTitle: 'Partners and sponsors',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={handleCancel}>
              <Cancel width={24} height={24} color={'#171D1E'} />
            </TouchableOpacity>
          ),
        }}
      />

      <View className="pl-4">
        <Text className="text-st text-lg font-bold">Our partners</Text>
        <SponsorItem Icon={BOU} name="Bank of Uganda" />

        <Text className="text-st mt-8 text-lg font-bold">Our sponsors</Text>
        <View className="">
          <SponsorItem Icon={Citi} name="Citi Bank" />
          <SponsorItem Icon={Absa} name="ABSA Bank" />
          <SponsorItem Icon={UgaFode} name="UGAFODE" />
          <SponsorItem Icon={DTB} name="Diamond Trust Bank" />
          <SponsorItem Icon={UIA} name="Uganda Insurers Association" />
          <SponsorItem Icon={DPF} name="Deposit Protection Fund" showArrow={false} />
        </View>
      </View>

      <View className="mb-8 mt-auto">
        <Button onPress={handleDone} title="Done" className="w-full" />
      </View>
    </View>
  );
}
