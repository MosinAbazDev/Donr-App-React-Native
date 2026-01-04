// Screens/Education.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const educationCampaigns = [
  {
    id: 1,
    title: 'School Supplies for Kids',
    description: 'Provide books, bags, and stationery to underprivileged children.',
    goals: 'Reach 300 children with full school kits.',
    donors: 45,
    fundsRaised: '$3,200',
    impact: 'Improved literacy and school attendance among children in need.',
    image: require('./Assets/Education1.png'),
  },
  {
    id: 2,
    title: 'Build Rural Schools',
    description: 'Help construct schools in remote villages.',
    goals: 'Construct 5 new schools with proper facilities.',
    donors: 70,
    fundsRaised: '$15,000',
    impact: 'Provides safe learning environments for children in remote areas.',
    image: require('./Assets/Education2.png'),
  },
  {
    id: 3,
    title: 'Scholarships Program',
    description: 'Support talented students to continue higher education.',
    goals: 'Provide scholarships to 20 deserving students.',
    donors: 60,
    fundsRaised: '$8,500',
    impact: 'Enables talented students to pursue higher education without financial burden.',
    image: require('./Assets/Education3.png'),
  },
];

const Education = () => {
  const navigation = useNavigation();

  const handlePress = campaign => {
    navigation.navigate('DetailEdu', { campaign });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Education Campaigns</Text>

      {educationCampaigns.map(item => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => handlePress(item)}
        >
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

export default Education;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', padding: 16 },
  header: { fontSize: 22, fontWeight: '700', color: '#fff', marginBottom: 16, textAlign: 'center' },
  card: { backgroundColor: '#1c1c1c', borderRadius: 12, marginBottom: 16, overflow: 'hidden' },
  image: { width: '100%', height: 160, resizeMode: 'cover', opacity: 0.85 },
  textBox: { padding: 12 },
  title: { color: '#fff', fontSize: 17, fontWeight: '600', marginBottom: 6 },
  desc: { color: '#ccc', fontSize: 14, lineHeight: 20 },
});
