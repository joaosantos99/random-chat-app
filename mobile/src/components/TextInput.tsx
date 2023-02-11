import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setMessage}
        value={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default ChatInput;
