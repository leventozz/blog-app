import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from './context/BlogContext';
import IndexScreen from './screens/IndexScreen';
import CreateScreen from './screens/CreateScreen';
import BlogScreen from './screens/BlogScreen';
import EditScreen from './screens/EditScreen';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitle: 'Blog App' }}>
          <Stack.Screen name="Index" component={IndexScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
                <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Create" component={CreateScreen} />
          <Stack.Screen name="Blog" component={BlogScreen} options={({ navigation }) => ({
            headerRight: () => (
              <TouchableOpacity onPress={()=> navigation.navigate('Edit')}>
                <Feather name="edit" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />
          <Stack.Screen name="Edit" component={EditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
