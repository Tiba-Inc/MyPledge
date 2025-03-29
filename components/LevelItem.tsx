import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

type LevelItemProps = {
  Icon: React.ComponentType;
  title: string;
  CelebrateIcon?: React.ComponentType;
  onPress: () => void; // Add onPress handler
};

const LevelItem = ({ Icon, title, CelebrateIcon, onPress }: LevelItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="flex-row items-center justify-between border-b border-gray-200 pb-4">
        <View className="flex-row items-center gap-2">
          <View className="mt-3">
            <Icon />
          </View>
          <Text className="text-st">{title}</Text>
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

export default LevelItem;