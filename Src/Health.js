// Screens/Health.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const healthCampaigns = [
  {
    id: 1,
    title: 'Medical Aid for the Needy',
    description: 'Provide medicines and treatment to underprivileged patients.',
    image: require('./Assets/health1.png'),
  },
  {
    id: 2,
    title: 'Free Health Camps',
    description: 'Organize free medical checkups in rural areas.',
    image: require('./Assets/health2.png'),
  },
  {
    id: 3,
    title: 'Cancer Treatment Support',
    description: 'Help patients afford life-saving cancer treatments.',
    image: require('./Assets/health3.png'),
  },
];

const Health = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Health Campaigns</Text>

      {healthCampaigns.map(item => (
        <TouchableOpacity key={item.id} style={styles.card}>
          <Image source={item.image} style={styles.image} />
          <View style={styles.textBox}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Health;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  textBox: {
    padding: 12,
  },
  title: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 6,
  },
  desc: {
    color: '#ccc',
    fontSize: 14,
    lineHeight: 20,
  },
});
