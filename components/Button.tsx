import React, { forwardRef } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
} from 'react-native';

type ButtonProps = {
  title?: string; // Button text
  loading?: boolean; // Show a loading spinner
  leftIcon?: React.ReactNode; // Icon on the left
  rightIcon?: React.ReactNode; // Icon on the right
  className?: string; // Parent-defined Tailwind styles
  textColor?: string; // Parent-defined text color
  variant?: 'primary' | 'secondary'; // Variant for primary or secondary styling
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      title,
      loading,
      leftIcon,
      rightIcon,
      className,
      textColor,
      disabled,
      variant = 'primary',
      ...props
    },
    ref
  ) => {
    // Define the styles based on the variant
    const backgroundColor = disabled
      ? '#1D1B201F' // Disabled state background color
      : variant === 'primary'
        ? '#8A4A65' // Primary background color
        : '#FCE186'; // Secondary background color

    const textColorStyle = disabled
      ? '#000000' // Disabled state text color
      : variant === 'primary'
        ? textColor || '#FFFFFF' // Primary text color (default to white if not provided)
        : '#231B00'; // Secondary text color

    // Check if the className includes a background color (e.g., bg-transparent, bg-red-500)
    const hasBackgroundColorClass = className?.includes('bg-');

    return (
      <TouchableOpacity
        ref={ref}
        disabled={disabled || loading}
        style={{
          // Only apply backgroundColor if no Tailwind background color class is present
          backgroundColor: hasBackgroundColorClass ? undefined : backgroundColor,
        }}
        className={[
          'flex-row items-center justify-center rounded-[99px] px-6 py-4', // Default styles
          'active:opacity-25', // Active state effect
          className, // Allow parent styles
        ].join(' ')}
        {...props}>
        {/* Loading Spinner */}
        {loading && (
          <ActivityIndicator
            color={disabled ? '#9CA3AF' : variant === 'primary' ? '#FFFFFF' : '#231B00'}
            style={{ marginRight: leftIcon ? 8 : 0 }}
          />
        )}

        {/* Left Icon */}
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}

        {/* Button Text */}
        {title && (
          <Text
            className="text-center text-base font-semibold"
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: textColorStyle, // Apply dynamic text color
            }}>
            {title}
          </Text>
        )}

        {/* Right Icon */}
        {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
      </TouchableOpacity>
    );
  }
);
