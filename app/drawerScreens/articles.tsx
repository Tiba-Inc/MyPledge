import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import TopPicks1 from '~/assets/svgs/topPicks1';
import { FlashList } from '@shopify/flash-list';
import { topPicks } from '~/lib/data/topPicks';

type Props = {};

const Articles = (props: Props) => {
  const router = useRouter();

  // Fixed card width
  const cardWidth = 199;

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen options={{ headerTitle: 'Articles' }} />
      <Text className="text-ch mt-3">Top picks for you</Text>

      <FlashList
        data={topPicks} // Use the imported data
        horizontal
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={cardWidth} // Set estimated item size to card width
        renderItem={({ item }) => (
          <View
          className='mt-3'
            style={[
              styles.card,
              {
                width: cardWidth, // Fixed card width
                marginRight: 16, // Add spacing between items
              },
            ]}>
            <View style={{ width: '100%', aspectRatio: 1 }}> 
              {item.svg === 'TopPicks1' && <TopPicks1 width="100%" height="100%" />}
            </View>
            <View style={{ marginTop: 8 }}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.descriptionText} numberOfLines={3} ellipsizeMode="tail">
                {item.description}
              </Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        snapToInterval={cardWidth + 16} // Snap to card width + margin
        snapToAlignment="start" // Ensure snapping aligns to the start of the card
        decelerationRate="fast" // Smooth scrolling
      />
    </View>
  );
};

export default Articles;

// Styles for the card and text
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12, // Rounded corners
    borderWidth: 1, // Border width
    borderColor: '#e0e0e0', // Light gray border color
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.1, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
    elevation: 3, // Elevation for Android
    padding: 16, // Padding inside the card
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});