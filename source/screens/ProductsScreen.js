import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import products from '../data/products.js';


const ProductsScreen = () => {
  const navigation = useNavigation();
  
  return (
    <FlatList data={products}
      renderItem={({ item }) => (
        <Pressable onPress = {() => navigation.navigate('Product Details')}style={{ width: "50%", padding: 1 }}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
  )}
  numColumns={2}/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8B13',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: "100%", aspectRatio: 1}
});

export default ProductsScreen;