import { View, Text, Dimensions } from 'react-native';
import React from 'react';
import { CarouselDataType } from '~/lib/SliderData';
import Animated, {
  Extrapolation,
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  item: CarouselDataType;
  index: number;
  scrollX: SharedValue<number>;
};

const { width } = Dimensions.get('screen');

export default function SliderItem({ index, item, scrollX }: Props) {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
    const outputRange = [0.9, 1, 0.9];

    // Ensure first item is fully centered on first render
    const scale = scrollX.value === 0 && index === 0 ? 1 : interpolate(
      scrollX.value,
      inputRange,
      outputRange,
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <Animated.View style={[rnAnimatedStyle, { width }]} className="items-center justify-center">
      {/* Image */}
      <View className="w-full items-center justify-center">{item.Image}</View>

      {/* Text Content */}
      <View className="mt-8 w-full items-center justify-center px-4">
        <Text className="w-full text-center text-xl font-semibold">{item.Title}</Text>
        <Text className="mb-4 mt-2 w-full text-center text-base">{item.Description}</Text>
      </View>
    </Animated.View>
  );
}
