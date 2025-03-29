import React, { useRef, useMemo, useCallback, useState, useEffect } from 'react';
import { View, LayoutAnimation } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import SmartText from './SmartText';
import { useColorScheme } from '~/lib/useColorScheme';

const CustomBottomSheet = ({ isVisible, onClose, selectedItem }) => {
  const { colors } = useColorScheme();
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const [contentHeight, setContentHeight] = useState(0);

  // Calculate snap points based on content height
  const snapPoints = useMemo(() => {
    // Minimum 40%, or content height + padding (whichever is larger)
    const calculatedHeight = Math.min(
      Math.max(contentHeight, 305), // 100px padding, 300px min
      600 // Max height
    );
    return [calculatedHeight];
  }, [contentHeight]);

  // Backdrop component
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => <BottomSheetBackdrop {...props} disappearsOnIndex={-1} />,
    []
  );

  // Handle visibility changes
  useEffect(() => {
    if (isVisible) {
      bottomSheetRef.current?.present();
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      bottomSheetRef.current?.dismiss();
    }
  }, [isVisible]);

  if (!selectedItem) return null;

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      onDismiss={onClose}
      backgroundStyle={{
        backgroundColor: colors.card,
      }}
      style={{
        borderWidth: 1,
        borderColor: colors.grey5,
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
      }}
      handleIndicatorStyle={{
        backgroundColor: colors.grey4,
      }}>
      <View className="p-4">
        <SmartText text="Badge details" className="text-ct mb-4 text-lg font-bold" />

        <View className="mb-4 items-center">
          <selectedItem.Icon width={148} height={148} />
        </View>

        <View className="-mt-7 mb-4 flex-row items-center gap-2 self-end">
          {selectedItem.status === 'earned' && (
            <>
              <selectedItem.CelebrateIcon width={24} height={24} color={'#34C759'} />
              <SmartText text="Badge earned" className="text-[#34C759]" />
            </>
          )}
          {selectedItem.status === 'pending' && (
            <>
              <selectedItem.PendingIcon width={24} height={24} color={'#FF9500'} />
              <SmartText text="Badge pending" className="text-[#FF9500]" />
            </>
          )}
        </View>

        <View className="">
          <SmartText text={selectedItem.title} className="text-st" />
        </View>
      </View>
    </BottomSheetModal>
  );
};

export default CustomBottomSheet;
