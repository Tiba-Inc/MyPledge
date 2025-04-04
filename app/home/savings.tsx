import { View, Text } from 'react-native';
import React from 'react';
import { PieChart } from 'react-native-gifted-charts';

type Props = {};

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

const Savings = (props: Props) => {
  const pieData = [
    { value: 25, color: 'transparent' }, // Needs (hidden)
    { value: 35, color: 'transparent' }, // Wants (hidden)
    { value: 40, color: '#AF52DE', focused: true }, // Savings (visible and focused)
  ];

  const legendData = [{ title: 'Savings', subtitle: 'UGX. 0.0 left', color: '#AF52DE' }];

  return (
    <View>
        <View className="mt-5 mb-7 mx-4">
            <Text className='text-reg font-medium'>Last 30 days</Text>
            <Text className='text-ch'>UGX 0.0</Text>
        </View>
      <View className="items-center">
        <PieChart
          donut
          innerRadius={52}
          radius={100}
          data={pieData}
          focusOnPress={true} // Focus on the "Savings" segment
          shiftOnPress={false} // Keep the segment in its original position
        />
      </View>
      <View className="mx-5 mt-5 gap-2">
        {legendData.map((item, index) => (
          <Legend key={index} title={item.title} subtitle={item.subtitle} color={item.color} />
        ))}
      </View>
    </View>
  );
};

export default Savings;
