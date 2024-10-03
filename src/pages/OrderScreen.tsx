import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const OrderScreen = ({ navigation }: OrderScreenProps): React.JSX.Element => {
    return (
        <View style={styles.container}>
          <Text>Order Screen</Text>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });


  export default OrderScreen;