import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Slider from '~/components/Slider';
import { Button } from '~/components/Button';
import { router, Stack } from 'expo-router';
import { CarouselData } from '~/lib/SliderData';
import Cancel from '~/assets/svgs/cancel';

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current carousel index

  const handleCancel = () => {
    console.log('Cancel action triggered');
    router.replace('/'); // Navigate to the homepage
  };

  const handleButtonPress = () => {
    if (currentIndex === CarouselData.length - 1) {
      router.push('./done'); // Navigate to the target screen on last slide
    } else {
      console.log('Next slide');
    }
  };

  // Extracting current slide data
  const currentSlide = CarouselData[currentIndex];
  const currentHeading = currentSlide?.heading;
  const buttonTitle = currentSlide?.buttonType || 'Next'; // Default to 'Next' if buttonType is missing

  return (
    <View className="mx-4 flex-1 justify-between">
      {/* Dynamic Header */}
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft:
            currentIndex === 4
              ? () => (
                  <View>
                    <Cancel width={24} height={24} color={'#171D1E'} onPress={handleCancel} />
                  </View>
                )
              : undefined, // Default back arrow for other slides
        }}
      />

      {/* Heading */}
      <View className="mt-4">
        {currentHeading ? (
          <Text className="mb-3 self-start pl-4 text-2xl font-bold">{currentHeading}</Text>
        ) : (
          <View className="h-10" /> // Placeholder to maintain layout
        )}
      </View>

      {/* Slider Component */}
      <View>
        <Slider itemList={CarouselData} onIndexChange={setCurrentIndex} />
      </View>

      {/* Dynamic Button */}
      {currentSlide?.buttonType && (
        <Button className="mb-8 mt-2" title={buttonTitle} onPress={handleButtonPress} />
      )}
    </View>
  );
}
