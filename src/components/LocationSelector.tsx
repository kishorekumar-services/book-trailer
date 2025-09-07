import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, TouchableOpacity, Text, AccessibilityProps } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
// Placeholder for Google Maps integration
// import { useGoogleMaps } from "../hooks/useGoogleMaps";
// import type { Location } from "../lib/maps";

export interface Location {
  lat: number;
  lng: number;
  address: string;
}

interface LocationSelectorProps extends AccessibilityProps {
  onLocationChange: (pickup: Location | null, dropoff: Location | null) => void;
  onDurationCalculated?: (duration: string) => void;
  testID?: string;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  onLocationChange,
  onDurationCalculated,
  testID = "location-selector",
  accessibilityLabel = "Location Selector",
}) => {
  const [pickupLocation, setPickupLocation] = useState<Location | null>(null);
  const [dropoffLocation, setDropoffLocation] = useState<Location | null>(null);
  const pickupRef = useRef<TextInput>(null);
  const dropoffRef = useRef<TextInput>(null);

  // Placeholder for Google Maps Autocomplete and Duration
  useEffect(() => {
    // Integrate Google Maps Autocomplete here in future
    // Call onLocationChange when locations are updated
    onLocationChange(pickupLocation, dropoffLocation);
  }, [pickupLocation, dropoffLocation, onLocationChange]);

  const handleCurrentLocation = () => {
    // Placeholder for getting current location
    // Example: setPickupLocation({ lat: ..., lng: ..., address: "Current Location" });
  };

  return (
    <View
      style={{ padding: 16 }}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
    >
  <View style={{ backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 16, color: "#111" }}>Where do you need a trailer?</Text>
        <View>
          {/* Pickup */}
          <View style={{ marginBottom: 16 }}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
              <FontAwesome name="circle" size={12} color="#3b82f6" style={{ marginRight: 8 }} />
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#6b7280" }}>
                Pickup Location
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  ref={pickupRef}
                  style={{ borderWidth: 1, borderColor: "#d1d5db", borderRadius: 8, padding: 8 }}
                  placeholder="Enter pickup address"
                  testID="input-pickup-location"
                  accessibilityLabel="Pickup Location Input"
                  onChangeText={(text) => setPickupLocation(text ? { lat: 0, lng: 0, address: text } : null)}
                />
              </View>
              <TouchableOpacity
                style={{ marginLeft: 8, height: 32, width: 32, justifyContent: "center", alignItems: "center" }}
                onPress={handleCurrentLocation}
                testID="button-current-location"
                accessibilityLabel="Current Location Button"
              >
                <FontAwesome name="crosshairs" size={20} color="#3b82f6" />
              </TouchableOpacity>
            </View>
          </View>
          {/* Dropoff */}
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
              <FontAwesome name="circle" size={12} color="#f59e42" style={{ marginRight: 8 }} />
              <Text style={{ fontSize: 14, fontWeight: "500", color: "#6b7280" }}>
                Drop-off Location
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  ref={dropoffRef}
                  style={{ borderWidth: 1, borderColor: "#d1d5db", borderRadius: 8, padding: 8 }}
                  placeholder="Enter destination address"
                  testID="input-dropoff-location"
                  accessibilityLabel="Dropoff Location Input"
                  onChangeText={(text) => setDropoffLocation(text ? { lat: 0, lng: 0, address: text } : null)}
                />
              </View>
              <TouchableOpacity
                style={{ marginLeft: 8, height: 32, width: 32, justifyContent: "center", alignItems: "center" }}
                onPress={handleCurrentLocation}
                testID="button-dropoff-location"
                accessibilityLabel="Dropoff Location Button"
              >
                <FontAwesome name="crosshairs" size={20} color="#f59e42" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LocationSelector;
