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
import CheckBox from '@react-native-community/checkbox';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'

const SignUpScreen: React.FC = ({ navigation }) => {
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [birthday, setBirthday] = useState<string>('');
    const [isTermsAccepted, setIsTermsAccepted] = useState<boolean>(false);

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    const formatDate = (dateString) => {
        const date = new Date(dateString); // ISO formatını Date objesine çevir
        const day = String(date.getDate()).padStart(2, '0'); // Gün
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Ay (0-indexli olduğu için +1)
        const year = date.getFullYear(); // Yıl
      
        return `${day}-${month}-${year}`; // İstenen format
      };

    const handleSignUp = () => {
        if (!fullName || !email || !phone) {
            Alert.alert('Error', 'Please fill in all required fields.');
            return;
        }

        if (!isTermsAccepted) {
            Alert.alert('Error', 'You must accept the Terms and Privacy Policy to proceed.');
            return;
        }

        Alert.alert('Success', 'You have successfully signed up!');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.navigate('WelcomeScreen')}
            >
                <FontAwesomeIcon name='arrow-left' size={14} style={{ paddingVertical: 5, paddingHorizontal: 5 }} />
            </TouchableOpacity>

            <Text style={styles.header}>Sign Up</Text>

            {/* Full Name */}
            <TextInput
                style={styles.input}
                placeholder="Enter your full name"
                value={fullName}
                onChangeText={setFullName}
            />

            {/* Email */}
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                value={email}
                keyboardType="email-address"
                onChangeText={setEmail}
            />

            {/* Phone */}
            <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                value={phone}
                keyboardType="phone-pad"
                onChangeText={setPhone}
            />

            {/* Birthday */}
            <TextInput
                style={styles.input}
                placeholder="DD-MM-YYYY (Optional)"
                value={birthday}
                onFocus={() => setOpen(true)}
            />
            <DatePicker
                modal
                open={open}
                date={date}
                mode="date"
                minimumDate={new Date("1930-01-01")}
                maximumDate={new Date("2020-01-01")}
                onConfirm={(date) => {               
                    setOpen(false)
                    setBirthday(formatDate(date))
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />

            {/* Terms and Privacy Policy */}
            <View style={styles.checkboxContainer}>
                <CheckBox
                    value={isTermsAccepted}
                    onValueChange={setIsTermsAccepted}
                    tintColors={{ true: '#007BFF', false: '#ccc' }}
                />
                <Text style={styles.checkboxLabel}>
                    I accept the{' '}
                    <Text style={styles.link} onPress={() => Alert.alert('Terms of Service')}>
                        Terms
                    </Text>{' '}
                    and{' '}
                    <Text style={styles.link} onPress={() => Alert.alert('Privacy Policy')}>
                        Privacy Policy
                    </Text>
                </Text>
            </View>

            {/* Sign Up Button */}
            <TouchableOpacity
                style={[styles.button, !isTermsAccepted && styles.buttonDisabled]}
                onPress={handleSignUp}
                disabled={!isTermsAccepted}
            >
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Already have an account */}
            <View style={styles.signInContainer}>
                <Text style={styles.subtitle}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style={styles.signInButton}>
                    <Text style={styles.txtSignIn}> SIGN IN</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
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
        backgroundColor: '#FFF3E0', // Soft renklendirme
        borderRadius: 8,
        padding: 15, // Yükseklik artırıldı
        marginBottom: 15,
        fontSize: 16,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkboxLabel: {
        marginLeft: 10,
        fontSize: 14,
        color: '#333',
    },
    link: {
        color: '#007BFF',
        textDecorationLine: 'underline',
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 40

    },
    signInButton: {
        justifyContent: 'center',
        paddingTop: 20
    },
    txtSignIn: {
        fontSize: 16,
        color: '#a0d88b',
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
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
        width: 35,
        height: 35
    }
});

export default SignUpScreen;
