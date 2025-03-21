import React, { useState } from 'react';
import { FlatList, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Cert from '~/assets/svgs/cert';
import PDF from '~/assets/svgs/pdf';
import { certificates, pledges } from '~/lib/data/dummyData';
import { Sheet } from '~/components/nativewindui/Sheet'; // Import the Sheet component
import Share from '~/assets/svgs/share';
import ABSABank from '~/assets/svgs/absaBank';
import Download from '~/assets/svgs/download';
import UIA from '~/assets/svgs/uia';

type Props = {};

const Certificates = (props: Props) => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const sheetRef = React.useRef(null);

  // Function to handle certificate press
  const handleCertificatePress = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    sheetRef.current?.present(); // Open the sheet
  };

  // Function to get the associated bank name
  const getBankName = (pledgeId: string) => {
    const pledge = pledges.find((p) => p.id === pledgeId);
    return pledge ? pledge.bankName : 'Unknown Bank';
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100 p-4">
      {/* Certificates List */}
      <FlatList
        data={certificates}
        keyExtractor={(item) => item.id} // Use id as key
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleCertificatePress(item)}
            className="mb-3 flex-row items-center rounded-lg bg-white p-4 shadow-sm">
            <PDF />
            <View className="ml-4">
              <Text className="text-cd">{item.name}</Text>
              <Text className="text-reg">Date Issued on {item.dateIssued}</Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="flex-1 items-center justify-center">
            <Cert />
            <Text className="text-xl text-gray-500">No certificates available.</Text>
          </View>
        }
      />

      {/* Sheet for Certificate Details */}
      <Sheet ref={sheetRef} snapPoints={[300]}>
        <View className="flex-1 p-4">
          {selectedCertificate && (
            <>
              <View className="flex-row gap-3 items-center">
                <View className="">
                  <UIA />
                </View>
                <View className="">
                  <Text className="text-reg">{selectedCertificate.name}</Text>
                  <Text className="text-st">{getBankName(selectedCertificate.pledgeId)}</Text>
                </View>
              </View>
            </>
          )}
          <View className="mt-7 gap-4 mx-3">
            <TouchableOpacity
              onPress={() => sheetRef.current?.dismiss()}
              className="flex-row items-center gap-4">
              <Download />
              <Text className="text-reg">Download</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => sheetRef.current?.dismiss()}
              className="flex-row items-center gap-5">
              <Share width={18} height={20} />
              <Text className="text-reg ml-1">Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Sheet>
    </SafeAreaView>
  );
};

export default Certificates;
