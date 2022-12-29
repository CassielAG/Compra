import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Sams_btn() {
  return (
    <View>
      <Button
        title="Press me"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
      />
      <Image
      style={styles.tinyLogo}
      source={{
        uri: './assets/Sams.png',
      }}
    />
    </View>
  )
}

const styles = StyleSheet.create({})