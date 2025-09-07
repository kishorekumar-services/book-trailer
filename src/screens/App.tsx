import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import '../styles/datepicker-fix.css';

export default function App() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app Kishore!</Text>
      <TouchableOpacity
        style={{ marginTop: 24, backgroundColor: '#3b82f6', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 }}
        onPress={() => router.push('/vendor-lookup')}
        testID="button-vendor-lookup"
        accessibilityLabel="Go to Vendor Lookup Screen"
      >
        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Go to Vendor Lookup</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
