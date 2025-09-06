import React from "react";
import { View } from "react-native";
import LocationSelector, { Location } from "../components/LocationSelector";
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

  const handleLocationChange = (pickup: Location | null, dropoff: Location | null) => {
    // You can handle location changes here (e.g., update state, call API, etc.)
    // For now, just log them
    console.log("Pickup:", pickup);
    console.log("Dropoff:", dropoff);
  };

  const handleDurationCalculated = (duration: string) => {
    // Handle duration calculated (future use)
    console.log("Duration:", duration);
  };

  return (
    <View testID={testID} accessibilityLabel={accessibilityLabel}>
      <LocationSelector
        onLocationChange={handleLocationChange}
        onDurationCalculated={handleDurationCalculated}
      />
    </View>
  );
};

export default VendorLookUpScreen;
