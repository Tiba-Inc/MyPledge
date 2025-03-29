import React from 'react';
import { TouchableOpacity, View } from 'react-native';

type FloatingActionButtonProps = {
  onPress: () => void;
  IconComponent: React.ReactNode;
  buttonColor: string;
};

const FloatingActionButton = ({
  onPress,
  IconComponent,
  buttonColor,
}: FloatingActionButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`h-14 w-14 items-center justify-center rounded-full shadow-lg ${buttonColor}`}>
      {IconComponent}
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
