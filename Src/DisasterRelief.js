// Screens/DisasterRelief.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const disasterCampaigns = [
  {
    id: 1,
    title: 'Flood Relief Fund',
    description: 'Support families affected by devastating floods.',
    image: require('./Assets/disaster1.png'),
  },
  {
    id: 2,
    title: 'Earthquake Emergency Aid',
    description: 'Provide immediate assistance to earthquake victims.',
    image: require('./Assets/disaster2.png'),
  },
  {
    id: 3,
    title: 'Wildfire Relief Support',
    description: 'Help communities rebuild after wildfires.',
    image: require('./Assets/disaster3.png'),
  },
];

const DisasterRelief = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Disaster Relief Campaigns</Text>

      {disasterCampaigns.map(item => (
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

export default DisasterRelief;

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
