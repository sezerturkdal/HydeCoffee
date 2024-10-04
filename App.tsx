import React from 'react';
import {
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './src/pages/WelcomeScreen';
import OrderScreen from './src/pages/OrderScreen';
import LoyaltyScreen from './src/pages/OrderScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AnimatedTabButton from './src/components/AnimatedTabButton'



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      {/* Bottom Tab Navigator tanımı */}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Welcome') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Order') {
              iconName = focused ? 'coffee' : 'coffee';
            } else if (route.name === 'Loyalty') {
              iconName = focused ? 'gift' : 'gift';
            }
            return <FontAwesomeIcon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
           
            backgroundColor: 'white', // Tab bar arka plan rengi
            paddingVertical: 10, // Üst ve alt boşluk
          },
          tabBarButton: (props) => <View style={{flex:1, alignItems: 'center'}}><AnimatedTabButton {...props} /></View>
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Order" component={OrderScreen}  options={{ headerShown: false }} />
        <Tab.Screen name="Loyalty" component={LoyaltyScreen} options={{ headerShown: false }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
