import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { Button } from '~/components/Button';
import { CarouselData, CarouselDataType } from '~/lib/SliderData1';
import { useRouter, Stack } from 'expo-router';
import { HeaderBackButton } from '@react-navigation/elements';

type Props = {};

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ChallengesINdex = (props: Props) => {
  const router = useRouter();
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);
  const [activeIndex, setActiveIndex] = React.useState<number>(0); // Track active index

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  const handleButtonPress = () => {
    if (activeIndex < CarouselData.length - 1) {
      // Navigate to the next carousel item
      ref.current?.scrollTo({ count: 1, animated: true });
    } else {
      // Route to a different screen for the last item
      router.replace('/drawerScreens/challenges/home'); // Replace with your desired route
    }
  };

  const renderItem = ({ item }: { item: CarouselDataType }) => {
    return (
      <View className="mt-20 flex-1 items-center justify-center px-5">
        {/* Image */}
        <View className="mb-5 mt-20">{item.Image}</View>

        <View className="">
          {/* Title */}
          <Text className="text-hero mb-2 text-center">{item.Title}</Text>
          {/* Description */}
          <Text className="text-cd mb-5 text-center">{item.Description}</Text>
        </View>
      </View>
    );
  };

  return (
    <View className="flex-1 justify-center bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      {/* Carousel */}
      <View className="w-full flex-grow">
        <Carousel
          ref={ref}
          width={width}
          loop={false} // Set loop to false
          height={height * 0.8} // Adjust height to leave space for pagination
          data={CarouselData}
          onProgressChange={(offsetProgress, absoluteProgress) => {
            progress.value = absoluteProgress;
            const index = Math.round(absoluteProgress); // Calculate active index
            setActiveIndex(index); // Update active index
          }}
          renderItem={renderItem}
        />
      </View>

      {/* Pagination */}
      <View className="mt-auto pb-20">
        <Pagination.Basic
          progress={progress}
          data={CarouselData}
          dotStyle={{ backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 50 }}
          containerStyle={{ gap: 5 }}
          onPress={onPressPagination}
        />
      </View>

      {/* Dynamically Rendered Button */}
      <View className="mx-4">
        <Button
          className="mb-8 w-full"
          title={CarouselData[activeIndex].buttonTitle} // Use active index to get button title
          onPress={handleButtonPress} // Handle button press
        />
      </View>
    </View>
  );
};

export default ChallengesINdex;
