import React from "react";
import { View, Text } from "react-native";
import { Location } from "./LocationSelector";

interface SelectedSummaryProps {
  pickupLocation: Location | null;
  dropoffLocation: Location | null;
  pickupDatetime: Date | null;
  testID?: string;
  accessibilityLabel?: string;
}

const SelectedSummary: React.FC<SelectedSummaryProps> = ({
  pickupLocation,
  dropoffLocation,
  pickupDatetime,
  testID = "selected-summary",
  accessibilityLabel = "Selected Summary",
}) => {
  return (
    <View style={{ padding: 16 }} testID={testID} accessibilityLabel={accessibilityLabel}>
      <View style={{ backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 16, color: "#111" }}>Trip Summary</Text>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 15, color: "#3b82f6", fontWeight: "bold", marginBottom: 4 }}>Pickup Location</Text>
          <Text style={{ fontSize: 15, color: "#333", marginBottom: 8 }}>{pickupLocation?.address || "Not selected"}</Text>
          <Text style={{ fontSize: 15, color: "#f59e42", fontWeight: "bold", marginBottom: 4 }}>Drop-off Location</Text>
          <Text style={{ fontSize: 15, color: "#333", marginBottom: 8 }}>{dropoffLocation?.address || "Not selected"}</Text>
          <Text style={{ fontSize: 15, color: "#6b7280", fontWeight: "bold", marginBottom: 4 }}>Pickup Date & Time</Text>
          <Text style={{ fontSize: 15, color: "#333" }}>{pickupDatetime ? pickupDatetime.toLocaleString() : "Not selected"}</Text>
        </View>
      </View>
    </View>
  );
};

export default SelectedSummary;
