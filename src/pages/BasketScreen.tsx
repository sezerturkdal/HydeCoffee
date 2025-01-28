import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import BasketItem from '../components/BasketItem';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import {
    setTotalPrice,
    incrementTotalPrice,
    decrementTotalPrice,
} from '../slices/totalPriceSlice';

const BasketScreen: React.FC = ({ route, navigation }) => {

    const totalPrice = useSelector((state: RootState) => state.totalPrice.value ?? 0);

    const totalPriceFloat = parseFloat(totalPrice);
    console.log('sss', totalPriceFloat)

    const dispatch: AppDispatch = useDispatch();

    const [selectedOptionForSize, setSelectedOptionForSize] = useState(2);
    const [selectedOptionForMilk, setSelectedOptionForMilk] = useState(3);
    const [selectedOptionForTemperature, setSelectedOptionForTemperature] = useState(1);
    const [selectedOptionForExtraShot, setSelectedOptionForExtraShot] = useState(1);
    const [selectedOptionForFlavor, setSelectedOptionForFlavor] = useState(null);
    const [selectedOptionForCoffeeType, setSelectedOptionForCoffeeType] = useState(1);
    const [useOwnCup, setUseOwnCup] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);

    const handlePressQuantity = (amount) => {
        setQuantity(quantity + amount)
    };

    useEffect(() => {
        if (selectedOptionForCoffeeType !== null
            || selectedOptionForExtraShot !== null
            || selectedOptionForFlavor !== null
            || selectedOptionForMilk !== null
            || selectedOptionForSize !== null) {
            calculatePrice();
        }
    }, [selectedOptionForCoffeeType, selectedOptionForExtraShot, selectedOptionForFlavor, selectedOptionForMilk, selectedOptionForSize, quantity]);

    const calculatePrice = () => {

    }

    const handleOrder = () => {
        const orderDetails = {
            selectedOptionForMilk,
            selectedOptionForTemperature,
            selectedOptionForExtraShot,
            useOwnCup,
            selectedOptionForSize,
            quantity,
        };
        console.log('Order Details:', orderDetails);

        Alert.alert('Added to basket!', '', [
            {
                text: 'OK', onPress: () => {
                    const tp = totalPriceFloat + currentPrice
                    dispatch(setTotalPrice(tp));
                    navigation.navigate('OrderScreen')
                }
            },
        ]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Back Button */}
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate('OrderScreen')}
                >
                    <FontAwesomeIcon name='arrow-left' size={14} style={{ paddingVertical: 5, paddingHorizontal: 5 }} />
                </TouchableOpacity>


                <Text style={styles.header}>Basket</Text>
                <Text style={styles.headerSubText}>Order detail</Text>

                {/* Coffee Type */}

               
                    <BasketItem
                        image={require('../assets/images/latte1.png')} // Ürün resmi
                        price="4.00"  // Fiyat dinamik olarak
                        name="Latte"
                        description="Extra hot + Vanilla"
                    />

                <Text style={styles.note}>Prices include VAT.</Text>



            </ScrollView>
            {/* Order Button */}
            <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                <Text style={styles.orderButtonText}>PROCEED TO CHECKOUT (£{`${parseFloat(3.30).toFixed(2)}`}) </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff8f5',
    },
    container: {
        padding: 20,
        paddingBottom: 70,
        backgroundColor: '#fff8f5',
    },
    headerContainer: {
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.2, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow blur radius for iOS
        elevation: 5, // Shadow for Android
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    headerSubText:{
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 5,
    },
    description: {
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 20,
    },
    calorie: {
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 20,
    },
    allergens: {
        fontSize: 12,
        marginLeft: 20,
        marginBottom: 20,
    },
    imageContainer: {
        flexDirection: 'row',       // Yatayda hizalama için row
        justifyContent: 'center',   // Yatayda ortalamak için
        alignItems: 'center',       // Dikeyde ortalamak için (isteğe bağlı)
        width: '50%',              // Genişlik: kapsayıcı tüm alanı kapsasın
    },
    optinMainContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Seçeneklerin birden fazla satıra sığması için
        justifyContent: 'space-between', // Seçenekler arasında boşluk bırakır
        padding: 10, // İçerik dolgusunu artırdık
    },
    optionContainer: {
        backgroundColor: '#fff8f5',
        width: '30%', // Seçeneklerin bir sırada 3 tane görünmesi için genişlik
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        flexDirection: 'row',
    },
    optionContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
        padding: 10
    },
    optionSelected: {
        borderColor: '#599974',

    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#599974',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#599974',
    },
    textContainer: {
        flex: 1,
    },
    optionHeaderLabel: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        marginLeft: 10
    },
    optionLabel: {
        fontSize: 10,
        fontWeight: 'bold',
    },
    optionDescription: {
        fontSize: 10,
        color: '#666',
    },
    optionPrice: {
        fontSize: 12,
        color: '#666',
        marginTop: 5
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantityButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
    },
    quantityButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 18,
        marginHorizontal: 10,
    },
    toggleButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f9f9f9',
    },
    toggleButtonActive: {
        backgroundColor: '#599974',
        borderColor: '#FFF3E0',
    },
    toggleButtonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    orderButton: {
        position: 'absolute',    // Fix the button at the bottom
        bottom: 10,               // Align to the bottom of the screen
        left: 20,                 // Align to the left of the screen
        right: 20,                // Ensure the button spans the full width
        borderRadius: 20,
        backgroundColor: '#599974',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    orderButtonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    sectionContainer: {
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.2, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow blur radius for iOS
        elevation: 5, // Shadow for Android
    },
    backButton: {
        backgroundColor: '#a0d88b',
        paddingVertical: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        alignItems: 'center',
        width: 35,
        height: 35
    },
    enabledButton: {
        opacity: 1
    },
    disabledButton: {
        opacity: 0.3,
    },
    note:{
        marginTop:10,
        fontSize:14
    }
});

export default BasketScreen;
