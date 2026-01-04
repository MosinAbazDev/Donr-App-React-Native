// Screens/Receipt.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Receipt = ({ route }) => {
  const { receiptData } = route.params;
let data=[1,2,3,4,5,6]
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Donation Receipt</Text>

      <View style={styles.table}>
        {/* Table Header */}
        <View style={[styles.row, styles.headerRow]}>
          <Text style={[styles.cell, styles.headerCell]}>Category</Text>
          <Text style={[styles.cell, styles.headerCell]}>Donor</Text>
          <Text style={[styles.cell, styles.headerCell]}>Amount</Text>
          <Text style={[styles.cell, styles.headerCell]}>Date</Text>
          <Text style={[styles.cell, styles.headerCell]}>Status</Text>
        </View>

        {/* Table Data */}
     
       {data.map((e,index)=>{
        return(
               <View key={index} style={styles.row}>
          <Text style={styles.cell}>{receiptData.category}</Text>
          <Text style={styles.cell}>{receiptData.donorName}</Text>
          <Text style={styles.cell}>${receiptData.amount}</Text>
          <Text style={styles.cell}>{receiptData.date}</Text>
          <Text style={styles.cell}>Completed</Text>
        </View>
        )
       })}
      </View>
    </View>
  );
};

export default Receipt;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
  header: { fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 16, textAlign: 'center' },

  table: { borderWidth: 1, borderColor: '#fff', borderRadius: 8, overflow: 'hidden' },
  row: { flexDirection: 'row' },
  headerRow: { backgroundColor: '#ff5722' },

  cell: {
    flex: 1,
    padding: 12,
    borderRightWidth: 1,
    borderRightColor: '#fff',
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
  },
  headerCell: { fontWeight: '700', color: '#fff' },

  // Remove border for the last cell in each row
  rowLastCell: { borderRightWidth: 0 },
});
