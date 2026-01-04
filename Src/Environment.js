// Screens/Environment.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

const environmentCampaigns = [
  {
    id: 1,
    title: 'Tree Plantation Drive',
    description: 'Join us in planting trees to restore green spaces.',
    image: require('./Assets/environment1.png'),
  },
  {
    id: 2,
    title: 'Beach Cleanup Initiative',
    description: 'Help clean beaches and protect marine life.',
    image: require('./Assets/environment2.png'),
  },
  {
    id: 3,
    title: 'Reduce Plastic Campaign',
    description: 'Promote eco-friendly alternatives to reduce plastic waste.',
    image: require('./Assets/environment3.png'),
  },
];

const Environment = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Environment Campaigns</Text>

      {environmentCampaigns.map(item => (
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

export default Environment;

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
