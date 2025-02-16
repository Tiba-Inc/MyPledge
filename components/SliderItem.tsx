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

const { width, height } = Dimensions.get('screen');

export default function SliderItem({ index, item, scrollX }: Props) {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            scrollX.value,
            [index - 1, index, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <Animated.View style={[rnAnimatedStyle]} className="w-screen items-center justify-center">
      {/* Heading */}
      <Text className="mb-3 self-start pl-4 text-2xl font-bold">{item.heading}</Text>

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
