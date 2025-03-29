// components/SmartText.tsx
import React from 'react';
import { Text } from 'react-native';

const SmartText = ({ text, className = '' }) => {
  // Replace newlines with spaces and trim extra spaces
  const processedText = text.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim();

  return (
    <Text
      className={`flex-wrap ${className}`}
      numberOfLines={0} // Allow unlimited lines
    >
      {processedText}
    </Text>
  );
};

export default SmartText;
