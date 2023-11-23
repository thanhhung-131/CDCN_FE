// screens/LoginScreen.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = async (email, password) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        {
          email: email.trim(),
          password: password.trim(),
        }
      );

      if (response.data.success === true) {
        setTimeout(() => {
          navigation.navigate("Home");
        }, 2000);
      } else {
        Toast.show({
          type: "error",
          position: "top",
          text1: "Invalid email or password",
          visibilityTime: 3000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          handleLogin(email, password);
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text
        style={styles.registerText}
        onPress={() => navigation.navigate("Register")}
      >
        Don't have an account? Register here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0c7a0", // Màu nền da nhẹ nhàng
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#4d382c", // Màu chữ nâu đậm
  },
  input: {
    height: 40,
    borderColor: "#4d382c", // Màu viền nâu đậm cho ô input
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: "100%",
    borderRadius: 8,
    color: "#4d382c", // Màu chữ nâu đậm
  },
  button: {
    backgroundColor: "#a88771", // Màu nền da đậm cho nút
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  buttonText: {
    color: "#fff", // Màu chữ trắng
    textAlign: "center",
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 16,
    color: "#4d382c", // Màu chữ nâu đậm
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
