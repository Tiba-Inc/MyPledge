import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';
import { useRouter } from 'expo-router';

type Props = {};

// Define types for the Legend component props
type LegendProps = {
  title: string;
  subtitle: string;
  color: string;
};

// Reusable Legend component
const Legend: React.FC<LegendProps> = ({ title, subtitle, color }) => (
  <View className="flex-row items-center">
    <View className="mr-3 h-4 w-4 rounded-full" style={{ backgroundColor: color }} />
    <View>
      <Text className="text-base font-bold text-black">{title}</Text>
      <Text className="text-sm text-black">{subtitle}</Text>
    </View>
  </View>
);

const All = (props: Props) => {
  const pieData = [
    { value: 25, color: '#34C759' },
    { value: 35, color: '#fce186' },
    { value: 40, color: '#AF52DE' },
  ];

  const legendData = [
    { title: 'Needs', subtitle: 'UGX. 0.0 left', color: '#34C759' },
    { title: 'Wants', subtitle: 'UGX. 0.0 left', color: '#fce186' },
    { title: 'Savings', subtitle: 'UGX. 0.0 left', color: '#AF52DE' },
  ];

  const router = useRouter();

  return (
    <View>
      <View className="items-center">
        <TouchableOpacity
          onPress={() => router.push('/home/account')}
          className="mt-6 flex-row items-center gap-5">
          <PieChart donut innerRadius={52} radius={100} data={pieData} />
        </TouchableOpacity>
      </View>
      <View className="gap-2 mx-5">
        {legendData.map((item, index) => (
          <Legend key={index} title={item.title} subtitle={item.subtitle} color={item.color} />
        ))}
      </View>
    </View>
  );
};

export default All;
