import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// @ts-ignore
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesome } from "@expo/vector-icons";

if (typeof window !== 'undefined') {
  require('../styles/datepicker-fix.css');
}

interface DatetimeSelectorProps {
  onDatetimeChange: (datetime: Date) => void;
  testID?: string;
  accessibilityLabel?: string;
}
const DatetimeSelector: React.FC<DatetimeSelectorProps> = ({
  onDatetimeChange,
  testID = "datetime-selector",
  accessibilityLabel = "Datetime Selector",
}) => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState(false);

  const handleConfirm = (selectedDate: Date) => {
    setShow(false);
    setDate(selectedDate);
    onDatetimeChange(selectedDate);
  };

  const handleCancel = () => {
    setShow(false);
  };

  return (
    <View style={{ padding: 16 }} testID={testID} accessibilityLabel={accessibilityLabel}>
      <View style={{ backgroundColor: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 16, color: "#111" }}>when do you need?</Text>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
          <FontAwesome name="calendar" size={16} color="#3b82f6" style={{ marginRight: 8 }} />
          <Text style={{ fontSize: 16, fontWeight: "500", color: "#6b7280" }}>
            Select Pickup Date & Time
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 12 }}>
            {Platform.OS === "web" ? (
              <>
                <DatePicker
                  selected={date}
                  onChange={(selectedDate: Date) => {
                    setDate(selectedDate);
                    onDatetimeChange(selectedDate);
                  }}
                  showTimeSelect
                  dateFormat="Pp"
                  portalId="root-portal"
                  customInput={
                    <button style={{
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 1,
                      borderColor: "#d1d5db",
                      borderRadius: 8,
                      padding: 12,
                      width: "100%",
                      background: "#fff",
                      display: "flex"
                    }}>
                      <FontAwesome name="clock-o" size={20} color="#3b82f6" style={{ marginRight: 8 }} />
                      <span style={{ fontSize: 16, color: "#111" }}>{date.toLocaleString()}</span>
                    </button>
                  }
                />
                <button
                  style={{ marginLeft: 8, backgroundColor: "#3b82f6", borderRadius: 8, padding: 12, color: "#fff", display: "flex", alignItems: "center", border: "none" }}
                  onClick={() => {
                    const now = new Date();
                    setDate(now);
                    onDatetimeChange(now);
                  }}
                  data-testid="button-current-datetime"
                  aria-label="Pick Current Date and Time"
                >
                  <FontAwesome name="calendar-check-o" size={20} color="#fff" />
                  <span style={{ marginLeft: 4 }}>Now</span>
                </button>
              </>
          ) : (
            <>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#d1d5db", borderRadius: 8, padding: 12, flex: 1 }}
                onPress={() => setShow(true)}
                testID="button-datetime-picker"
                accessibilityLabel="Open DateTime Picker"
              >
                <FontAwesome name="clock-o" size={20} color="#3b82f6" style={{ marginRight: 8 }} />
                <Text style={{ fontSize: 16, color: "#111" }}>
                  {date.toLocaleString()}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginLeft: 8, backgroundColor: "#3b82f6", borderRadius: 8, padding: 12, justifyContent: "center", alignItems: "center" }}
                onPress={() => {
                  const now = new Date();
                  setDate(now);
                  onDatetimeChange(now);
                }}
                testID="button-current-datetime"
                accessibilityLabel="Pick Current Date and Time"
              >
                <FontAwesome name="calendar-check-o" size={20} color="#fff" />
                <Text style={{ color: "#fff", marginLeft: 4 }}>Now</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
        {Platform.OS !== "web" && (
          <DateTimePickerModal
            isVisible={show}
            mode="datetime"
            date={date}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            testID="datetime-picker"
          />
        )}
      </View>
    </View>
  );
};

export default DatetimeSelector;
