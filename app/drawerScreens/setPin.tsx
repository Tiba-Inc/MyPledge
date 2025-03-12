import React, { useState, useEffect, useRef } from 'react';
import { Stack, useRouter } from 'expo-router';
import { Text, View, TextInput, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Pin from '~/assets/svgs/pin';
import { Button } from '~/components/Button';
import Mismatch from '~/assets/svgs/mismatch';

type Props = {};

const SetPin = (props: Props) => {
  const router = useRouter();
  const [step, setStep] = useState<'set' | 'confirm' | 'success' | 'mismatch'>('set'); // Track the current step
  const [enteredPin, setEnteredPin] = useState(''); // Store the initially entered PIN
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      pin: '',
    },
    mode: 'onChange', // Enables validation check on input change
  });

  // Ref to access the TextInput component
  const pinInputRef = useRef<TextInput>(null);

  // Effect to keep the keyboard open (except on success and mismatch steps)
  useEffect(() => {
    if (step !== 'success' && step !== 'mismatch') {
      Keyboard.dismiss(); // Ensure the keyboard is open
      const keyboardListener = Keyboard.addListener('keyboardDidHide', () => {
        Keyboard.dismiss(); // Reopen the keyboard if it gets closed
      });
      return () => keyboardListener.remove();
    }
  }, [step]);

  // Effect to focus the TextInput when the step changes to "confirm"
  useEffect(() => {
    if (step === 'confirm' && pinInputRef.current) {
      pinInputRef.current.focus(); // Focus the TextInput
    }
  }, [step]);

  // Effect to handle navigation after the success step
  useEffect(() => {
    if (step === 'success') {
      // Delay navigation to ensure the root layout is mounted
      const timeout = setTimeout(() => {
        router.push({
          pathname: '/drawerScreens/security',
          params: { pinSet: true }, // Pass a param to indicate the PIN was set
        });
      }, 2000); // Delay for 2 seconds to show the success message

      // Cleanup the timeout if the component unmounts
      return () => clearTimeout(timeout);
    }
  }, [step]);

  // Handle PIN input completion
  const onPinComplete = (data: { pin: string }) => {
    if (step === 'set') {
      // Save the entered PIN and move to the confirmation step
      setEnteredPin(data.pin);
      reset({ pin: '' }); // Clear the input for the next step
      setStep('confirm');
    } else if (step === 'confirm') {
      // Check if the confirmed PIN matches the initially entered PIN
      if (data.pin === enteredPin) {
        setStep('success'); // Move to the success step
      } else {
        // Handle PIN mismatch
        setStep('mismatch'); // Move to the mismatch step
      }
    }
  };

  // Handle retry after mismatch
  const handleRetry = () => {
    reset({ pin: '' }); // Clear the input
    setStep('set'); // Go back to the first step
  };

  return (
    <View className="mx-4 flex-1">
      <Stack.Screen options={{ headerTitle: 'Set PIN' }} />

      {/* Render the mismatch screen only when step is 'mismatch' */}
      {step === 'mismatch' ? (
        <View className="mt-6 flex-1 items-center">
          <View className="items-center">
            <Mismatch />
          </View>
          <View className="mt-5 items-center gap-2">
            <Text className="text-st">PIN mismatch</Text>
            <Text className="text-cd text-center">
              The entered PIN does not match. Please try {'\n'}again.
            </Text>
          </View>
          {/* Try Again Button */}
          <Button
            textColor="#231B00"
            className="mx-4 mt-14 w-full bg-[#FCE186]"
            title="Try again"
            onPress={handleRetry} // Redirect to the "Set PIN" step
          />
        </View>
      ) : step === 'success' ? (
        <View className="mt-6 flex-1 items-center">
          <View className="items-center">
            <Pin />
          </View>
          <View className="mt-5 items-center gap-2">
            <Text className="text-st">PIN confirmed</Text>
            <Text className="text-cd text-center">
              Your PIN is saved. You'll need it to open the {'\n'}app.
            </Text>
          </View>
        </View>
      ) : (
        <>
          {/* Render the normal UI for other steps (set and confirm) */}
          <View className="mt-6 items-center">
            <Pin />
          </View>
          <View className="mt-5 items-center gap-2">
            <Text className="text-st">{step === 'set' ? 'Choose PIN' : 'Confirm PIN'}</Text>
            <Text className="text-cd text-center">
              {step === 'set'
                ? 'Set a 4-digit PIN to protect your records'
                : 'Enter the PIN again to confirm it'}
            </Text>
          </View>

          {/* PIN Input Field */}
          <View className="mb-4">
            <Controller
              control={control}
              rules={{
                required: 'PIN is required',
                minLength: {
                  value: 4,
                  message: 'PIN must be 4 digits',
                },
                maxLength: {
                  value: 4,
                  message: 'PIN must be 4 digits',
                },
                pattern: {
                  value: /^\d+$/, // Only numbers are allowed
                  message: 'PIN must be numeric',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    ref={pinInputRef} // Assign the ref to the TextInput
                    placeholder="****" // Placeholder for the PIN input
                    onBlur={onBlur}
                    onChangeText={(text) => {
                      // Ensure only numeric input and limit to 4 digits
                      if (/^\d*$/.test(text) && text.length <= 4) {
                        onChange(text);
                        // Automatically submit when 4 digits are entered
                        if (text.length === 4) {
                          handleSubmit(onPinComplete)();
                        }
                      }
                    }}
                    value={value}
                    keyboardType="numeric" // Show numeric keyboard
                    secureTextEntry // Hide the input with stars
                    maxLength={4} // Limit input to 4 characters
                    className="mt-10 text-center text-xl" // Center the text and make it larger
                    autoFocus={step === 'set'} // Auto-focus only on the "set" step
                  />
                </View>
              )}
              name="pin"
            />
            {errors.pin && <Text className="text-center text-red-700">{errors.pin.message}</Text>}
          </View>
        </>
      )}
    </View>
  );
};

export default SetPin;
