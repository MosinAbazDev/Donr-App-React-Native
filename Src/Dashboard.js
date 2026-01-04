// Screens/Dashboard.js
import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const campaigns = [
  {
    id: 1,
    title: 'Education for All',
    description: 'Help children access quality education.',
    image: require('./Assets/campaignEd.png'),
  },
  {
    id: 2,
    title: 'Clean Water Project',
    description: 'Provide safe drinking water to villages.',
    image: require('./Assets/campaign3.png'),
  },
  {
    id: 3,
    title: 'Disaster Relief Fund',
    description: 'Support victims of natural disasters.',
    image: require('./Assets/campaign2.png'),
  },
];

const categories = [
  'Education',
  'Health',
  'DisasterRelief',
  'Environment',
  'Animals',
];

const Dashboard = () => {
  const navigation = useNavigation();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % campaigns.length;
      scrollRef.current?.scrollTo({ x: next * width, animated: true });
      setActiveIndex(next);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const onScrollEnd = e => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  // CATEGORY NAVIGATION
  const categoryScreens = {
    Education: 'Education',
    Health: 'Health',
    DisasterRelief: 'DisasterRelief',
    Environment: 'Environment',
  
  };

  const handleCategoryPress = category => {
    const screen = categoryScreens[category];
    if (screen) navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Welcome to DonateApp</Text>

        {/* Carousel */}
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          style={styles.carousel}
        >
          {campaigns.map(item => (
            <TouchableOpacity key={item.id} style={styles.slide}>
              <Image source={item.image} style={styles.campaignImage} />
              <Text style={styles.campaignTitle}>{item.title}</Text>
              <Text style={styles.campaignDesc}>{item.description}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Dots */}
        <View style={styles.dots}>
          {campaigns.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, activeIndex === i && styles.dotActive]}
            />
          ))}
        </View>

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          {categories.map((cat, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.categoryButton}
              onPress={() => handleCategoryPress(cat)}
            >
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      {/* Floating Donation Summary Button */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('PaymentSummary')}
      >
        <Text style={styles.floatingButtonText}>💰 Summary</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f' },
  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginVertical: 20,
    textAlign: 'center',
  },
  carousel: { height: 200 },
  slide: {
    width,
    height: 200,
    borderRadius: 12,
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    padding: 12,
    backgroundColor: '#1c1c1c',
  },
  campaignImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 12,
    resizeMode: 'cover',
    opacity: 0.4,
  },
  campaignTitle: { color: '#fff', fontSize: 18, fontWeight: '600' },
  campaignDesc: { color: '#ddd', fontSize: 14, marginTop: 4 },
  dots: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 },
  dot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#444', marginHorizontal: 4 },
  dotActive: { backgroundColor: '#4e8cff' },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  categories: { paddingLeft: 16 },
  categoryButton: {
    backgroundColor: '#222',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 12,
  },
  categoryText: { color: '#fff', fontSize: 14 },
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
  floatingButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
