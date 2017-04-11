import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import Button from './Button'

const About = ({formDetails}) => (

  <View style={styles.container}>
    <Text style={styles.title}>Form Details</Text>
    <Text style={styles.title}>Name : {formDetails.userName}</Text>
    <Text style={styles.title}>Email :{formDetails.email}</Text>
    <Text style={styles.title}>Mobile : {formDetails.mobile}</Text>

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

export default About