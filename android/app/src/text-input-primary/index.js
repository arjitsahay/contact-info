import React from "react";
import { StyleSheet, TextInput, Text } from "react-native";

const TextInputPrimary = () => {
    return (
      <React.Fragment>
          <Text style = {{fontSize: 15, marginLeft: 65, marginTop: 40}}>Name</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter Name"
              keyboardType="default"
              // onChangeText={(text) => this.onChangeText(text)}
          />
          <Text style = {{fontSize: 15, marginLeft: 65, marginTop: 15}}>Phone No</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter Phone No"
              keyboardType="numeric"
              maxLength={10}
          />
      </React.Fragment>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '70%',
    margin: 12,
    marginLeft: 55,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
});

export default TextInputPrimary;