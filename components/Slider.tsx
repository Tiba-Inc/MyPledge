import { View, FlatList, Dimensions, ViewToken } from 'react-native';
import React, { useRef, useState } from 'react';
import { CarouselDataType } from '~/lib/SliderData';
import SliderItem from './SliderItem';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import Pagination from './Pagination';

const { width } = Dimensions.get('window'); // Get the screen width

type Props = {
  itemList: CarouselDataType[];
  onIndexChange?: (index: number) => void; // Callback to notify parent of index changes
};

export default function Slider({ itemList, onIndexChange }: Props) {
  const scrollX = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollX.value = e.contentOffset.x;
    },
  });

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== undefined) {
      const newIndex = viewableItems[0].index;
      setPaginationIndex(newIndex);
      onIndexChange?.(newIndex); // Notify parent of the new index
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const viewabilityConfigCallbackPairs = useRef([
    {
      viewabilityConfig,
      onViewableItemsChanged,
    },
  ]);

  return (
    <View>
      <Animated.FlatList
        data={itemList}
        renderItem={({ item, index }) => <SliderItem item={item} index={index} scrollX={scrollX} />}
        horizontal
        showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
        snapToInterval={width} // Snap at each full screen width
        snapToAlignment="center" // Center the snapped item
        decelerationRate="fast" // Smooth snapping effect
        keyExtractor={(item, index) => index.toString()} // Add a unique key for each item
        onScroll={onScrollHandler}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
      />
      <Pagination items={itemList} paginationIndex={paginationIndex} scrollX={scrollX} />
    </View>
  );
}