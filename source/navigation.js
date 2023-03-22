import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from './screens/ProductsScreen';
import DetailsScreen from './screens/detailsScreen';
import ProfileScreen from './screens/profileScreen';
import { Pressable } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Products" component={ProductsScreen} options={({navigation}) => ({
            headerRight: () => (
            <Pressable onPress = {() => navigation.navigate('Profile')}>
                <FontAwesome5 name="user-circle" size={24} color="#FF8B13"/> 
            </Pressable>
            )
            })}
        />
        <Stack.Screen name="Product Details" component={DetailsScreen} options={{presentation: 'modal'}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default Navigation;