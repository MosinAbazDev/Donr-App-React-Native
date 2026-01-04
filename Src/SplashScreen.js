// Screens/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Infinite rotation animation
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      })
    ).start();

    const timer = setTimeout(() => {
      navigation.replace('SignInPage');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Map 0-1 to 0deg-360deg
  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('./Assets/don.gif')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.text}>Donate & Protect</Text>

      {/* Spinning Gear */}
      <Animated.Image
        source={require('./Assets/gear.png')}
        style={[styles.gear, { transform: [{ rotate: rotation }] }]}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4e8cff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { width: 150, height: 150, marginBottom: 20 },
  text: { fontSize: 24, fontWeight: 'bold', color: '#fff', marginBottom: 30 },
  gear: { width: 50, height: 50 },
});
