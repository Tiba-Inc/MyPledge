import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type ChallengeItemProps = {
  Icon: React.ComponentType;
  title: string;
  CelebrateIcon?: React.ComponentType;
  onPress: () => void; // Add onPress handler
};

const ChallengeItem = ({ Icon, title, CelebrateIcon, onPress }: ChallengeItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center justify-between border-b border-gray-200 pb-4">
        <View className="flex-row items-center gap-2">
          <View className="mt-3">
            <Icon />
          </View>
          <Text className="text-st text-wrap">{title}</Text>
        </View>
        {CelebrateIcon && (
          <View className="mr-5">
            {/* <CelebrateIcon /> */}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ChallengeItem;
