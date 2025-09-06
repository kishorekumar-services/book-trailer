import React from "react";
import { View, TextInput } from "react-native";
// import { useQuery } from "@tanstack/react-query";
// import { useVendorStore } from "../stores/vendorStore";

interface Props {
  testID?: string;
  accessibilityLabel?: string;
}

const VendorLookUpScreen: React.FC<Props> = ({ testID = "vendor-lookup-screen", accessibilityLabel = "Vendor Lookup Screen" }) => {
  // Placeholder for future API integration
  // const { data, isLoading } = useQuery({ ... });
  // const vendorState = useVendorStore();

  return (
    <View
      className="flex-row items-center justify-center p-4"
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
      <TextInput
        className="flex-1 border border-gray-300 rounded-lg p-2 mr-2"
        placeholder="Pickup Address"
        testID="pickup-address-input"
        accessibilityLabel="Pickup Address Input"
        autoCapitalize="none"
      />
      <TextInput
        className="flex-1 border border-gray-300 rounded-lg p-2 ml-2"
        placeholder="Drop Address"
        testID="drop-address-input"
        accessibilityLabel="Drop Address Input"
        autoCapitalize="none"
      />
    </View>
  );
};

export default VendorLookUpScreen;
