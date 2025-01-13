import React from 'react';
import { StyleSheet, useColorScheme, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './src/pages/WelcomeScreen';
import OrderScreen from './src/pages/OrderScreen';
import OrderDetailScreen from './src/pages/OrderDetailScreen'; // Import the detail screen
import LoyaltyScreen from './src/pages/LoyaltyScreen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AnimatedTabButton from './src/components/AnimatedTabButton';
import SignUpScreen from './src/pages/SignUpScreen';
import SignInScreen from './src/pages/SignInScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function OrderStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OrderScreen"
        component={OrderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{ title: 'Order Details' }}
      />
    </Stack.Navigator>
  );
}

function WelcomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: 'Sign up', headerShown: false  }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ title: 'Sign in', headerShown: false  }}
      />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
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
            backgroundColor: 'white',
            paddingVertical: 10,
          },
          tabBarButton: (props) => (
            <View style={{ flex: 1, alignItems: 'center' }}>
              <AnimatedTabButton {...props} />
            </View>
          ),
        })}
      >
        <Tab.Screen name="Welcome" component={WelcomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="Order" component={OrderStack} options={{ headerShown: false }} />
        <Tab.Screen name="Loyalty" component={LoyaltyScreen} options={{ headerShown: false }} />
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
