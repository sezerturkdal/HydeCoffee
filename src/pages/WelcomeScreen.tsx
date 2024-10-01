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
        height: 360,
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
        borderRadius: 20,
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
        justifyContent: 'center'
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
    txtDeliveryPartners:{
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft:30
    }
});

export default WelcomeScreen;
