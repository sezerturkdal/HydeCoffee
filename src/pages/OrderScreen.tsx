import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';


const OrderScreen = ({ navigation }: OrderScreenProps): React.JSX.Element => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnChangeLocation}>
            <Text style={styles.btnChangeLocationText}>CHANGE LOCATION</Text>
            <FontAwesomeIcon name='arrow-down' size={13} style={{ marginLeft: 5 }} />
          </TouchableOpacity>
          <View style={styles.selectedStore}>
            <Text style={styles.txtSelectedStoreName}>King's Road</Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                style={styles.storeImage}
                source={require('../assets/images/deliveroo_logo.jpeg')}
              />
              <View style={{ flexDirection: 'column' }}>
                <Text style={styles.selectedStoreDescription}>67 King's Road, London</Text>
                <Text style={styles.selectedStoreDescription}>Open today 6:30AM-7:00PM</Text>
                <TouchableOpacity style={styles.btnStoreStatus}>
                  <Text style={styles.btnStoreStatusText}>CLOSED</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',

  },
  container: {
    flex: 1,
  },
  btnChangeLocation: {
    marginTop: 10,
    marginLeft: '25%',
    marginRight: '25%',
    height: 30,
    width: '50%',
    backgroundColor: '#edebeb',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  },
  btnChangeLocationText: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000',
  },
  selectedStore: {
    marginTop: 50,
    marginLeft: '5%',
    marginRight: '5%',
    padding: '3%',
    width: '90%',
    height: 180,
    borderRadius: 20,
    backgroundColor: '#edebeb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.50,
    shadowRadius: 3,
  },
  txtSelectedStoreName: {
    fontWeight: '600',
    fontSize: 30,
    paddingBottom: 20
  },
  storeImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 20
  },
  selectedStoreDescription:{
    marginBottom:10
  },
  btnStoreStatus: {
    marginTop: 10,
    height: 30,
    width: '50%',
    backgroundColor: '#fabee3',
    borderRadius: 20,
    borderWidth:3,
    borderColor:'#ffff',
    alignItems: 'center',
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center'
  },
  btnStoreStatusText:{
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000',
  }
});


export default OrderScreen;