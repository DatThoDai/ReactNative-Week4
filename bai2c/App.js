import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Crypto from 'expo-crypto';

const screenWidth = Dimensions.get('window').width;

const App = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [password, setPassword] = useState('');
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(false);

  const generatePassword = async (length) => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const specialChars = '!@#$%^&*()_+[]{}';
    const numbersChars = '0123456789';

    let characters = numbersChars;
    if (lowercase) characters += lowercaseChars;
    if (uppercase) characters += uppercaseChars;
    if (special) characters += specialChars;

    let password = '';
    const randomBytes = await Crypto.getRandomBytesAsync(length);
    for (let i = 0; i < length; i++) {
      const randomIndex = randomBytes[i] % characters.length;
      password += characters[randomIndex];
    }
    setPassword(password);
  };

  const handleGeneratePassword = () => {
    if (passwordLength > 0) {
      generatePassword(parseInt(passwordLength));
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#3B3B98', '#C4C4C400']} style={styles.gradient}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Password {"\n"} Generator</Text>

          <TextInput
            style={styles.passwordDisplay}
            editable={false}
            placeholderTextColor="#888"
            value={password}
          />

          <View style={styles.lengthRow}>
            <Text style={styles.optionText}>Password length</Text>
            <TextInput
              style={styles.lengthInput}
              keyboardType="numeric"
              placeholderTextColor="#888"
              value={passwordLength}
              onChangeText={setPasswordLength}
            />
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include lowercase letters</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setLowercase(!lowercase)}
            >
              {lowercase && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include uppercase letters</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setUppercase(!uppercase)}
            >
              {uppercase && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include numbers</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setNumbers(!numbers)}
            >
              {numbers && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <View style={styles.optionRow}>
            <Text style={styles.optionText}>Include special symbols</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => setSpecial(!special)}
            >
              {special && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.generateButton} onPress={handleGeneratePassword}>
            <Text style={styles.generateButtonText}>Generate Password</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#23235B',
    padding: 20,
    paddingVertical: 60,
    borderRadius: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  passwordDisplay: {
    width: screenWidth * 0.8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#151537',
  },
  lengthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth * 0.8,
    marginBottom: 20,
  },
  lengthInput: {
    width: 140,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    color: 'black',
    textAlign: 'center',
    backgroundColor: "#fff"
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenWidth * 0.8,
    marginBottom: 10,
  },
  optionText: {
    color: '#fff',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkmark: {
    color: 'black',
    fontSize: 25,
  },
  generateButton: {
    width: screenWidth * 0.8,
    padding: 15,
    backgroundColor: '#3B3B98',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
