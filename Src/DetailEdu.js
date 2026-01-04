// Screens/DetailEdu.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const educationDetails = [
  {
    id: 1,
    title: 'School Supplies for Kids',
    description: 'Provide books, bags, and stationery to underprivileged children.',
    goals: 'Reach 300 children with full school kits.',
    donors: 45,
    fundsRaised: '$3,200',
    impact: 'Improved literacy and school attendance among children in need.',
  },
  {
    id: 2,
    title: 'Build Rural Schools',
    description: 'Help construct schools in remote villages.',
    goals: 'Construct 5 new schools with proper facilities.',
    donors: 70,
    fundsRaised: '$15,000',
    impact: 'Provides safe learning environments for children in remote areas.',
  },
  {
    id: 3,
    title: 'Scholarships Program',
    description: 'Support talented students to continue higher education.',
    goals: 'Provide scholarships to 20 deserving students.',
    donors: 60,
    fundsRaised: '$8,500',
    impact: 'Enables talented students to pursue higher education without financial burden.',
  },
];

const DetailEdu = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Education Details</Text>
      {educationDetails.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <Text style={styles.details}>🎯 Goals: {item.goals}</Text>
          <Text style={styles.details}>👥 Donors: {item.donors}</Text>
          <Text style={styles.details}>💰 Funds Raised: {item.fundsRaised}</Text>
          <Text style={styles.details}>🌟 Impact: {item.impact}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default DetailEdu;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
  header: { fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#1c1c1c', borderRadius: 12, padding: 12, marginBottom: 16 },
  title: { color: '#fff', fontSize: 17, fontWeight: '600', marginBottom: 6 },
  desc: { color: '#ccc', fontSize: 14, lineHeight: 20, marginBottom: 6 },
  details: { color: '#aaa', fontSize: 13, marginBottom: 3 },
});
