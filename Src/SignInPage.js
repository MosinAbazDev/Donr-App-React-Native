// Screens/SignInPage.js
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {requestUserPermission} from "./PushNotificationService";
const { width } = Dimensions.get('window');

const carouselData = [
  { id: 1, text: 'Reliable Platform to Donate' },
  { id: 2, text: 'Secure & Transparent Payment Methods' },
  { id: 3, text: 'Designed for Trust & Impact' },
  { id: 4, text: 'Donate to Save Others' },
];

const SignInPage = () => {
  const [nameOrId, setNameOrId] = useState('');
  const [email, setEmail] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setInterval(() => {
      const next = (activeIndex + 1) % carouselData.length;
      scrollRef.current?.scrollTo({ x: next * width, animated: true });
      requestUserPermission()
      setActiveIndex(next);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const onScrollEnd = e => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const handleContinue = () => {
    // later you can add Firebase auth here
    navigation.replace('Dashboard');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Carousel */}
        <ScrollView
          ref={scrollRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
          style={styles.carousel}
        >
          {carouselData.map(item => (
            <View key={item.id} style={styles.slide}>
              <Text style={styles.slideText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Dots */}
        <View style={styles.dots}>
          {carouselData.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, activeIndex === i && styles.dotActive]}
            />
          ))}
        </View>
<View style={{paddingHorizontal:20}}>
        {/* Logo */}
        <Image
          source={require('./Assets/DAP.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Form */}
        <Text style={styles.title}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="Name or ID"
          placeholderTextColor="#777"
          value={nameOrId}
          onChangeText={setNameOrId}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Register */}
        <TouchableOpacity
          style={{ marginTop: 12, alignSelf: 'center' }}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={{ color: '#4e8cff', fontSize: 14 }}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignInPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    paddingVertical: 20,
   
    elevation: 10,
  },
  carousel: { height: 120 },
  slide: {
    width,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1f1f1f',
    borderRadius: 8,
  },
  slideText: {
    color: '#e0e0e0',
    fontSize: 14,
    textAlign: 'center',
 marginLeft:-25
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#444',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#e0e0e0',
  },
  logo: {
    width: 84,
    height: 84,
    alignSelf: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    height: 44,
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 12,
    color: '#fff',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  button: {
    height: 44,
    backgroundColor: '#e6e6e6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  buttonText: {
    color: '#121212',
    fontSize: 15,
    fontWeight: '600',
  },
});
