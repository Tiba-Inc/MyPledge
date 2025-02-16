import { View } from 'react-native';
import React from 'react';
import { CarouselDataType } from '~/lib/SliderData';
import { SharedValue } from 'react-native-reanimated';

type Props = {
  items: CarouselDataType[]; // Array of items
  paginationIndex: number; // Active index for pagination
  scrollX: SharedValue<number>; // Animated value for scroll position
};

const Pagination = ({ items = [], paginationIndex, scrollX }: Props) => {
  return (
    <View className="h-16 flex-row items-center justify-center">
      {items.map((_, index) => {
        return (
          <View
            key={index}
            className={`mx-[2px] h-2 w-2 rounded-lg ${
              index === paginationIndex ? 'bg-[#333]' : 'bg-[#aaa]'
            }`}
          />
        );
      })}
    </View>
  );
};

export default Pagination;
