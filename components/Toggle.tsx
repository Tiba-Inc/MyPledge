import React, { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, View, Text, useColorScheme } from 'react-native';
import Check from '~/assets/svgs/check';

interface Props {
  onColor?: string; // Color when toggle is on
  offColor?: string; // Color when toggle is off
  label?: string; // Label for the toggle
  onToggle: () => void; // Callback for toggling
  isOn: boolean; // Toggle state
  labelStyle?: object; // Custom styles for the label
}

const Toggle: React.FC<Props> = ({
  onColor,
  offColor,
  label = '',
  onToggle,
  isOn = false,
  labelStyle = {},
}) => {
  const animatedValue = useRef(new Animated.Value(isOn ? 1 : 0)).current;

  // Get the current color scheme
  const colorScheme = useColorScheme();

  // Fixed default colors
  const defaultOnColor = '#8A4A65'; // The required "on" background color
  const defaultOffColor = colorScheme === 'dark' ? '#3A3A3C' : '#E9E9EA'; // Light/Dark mode "off" color

  // Animate on toggle state change
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: isOn ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isOn]);

  // Interpolation for toggle movement
  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22], // Adjusted for smooth movement
  });

  // Interpolation for background color
  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [offColor || defaultOffColor, onColor || defaultOnColor],
  });

  return (
    <View className="flex-row items-center">
      {/* Render label if provided */}
      {!!label && (
        <Text style={labelStyle} className="mr-2">
          {label}
        </Text>
      )}

      <TouchableOpacity activeOpacity={0.8} onPress={onToggle}>
        {/* Outer container for toggle */}
        <Animated.View className="h-7 w-12 justify-center rounded-full" style={{ backgroundColor }}>
          {/* Inner moving toggle circle */}
          <Animated.View
            className="h-6 w-6 items-center justify-center rounded-full bg-white p-1 shadow-sm"
            style={{
              marginLeft: moveToggle,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.2,
              shadowRadius: 2.5,
              elevation: 2,
            }}>
            {/* Conditionally render check icon when "on" */}
            {isOn && <Check />}
          </Animated.View>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Toggle);
