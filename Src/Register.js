// Screens/Register.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    // 🔐 Firebase / API logic can be added here later
    Alert.alert('Success', 'Account created successfully!', [
      {
        text: 'OK',
        onPress: () => navigation.replace('SignIn'),
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        {/* Logo */}
        <Image
          source={require('./Assets/DAP.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Register</Text>

        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#777"
          value={fullName}
          onChangeText={setFullName}
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

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#777"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#777"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        {/* Back to Sign In */}
        <TouchableOpacity
          style={{ marginTop: 12, alignSelf: 'center' }}
          onPress={() => navigation.navigate('SignIn')}
        >
          <Text style={{ color: '#4e8cff', fontSize: 14 }}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0f0f0f',
    padding: 20,
  },
  card: {
    width: '90%',
    backgroundColor: '#1c1c1c',
    borderRadius: 12,
    paddingVertical: 20,
    paddingHorizontal: 16,
    elevation: 10,
  },
  logo: {
    width: 84,
    height: 84,
    alignSelf: 'center',
    marginBottom: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
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
