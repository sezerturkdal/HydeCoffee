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

const SignInScreen: React.FC =({ navigation }) => { 
    const [phone, setPhone] = useState<string>('');

    const handleSignUp = () => {
        if (!phone) {
            Alert.alert('Error', 'Please enter your phone number.');
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
            <Text style={styles.header}>Sign In</Text>

            {/* Phone */}
            <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={setPhone}
            />

            {/* Sign In Button */}
            <TouchableOpacity
                style={styles.button}
                //onPress={handleSignIn}
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

            {/* Don't have an account? Sign up */}
            <View style={styles.signUpContainer}>
                <Text style={styles.subtitle}>Already have an account?</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('SignUpScreen')}  style={styles.signUpButton}>
                    <Text style={styles.txtSignUp}> SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
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
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    signUpButton: {
        justifyContent: 'center',
        paddingTop: 20
    },
    txtSignUp: {
        fontSize: 16,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#6c757d',
    },
});

export default SignInScreen;
