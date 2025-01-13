import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const VerifyEmailScreen: React.FC =({ navigation }) => { 
    const [code, setCode] = useState<string>('');

    const handleVerify = () => {
        if (!code) {
            Alert.alert('Error', 'Please enter your code number.');
            return;
        }

        Alert.alert('Success', 'You have successfully signed in!');
    };

    const handleSignUpRedirect = () => {
        Alert.alert('Navigate', 'Redirecting to Sign Up screen...');
        // Burada navigation logic'i kullanabilirsiniz. Örneğin:
        // navigation.navigate('SignUp');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
             {/* Back Button */}
             <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('WelcomeScreen')}
            >
                <FontAwesomeIcon name='arrow-left' size={14} style={{  paddingVertical: 5, paddingHorizontal: 5 }} />
            </TouchableOpacity>

            <Text style={styles.header}>Verify email</Text>
            <Text style={styles.description}>Code sent to example@gmail.com</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('SignUpScreen')}  style={styles.resendCodeButton}>
                    <Text style={styles.txtResendCode}>RESEND CODE</Text>
                </TouchableOpacity>
            {/* code */}
            <TextInput
                style={styles.input}
                placeholder="Enter your code"
                value={code}
                onChangeText={setCode}
            />

            {/* Sign In Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={handleVerify}
            >
                <Text style={styles.buttonText}>Verify</Text>
            </TouchableOpacity>

            {/* Don't have an account? Sign up */}
            <View style={styles.supportContainer}>
                <Text style={styles.subtitle}>Trouble signing in?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('WelcomeScreen')}  style={styles.contactSupportButton}>
                    <Text style={styles.txtSupport}>CONTACT SUPPORT</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop:80,
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    description:{
        fontSize: 14,
        marginBottom: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#FFF3E0',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    supportContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    resendCodeButton: {
        justifyContent: 'center',
        paddingTop: 20
    },
    txtSupport: {
        fontSize: 14,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 5,
        textAlign: 'center',
    },
    txtResendCode:{
        fontSize: 16,
        color: '#80837f',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 16,
        color: '#6c757d',
    },
    backButton: {
        backgroundColor: '#a0d88b',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        alignItems: 'center',
        width:35,
        height:35
    },
    contactSupportButton:{
        justifyContent: 'center',
        paddingTop: 20
    }
});

export default VerifyEmailScreen;
