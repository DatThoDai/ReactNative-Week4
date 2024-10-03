import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("./images/usb.png")} style={styles.usbIcon} />
        <Text style={styles.headerText}>USB Bluetooth Music Receiver {'\n'} HJX-001 - Biến loa thường thành loa {'\n'}bluetooth</Text>
      </View>
      <Text style={styles.satisfactionText}>Cực kỳ hài lòng</Text>
      <View style={styles.ratingContainer}>
        {[...Array(5)].map((_, index) => (
          <Image key={index} source={require("./images/star.png")} style={styles.starIcon} />
        ))}
      </View>
      <View style={styles.addImageContainer}>
        <Image source={require("./images/camera.png")} style={styles.cameraIcon} />
        <Text style={styles.addImageText}>Thêm hình ảnh</Text>
      </View>
      <View style={styles.textAreaContainer}>
        <TextInput
          style={styles.textArea}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          placeholderTextColor="gray"
          multiline
        />
        <Text style={styles.linkText}>https://meet.google.com/nsj-ojwi-xpp</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gửi</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
    width:'100%',
  },
  usbIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  satisfactionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  starIcon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  addImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: 'purple',
    borderWidth: 1,
    width: '100%',
    height: 70,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent:'center',
  },
  cameraIcon: {
    width: 35,
    height: 30,
    marginRight: 10,
  },
  addImageText: {
    fontSize: 16,
    color: 'black',
    fontWeight:'bold',
  },
  textAreaContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor:'#c4c4c4',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    position: 'relative',
  },
  textArea: {
    height: 150,
    width: '100%',
    color: 'black',
    textAlignVertical: 'top',
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  button: {
    backgroundColor: '#386FFC',
    padding: 10,
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default App;
