import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View, Text, useColorScheme } from 'react-native';

interface Props {
  onColor?: string;
  offColor?: string;
  label?: string;
  onSwitch: () => void;
  isOn: boolean;
  labelStyle?: object;
}

const Switch: React.FC<Props> = ({
  onColor,
  offColor,
  label = '',
  onSwitch,
  isOn = false,
  labelStyle = {},
}) => {
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  // Get the current color scheme
  const colorScheme = useColorScheme();

  // Default colors for light and dark modes
  const defaultOnColor = colorScheme === 'dark' ? '#34C759' : '#8A4A65'; // Green for dark mode, Blue for light
  const defaultOffColor = colorScheme === 'dark' ? '#3A3A3C' : '#E9E9EA'; // Dark gray vs light gray

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  const moveSwitch = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // Adjusted for iOS-like movement
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [offColor || defaultOffColor, onColor || defaultOnColor],
  });

  return (
    <View className="flex-row items-center">
      {!!label && (
        <Text style={labelStyle} className="mr-2">
          {label}
        </Text>
      )}

      <TouchableOpacity activeOpacity={0.8} onPress={onSwitch}>
        <Animated.View className="h-7 w-12 justify-center rounded-full" style={{ backgroundColor }}>
          <Animated.View
            className="h-6 w-6 rounded-full bg-white shadow-sm"
            style={{
              marginLeft: moveSwitch,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2.5,
              elevation: 2,
            }}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Switch);