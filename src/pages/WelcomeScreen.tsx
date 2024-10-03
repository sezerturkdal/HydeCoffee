import React from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, ScrollView, Image, TouchableOpacity, StatusBar } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';


type WelcomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;

const WelcomeScreen = ({ navigation }: WelcomeScreenProps): React.JSX.Element => {
    return (

        <SafeAreaView style={styles.safeArea}>
            <ScrollView
                contentContainerStyle={styles.scrollContainer}
                contentInsetAdjustmentBehavior="automatic">
                <View style={styles.container}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Welcome! Order your first drink today</Text>
                    </View>
                    <Image
                        source={require('../assets/images/coffee2.jpg')}
                        style={styles.coverPhoto}
                    />
                    <View style={styles.btnSignupContainer}>
                        <TouchableOpacity style={styles.btnSignUp}>
                            <Text style={styles.btnSignUpText}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.signInContainer}>
                        <Text style={styles.subtitle}>Already have an account?</Text>
                        <Text style={styles.txtSignIn}> SIGN IN</Text>
                    </View>
                    <Text style={styles.txtDeliveryPartners}>Our delivery partners</Text>
                    <View style={styles.deliveryCompanyContainer}>
                        <View style={styles.btnDeliveryCompany}>
                            <Image
                                style={styles.deliveryLogo}
                                source={require('../assets/images/deliveroo_logo.jpeg')}
                            />
                            <View style={styles.deliveryCompanyNameContainer}>
                                <Text style={styles.txtDeliveryCompanyName}>Deliveroo</Text>
                                <Text style={styles.txtDeliveryDescription}>Takeaway</Text>
                            </View>
                            <TouchableOpacity style={styles.deliveryOrderButton}>
                                <Text style={styles.btnDeliveryOrderButtonText}>ORDER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
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
        width: '100%'
    },
    titleContainer: {
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    title: {
        width: '90%',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#6c757d',
        marginBottom: 20,
        textAlign: 'center',
        justifyContent: 'center',
    },
    coverPhoto: {
        width: '100%',
        height: 380,
    },
    btnSignupContainer: {
        alignItems: 'center',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
    },
    btnSignUp: {
        backgroundColor: 'green',
        width: '80%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    btnSignUpText: {
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
    btnDeliveryCompany: {
        width: '90%',
        height: 60,
        backgroundColor: '#edebeb',
        borderRadius: 10,
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.50,
        shadowRadius: 3,
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
        color:'#494a49'
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
    }
});

export default WelcomeScreen;
