import React, { useState } from 'react';
import { FlatList, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import Cert from '~/assets/svgs/cert';
import PDF from '~/assets/svgs/pdf';
import { certificates, pledges } from '~/lib/data/dummyData';
import { Sheet } from '~/components/nativewindui/Sheet'; // Import the Sheet component
import Share from '~/assets/svgs/share';
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

  // Function to handle download action
  const handleDownload = () => {
    if (selectedCertificate) {
      console.log('Downloading certificate:', selectedCertificate.name);
      // Add your download logic here
    }
    sheetRef.current?.dismiss(); // Close the sheet after action
  };

  // Function to handle share action
  const handleShare = () => {
    if (selectedCertificate) {
      console.log('Sharing certificate:', selectedCertificate.name);
      // Add your share logic here
    }
    sheetRef.current?.dismiss(); // Close the sheet after action
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
          <View className="mt-40 flex-1 items-center">
            <Cert />
            <Text className="text-title">No certificates yet.</Text>
            <Text className="text=cd text-center">
              Your certificates will show up here when you acheive your milestones
            </Text>
          </View>
        }
      />

      {/* Sheet for Certificate Details */}
      <Sheet ref={sheetRef} snapPoints={[300]}>
        <View className="flex-1 p-4">
          {selectedCertificate && (
            <>
              <View className="flex-row items-center gap-3">
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
          <View className="mx-3 mt-7 gap-4">
            {/* Download Button */}
            <TouchableOpacity
              onPress={handleDownload} // Call handleDownload function
              className="flex-row items-center gap-4">
              <Download />
              <Text className="text-reg">Download</Text>
            </TouchableOpacity>

            {/* Share Button */}
            <TouchableOpacity
              onPress={handleShare} // Call handleShare function
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
