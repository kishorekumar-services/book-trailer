import React from "react";
import { View } from "react-native";
import LocationSelector, { Location } from "../components/LocationSelector";
import DatetimeSelector from "../components/DatetimeSelector";
import SelectedSummary from "../components/SelectedSummary";
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

  const [pickupLocation, setPickupLocation] = React.useState<Location | null>(null);
  const [dropoffLocation, setDropoffLocation] = React.useState<Location | null>(null);
  const [pickupDatetime, setPickupDatetime] = React.useState<Date | null>(null);

  const handleLocationChange = (pickup: Location | null, dropoff: Location | null) => {
    setPickupLocation(pickup);
    setDropoffLocation(dropoff);
    console.log("Pickup:", pickup);
    console.log("Dropoff:", dropoff);
  };

  const handleDurationCalculated = (duration: string) => {
    console.log("Duration:", duration);
  };

  const handleDatetimeChange = (datetime: Date) => {
    setPickupDatetime(datetime);
    console.log("Pickup Datetime:", datetime);
  };

  return (
    <View testID={testID} accessibilityLabel={accessibilityLabel} >
      <LocationSelector
        onLocationChange={handleLocationChange}
        onDurationCalculated={handleDurationCalculated}
      />
      <DatetimeSelector
        onDatetimeChange={handleDatetimeChange}
      />
      <SelectedSummary
        pickupLocation={pickupLocation}
        dropoffLocation={dropoffLocation}
        pickupDatetime={pickupDatetime}
      />
    </View>
  );
};

export default VendorLookUpScreen;
