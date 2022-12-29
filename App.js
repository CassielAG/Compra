import { StyleSheet, View } from 'react-native';
import Sams_btn from './components/Sams_btn';
import Walmart_btn from './components/Walmart_btn'

export default function App() {
  return (
    <View style={styles.container}>
      <Sams_btn></Sams_btn>
      <Walmart_btn></Walmart_btn>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
