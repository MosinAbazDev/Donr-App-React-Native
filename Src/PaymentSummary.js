// Screens/PaymentSummary.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const donationRecords = [
  { id: 1, category: 'Education', amount: 50, donorName: 'Atif', date: '2025-12-16' },
  { id: 2, category: 'Health', amount: 100, donorName: 'Jane Smith', date: '2025-12-15' },
  { id: 3, category: 'Disaster-Relief', amount: 75, donorName: 'Ali Khan', date: '2025-12-14' },
  { id: 4, category: 'Environment', amount: 30, donorName: 'Sara Ahmed', date: '2025-12-13' },
];

const PaymentSummary = ({ navigation }) => {
  const [selectedDonation, setSelectedDonation] = useState(null);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Donation / Payment Summary</Text>

        {donationRecords.map(record => (
          <TouchableOpacity
            key={record.id}
            style={[
              styles.card,
              selectedDonation?.id === record.id && styles.activeCard,
            ]}
            onPress={() => setSelectedDonation(record)}
          >
            <View style={styles.row}>
              <Text style={styles.label}>Category</Text>
              <Text style={styles.value}>{record.category}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Donor</Text>
              <Text style={styles.value}>{record.donorName}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Amount</Text>
              <Text style={styles.value}>${record.amount}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Date</Text>
              <Text style={styles.value}>{record.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Floating button like Dashboard */}
      {selectedDonation && (
        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() =>
            navigation.navigate('Receipt', { receiptData: selectedDonation })
          }
        >
          <Text style={styles.floatingButtonText}>📄 Receipt</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PaymentSummary;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
  header: { fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#1c1c1c', borderRadius: 12, padding: 12, marginBottom: 12 },
  activeCard: { borderWidth: 1, borderColor: '#4e8cff' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6 },
  label: { color: '#aaa', fontSize: 14, fontWeight: '500' },
  value: { color: '#fff', fontSize: 14, fontWeight: '600' },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4e8cff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    elevation: 5,
  },
  floatingButtonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
});
