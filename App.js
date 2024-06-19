import Home from './Components/home';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Components/login';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRoute={Login}>
      <Stack.Screen name="Login" component={Login}  options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
