import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker} from 'react-native-maps';


type SelectStoreScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const SelectStoreScreen = ({ navigation }: SelectStoreScreenProps): React.JSX.Element => {

    const [greeting, setGreeting] = useState('');
    const [firstName, setFirstName] = useState('');
    const [initials, setInitials] = useState('');
    const userName = 'Samuel Philips '; // Kullanıcı adını buradan alabilirsiniz


    return (

        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <View style={{ flexDirection: "row", alignItems: 'center', width:'100%' }}>
                        {/* Back Button */}
                        <TouchableOpacity
                            style={styles.backButton}
                            onPress={() => navigation.navigate('OrderScreen')}
                        >
                            <FontAwesomeIcon name='arrow-left' size={14} style={{ paddingVertical: 5, paddingHorizontal: 5 }} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.locationButton}
                            onPress={() => navigation.navigate('WelcomeScreen')}
                        >
                            <FontAwesomeIcon name='map-marker' size={14} style={{ paddingVertical: 5, paddingHorizontal: 5 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.titleContainer}>
                        <Text style={styles.greetingText}>
                           
                        </Text>
                    </View>
                    <View style={styles.btnReedemContainer}>
                        <TouchableOpacity style={styles.btnReedem} onPress={() => navigation.navigate('SignUpScreen')}>
                            <Text style={styles.btnReedemText}>REEDEM AT CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

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
        backgroundColor: '#ffffff',
        width: '100%',
        paddingBottom: 50
    },
    titleContainer: {
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    greetingText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#343a40',
    },
    subtitle: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    coverPhoto: {
        width: '94%',
        height: 400,
        borderRadius: 30,
        left: '3%',
        right: '3%'
    },
    btnReedemContainer: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    btnReedem: {
        backgroundColor: 'green',
        width: '80%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    btnReedemText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    txtSignIn: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    statusBarContainer: {
        height: StatusBar.currentHeight,
        backgroundColor: '#ffffff',
    },
    txtDeliveryPartners: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 30
    },
    backButton: {
        backgroundColor: '#a0d88b',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        alignItems: 'center',
        width:35,
        height:35,
        left:5,
    },
    locationButton:{
        backgroundColor: '#a0d88b',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        alignItems: 'center',
        width:35,
        height:35,
        right:5,
        position:'absolute'
    },
    deliveryCompanyContainer: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtDeliveryCompanyName: {
        color: '#00000',
        fontSize: 16,
    },
    deliveryLogo: {
        height: 35,
        width: 35,
        left: 10,
        marginRight: 10,
        borderRadius: 5
    },
    txtDeliveryDescription: {
        fontSize: 10,
        color: '#494a49'
    },
    deliveryCompanyNameContainer: {
        marginLeft: 10,
        marginRight: 10
    },
    deliveryOrderButton: {
        right: 10,
        position: 'absolute',
        backgroundColor: '#64e9f5',
        width: 70,
        height: 20,
        borderRadius: 25,
        justifyContent: 'center',
    },
    btnDeliveryOrderButtonText: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white'
    },
    initialsButton: {
        backgroundColor: '#a0d88b',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        alignItems: 'center',
        width: 35,
        height: 35
    },
    txtInitials: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 3
    },
    initialsButtonBorder: {
        margin: 10,
        padding: 4,
        borderWidth: 1,
        borderColor: '#a0d88b',
        borderRadius: 45,
        width: 45,
        height: 45
    },
    brandText: {
        textAlign: 'center',
        width: '100%',
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 18
    },
    whatsNewText: {
        marginTop: 20,
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default SelectStoreScreen;
