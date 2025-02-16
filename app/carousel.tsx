import { View } from 'react-native';
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
      // If on the last slide, navigate to a new screen
      router.push('./done'); // Replace '/new-screen' with the route of your target screen
    } else {
      // Otherwise, move to the next slide (if applicable)
      console.log('Next slide');
    }
  };

  return (
    <View className="mx-4 flex-1 justify-between">
      {/* Dynamic Header */}
      <Stack.Screen
        options={{
          headerTitle: '',
          headerLeft:
            currentIndex === 4 // Check if we're on slide 4
              ? () => (
                  <View className="">
                    <Cancel
                      width={24}
                      height={24}
                      color={'#171D1E'}
                      onPress={handleCancel} // Trigger cancel action
                    />
                  </View>
                )
              : undefined, // Default back arrow for other slides
        }}
      />
      {/* Slider Component */}
      <View>
        <Slider itemList={CarouselData} onIndexChange={setCurrentIndex} />
      </View>
      {/* Dynamic Button */}
      {CarouselData[currentIndex]?.buttonType && (
        <Button
          className="mb-8 mt-2"
          title={currentIndex === CarouselData.length - 1 ? 'Continue' : 'Next'} // Show 'Finish' on the last slide
          onPress={handleButtonPress} // Handle navigation or next slide
        />
      )}
    </View>
  );
}
