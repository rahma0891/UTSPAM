import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import Navigation from './source/navigation'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      {/* <profileScreen/> */}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8B13',
  },
  image: {width: "100%", aspectRatio: 1}
});
