import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native'
import Button from './Button'

const route = {
  type: 'push',
  route: {
    key: 'about',
    title: 'About',
	userName:'',
    email:'',
    pwd:'',
    mobile:''
  }
}

const Home = ({_handleNavigate}) => (
  <View style={styles.container}>
    <Text style={styles.title}>Enter below details</Text>
	 <Text style={styles.text}>Name:</Text>
      <TextInput onChangeText={(text)=>route.userName=text}
        />
    <Text style={styles.text}>Password:</Text>
    <TextInput secureTextEntry={true}
               style={styles.password_input} onChangeText={(text)=>route.pwd=text}
        />
    <Text style={styles.text}>Email:</Text>
    <TextInput onChangeText={(text)=>route.email=text}
        />
    <Text style={styles.text}>Mobile Number:</Text>
    <TextInput onChangeText={(text)=>route.mobile=text}
        />
    <Button onPress={() => _handleNavigate(route)} label='Submit' />
  </View>
)

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    textAlign: 'center'
  },
  container: {
    paddingTop: 60
  }
})

export default Home