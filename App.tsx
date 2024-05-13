import { Button, StyleSheet, Text, Alert, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


export default function App() {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [display, setDisplay] = useState()

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };




  const resetFormData = () => {
    setDisplay(false);
    setEmail('');
    setName('');
    setPassword('');
  }

  //For email validation 
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = (text) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmail(text);
    setIsValidEmail(regex.test(text));
  };

  return (
    <View>
      <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Simple Form with React Native</Text>
      <TextInput
        style={styles.textInput}
        placeholder='Enter Your Name Please'
        onChangeText={(text) => setName(text)}
        value={name}

      />
      <View style={styles.container}>
        <TextInput
          style={[styles.input, !isValidEmail && styles.inputError]}
          placeholder="Enter Email"
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!isValidEmail && <Text style={styles.errorText}>Please enter a valid email address</Text>}
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
          <Text style={styles.toggleButtonText}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <Button title='Print Value' onPress={() => setDisplay(true)} />
      </View>
      <View style={styles.button}>
        <Button color={'red'} title='Clear' onPress={resetFormData} />
      </View>
      {
        display ?
          <View style={styles.formText}>
            <Text>User Name is : {name}</Text>
            <Text>User Email is : {email}</Text>
            <Text >User Password is : {password}</Text>
          </View> : null
      }
    </View>
  )
}




const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue', // Background color of the button
    paddingHorizontal: 20, // Horizontal padding
    paddingVertical: 10, // Vertical padding
    borderRadius: 5, // Border radius to make it rounded
    color: 'white', // Text color
    fontSize: 16, // Font size
    fontWeight: 'bold', // Font weight
    textAlign: 'center', // Text alignment
  },
  formText: {
    backgroundColor: 'pink',
    borderRadius: 8,
    color: 'black',
    fontSize: 30,
    padding: 20,
    margin: 10,
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  toggleButton: {
    padding: 10,
  },
  toggleButtonText: {
    fontSize: 16,
    color: 'blue',
  },

});