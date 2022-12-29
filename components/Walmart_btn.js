import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Walmart_btn() {
  return (
    <View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})