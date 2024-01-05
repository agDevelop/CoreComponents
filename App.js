import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text, // 1
  TextInput, // 2
  View, // 3
  ScrollView, // 4
  KeyboardAvoidingView, // 5
  TouchableWithoutFeedback, // 6
  Button, // 7
  StyleSheet,
  Keyboard,
  Platform,
} from "react-native";

let initialMessages = [
  { id: 0, msg: "Гончаров А.Н. 224-372" },
  { id: 1, msg: "Сюда можно добавлять сообщения" },
  { id: 2, msg: "Они будут отображаться по порядку" },
];

export default function App() {
  const [input, setInput] = useState("");
  const [messages, submitMessage] = useState(initialMessages);

  function newMessage() {
    newId = messages.length;
    submitMessage([...messages, { id: newId, msg: input }]);
    setInput("");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.header}>Задание №2</Text>
          <ScrollView>
            {messages.map((m) => (
              <Text style={styles.message} key={m.id}>
                {m.msg}
              </Text>
            ))}
          </ScrollView>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Введите текст"
              value={input}
              onChangeText={(msg) => setInput(msg)}
              style={styles.textInput}
              onSubmitEditing={() => newMessage()}
            />
            <Button title="Запись" onPress={() => newMessage()} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    marginTop: 48,
    marginBottom: 24,
  },
  inputContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 24,
    paddingHorizontal: 0,
  },
  textInput: {
    height: 40,
    width: 270,
    borderColor: "#000000",
    borderBottomWidth: 1,
  },
  btnContainer: {
    backgroundColor: "red",
  },
  message: {
    paddingVertical: 6,
  },
});
