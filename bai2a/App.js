import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const App = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#FBCB00", "#BF9A00"]}
        style={StyleSheet.absoluteFillObject}
        start={[0.5, 0.3]}
      ></LinearGradient>
      <View style={styles.text}>
        <Text style={styles.text1}>
          LOGIN
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image source={require("./images/user.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Name"
            placeholderTextColor="black"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image source={require("./images/lock.png")} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            placeholderTextColor="black"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={require("./images/eye.png")} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDD835',
  },
  text: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start", 
    width: '80%',
  },
  text1: {
    fontSize: 30,
    color: "black",
    fontWeight: "bold",
    textAlign: 'left', 
    marginTop: 60,
  },
  inputContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: '80%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    height: 60,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    color: 'black',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    width: '80%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  createAccountText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  bottom: {
    flex: 1.5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 80,
  },
});

export default App;
