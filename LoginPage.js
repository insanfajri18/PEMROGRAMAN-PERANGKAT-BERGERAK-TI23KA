import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, Modal, StyleSheet} from "react-native";

const userList = [
  { name: "Insan Fajri", userID: "insan", password: "insan123" },
  { name: "Dandi Hendika", userID: "dans", password: "dans456" },
];

const LoginPage = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const matchedUser = userList.find(
      (user) => user.userID === userID && user.password === password
    );

    if (matchedUser) {
      setMessage(`Welcome, ${matchedUser.name}!`);
    } else {
      setMessage("Invalid UserID or Password. Please try again.");
    }
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>UserID:</Text>
          <TextInput
            style={styles.input}
            value={userID}
            onChangeText={setUserID}
            placeholder="Enter your UserID"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <Modal
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalMessage}>{message}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  formContainer: {
    width: "100%",
    backgroundColor: "#fff",
    paddingVertical: 30,
    paddingHorizontal: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    height: 48,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#f8f8f8",
  },
  signInButton: {
    backgroundColor: "#900090",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  orText: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 16,
    color: "#555",
    fontWeight: "bold",
  },
  signUpButton: {
    backgroundColor: "#ff8c00",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "50%",
    maxWidth: 400,
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: "center",
  },
  modalMessage: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 8,
    width: "100%",
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default LoginPage;
