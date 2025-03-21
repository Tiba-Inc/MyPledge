import React from 'react';
import { FlatList, Text, SafeAreaView, View } from 'react-native';
import Pledge from '~/assets/svgs/pledge';
import { pledges } from '~/lib/data/dummyData';

type Props = {};

const Pledges = (props: Props) => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      <FlatList
        data={pledges}
        keyExtractor={(item) => item.id} // Use id as key
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mb-3 rounded-lg bg-white p-4 shadow-sm">
            <Text className="text-reg">Pledge with {item.bankName}</Text>
            <Text className="text-st">UGX: {item.amount.toLocaleString()}</Text>
          </View>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Pledge />
            <Text className="text-xl text-gray-500">No pledges available.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Pledges;
