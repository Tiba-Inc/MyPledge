import { View, Text, ButtonProps, Button as RNButton, Image } from 'react-native';
import { useColorScheme } from '~/lib/useColorScheme';
import React from 'react';
import Passkeys from '~/assets/svgs/passkeys';
import Safe from '~/assets/svgs/safe';
import { Button } from '~/components/Button';
import Refresh from '~/assets/svgs/refresh';
import { Stack } from 'expo-router';
import { Sheet, useSheetRef } from '~/components/nativewindui/Sheet';
import AccountKey from '~/assets/svgs/acccountkey';
// import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Passkey() {
  const bottomSheetModalRef = useSheetRef();
  const { colors } = useColorScheme();
  return (
    <View className="mx-4 flex-1">
      <Stack.Screen options={{ headerShown: false }} />

      {/* Main content */}
      <View className="flex-1">
        <View className="my-8 mt-24 items-center">
          <Passkeys />
        </View>
        <View className="items-center gap-4">
          <Text className="text-ct">Enable Passkeys</Text>
          <Text className="text-btn text-center">
            Passkeys are easy to set up and let you {'\n'}
            securely sign in to your account using your {'\n'}
            fingerprint, face, screen lock, or hardware {'\n'}
            security key
          </Text>
        </View>
        <View className="mx-4 mt-8">
          <View className="flex-row items-center gap-4">
            <Safe />
            <View>
              <Text className="text-st">Keep your account safe</Text>
              <Text className="text-btn mt-1">
                Passkeys offer state-of-the-art phishing {'\n'}
                resistance.
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-4 py-2">
            <Refresh />
            <View>
              <Text className="text-st">Works on all devices</Text>
              <Text className="text-btn mt-1">
                Passkeys will automatically be {'\n'}
                available across synced devices.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Buttons at the bottom */}
      <View className="mb-4 gap-3">
        <Button title="Enable" onPress={() => bottomSheetModalRef.current?.present()} />
        <Button className="bg-transparent" textColor="#171D1E" title="Skip" />
      </View>

      <View className="items-center">
        <Sheet ref={bottomSheetModalRef} snapPoints={['40%']}>
          <View className="mb-4 items-center">
            <AccountKey />
            <Text className="mb-1 mt-4 text-center text-[19px] leading-6">Create a passkey</Text>
            <Text className="text-center text-xs leading-6">
              This passkey will be used for MyPledge
            </Text>
          </View>
          <View className="mx-8 flex-row items-center gap-4 rounded-[20px] border px-5 py-2">
            <AccountKey />
            <Text>example@gmail.com</Text>
          </View>
          <View className="mx-8 my-6 flex-row items-center justify-between gap-3 border-b border-b-[#D8DADD]">
            <Button
              className="mb-5 h-[] rounded-lg bg-transparent px-3 py-[8px]"
              title="Cancel"
              textColor="#3871E0"
              // onPress={() => bottomSheetModalRef.current?.present()}
            />
            <Button
              className="mb-5 h-[] rounded-lg bg-[#32cd32] px-3 py-[8px]"
              textColor="#fff"
              title="Continue"
            />
          </View>
          <View className="flex-row items-center justify-center gap-4">
            <Image className="h-7 w-7  rounded-full" source={require('~/assets/images/Dark.png')} />
            <Text>example@gmail.com</Text>
          </View>
        </Sheet>
      </View>
    </View>
  );
}

function DefaultButton({ color, ...props }: ButtonProps) {
  const { colors } = useColorScheme();
  return <RNButton color={color ?? colors.primary} {...props} />;
}
