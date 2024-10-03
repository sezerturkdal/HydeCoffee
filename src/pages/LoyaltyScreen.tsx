import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


const LoyaltyScreen = ({ navigation }: LoyaltyScreenProps): React.JSX.Element => {
    return (
        <View style={styles.container}>
          <Text>Loyalty Screen</Text>
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

  export default LoyaltyScreen;