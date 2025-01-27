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

const OrderDetailScreen: React.FC = ({ route, navigation }) => {

    const {
        productName,
        productPrice,
        sizeOption,
        milkOption,
        temperatureOption,
        extraShotOption,
        ownCupOption,
        coffeeTypeOption,
        flavorsOption
    } = route.params;


    const milkOptions = [
        { id: 1, label: 'Whole', extraPrice: 0.00 },
        { id: 2, label: 'Skimmed', extraPrice: 0.00 },
        { id: 3, label: 'Semi Skimmed', extraPrice: 0.00 },
        { id: 4, label: 'Soya', extraPrice: 0.45 },
        { id: 5, label: 'Oat', extraPrice: 0.45 },
        { id: 6, label: 'Coconut', extraPrice: 0.60 },
    ];

    const temperatureOptions = [
        { id: 1, label: 'Standard' },
        { id: 2, label: 'Extra Hot' }
    ];

    const extraShotOptions = [
        { id: 1, label: 'Standard', extraPrice: 0.00 },
        { id: 2, label: '+1 Shot', extraPrice: 0.50 }
    ];

    const sizeOptions = [
        { id: 1, label: 'Small', amountOfDrink: '8oz', price: -0.20 },
        { id: 2, label: 'Medium', amountOfDrink: '10oz', price: 0.00 },
        { id: 3, label: 'Large', amountOfDrink: '12oz', price: 0.20 },
    ];

    const coffeeTypeOptions = [
        { id: 1, label: 'Standard', extraPrice: 0.00 },
        { id: 2, label: 'Seasonal Beans', extraPrice: 0.30 },
        { id: 3, label: 'Decaf', extraPrice: 0.10 }
    ];

    const flavorOptions = [
        { id: 1, label: 'Hazelnut', extraPrice: 0.50 },
        { id: 2, label: 'Vanilla', extraPrice: 0.50 },
        { id: 3, label: 'Caramel', extraPrice: 0.50 }
    ];


    const [selectedOptionForSize, setSelectedOptionForSize] = useState(2);
    const [selectedOptionForMilk, setSelectedOptionForMilk] = useState(3);
    const [selectedOptionForTemperature, setSelectedOptionForTemperature] = useState(1);
    const [selectedOptionForExtraShot, setSelectedOptionForExtraShot] = useState(1);
    const [selectedOptionForFlavor, setSelectedOptionForFlavor] = useState(null);
    const [selectedOptionForCoffeeType, setSelectedOptionForCoffeeType] = useState(1);
    const [useOwnCup, setUseOwnCup] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1);
    const [currentPrice, setCurrentPrice] = useState<number>(productPrice.toFixed(2));

    const handlePressSize = (option) => {
        setSelectedOptionForSize(option.id);
    };

    const handlePressMilk = (id) => {
        setSelectedOptionForMilk(id);
    };

    const handlePressCoffeeType = (coffeeType) => {
        setSelectedOptionForCoffeeType(coffeeType.id);
    };

    const handlePressTemperature = (id) => {
        setSelectedOptionForTemperature(id);
    };

    const handlePressExtraShot = (id) => {
        setSelectedOptionForExtraShot(id);
    };

    const handlePressFlavor = (id) => {
        if (selectedOptionForFlavor == id) {
            setSelectedOptionForFlavor(null);
        } else {
            setSelectedOptionForFlavor(id);
        }
    };

    const handlePressQuantity = (amount) => {
        setQuantity(quantity+amount)
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
        const selectedSizePrice = sizeOptions.find(option => option.id === selectedOptionForSize)?.price ?? 0;
        const selectedMilkPrice = milkOptions.find(option => option.id === selectedOptionForMilk)?.extraPrice ?? 0;
        const selectedFlavorPrice = flavorOptions.find(option => option.id === selectedOptionForFlavor)?.extraPrice ?? 0;
        const selectedCoffeeTypePrice = coffeeTypeOptions.find(option => option.id === selectedOptionForCoffeeType)?.extraPrice ?? 0;
        const selectedExtraShotPrice = extraShotOptions.find(option => option.id === selectedOptionForExtraShot)?.extraPrice ?? 0;

        console.log("ProductPrice", productPrice)
        console.log("milk", selectedMilkPrice)
        console.log("flavor", selectedFlavorPrice)
        console.log("type", selectedCoffeeTypePrice)
        console.log("shot", selectedExtraShotPrice)

        const totalPrice = productPrice + selectedSizePrice + selectedMilkPrice + selectedFlavorPrice + selectedCoffeeTypePrice + selectedExtraShotPrice;
        const totalPriceAsNumber = parseFloat(totalPrice*quantity);
        const formattedPrice = totalPriceAsNumber.toFixed(2);
        setCurrentPrice(formattedPrice)
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
            {text: 'OK', onPress: () => navigation.navigate('OrderScreen')},
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
                {/* Ürün Görseli */}
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/images/cappuccino1.png')}
                        style={styles.productImage}
                    />
                </View>

                <View style={styles.headerContainer}>
                    <Text style={styles.header}>{productName}</Text>

                    <Text style={styles.description}>Milk over espresso with a layer of microfoam.</Text>

                    <Text style={styles.calorie}>Kcal: 140 - 233</Text>

                    <Text style={styles.allergens}>Allergens: Dairy</Text>


                    {/* Size */}
                    {sizeOption == "1" ?
                        <View>
                            <Text style={styles.optionHeaderLabel}>Size</Text>
                            <View style={styles.optinMainContainer}>
                                {sizeOptions.map((option) => (
                                    <TouchableOpacity
                                        key={option.id}
                                        style={[
                                            styles.optionContainer,
                                            selectedOptionForSize === option.id && styles.optionSelected,
                                        ]}
                                        onPress={() => handlePressSize(option)}
                                    >
                                        <View style={styles.radioButton}>
                                            {selectedOptionForSize === option.id && <View style={styles.radioButtonSelected} />}
                                        </View>
                                        <View style={styles.textContainer}>
                                            <Text style={styles.optionLabel}>{option.label}</Text>
                                            <Text style={styles.optionDescription}>{option.amountOfDrink}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </View>
                        : null}
                </View>

                {/* Coffee Type */}
                {coffeeTypeOption == "1" ?
                    <View style={styles.sectionContainer}>
                        <Text style={styles.optionHeaderLabel}>Coffee Beans</Text>
                        <View style={styles.optinMainContainer}>
                            {coffeeTypeOptions.map((coffee) => (
                                <TouchableOpacity
                                    key={coffee.id}
                                    style={[
                                        styles.optionContainer,
                                        selectedOptionForCoffeeType === coffee.id && styles.optionSelected,
                                    ]}
                                    onPress={() => handlePressCoffeeType(coffee)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedOptionForCoffeeType === coffee.id && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.optionLabel}>{coffee.label}</Text>
                                        {coffee.extraPrice > 0 && (
                                            <Text style={styles.optionPrice}>{`+ £${coffee.extraPrice.toFixed(2)}`}</Text>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    :
                    null}

                {/* Milk Preference */}
                {milkOption == "1" ?
                    <View style={styles.sectionContainer}>
                        <Text style={styles.optionHeaderLabel}>Milk Preference</Text>
                        <View style={styles.optinMainContainer}>
                            {milkOptions.map((option) => (
                                <TouchableOpacity
                                    key={option.id}
                                    style={[
                                        styles.optionContainer,
                                        selectedOptionForMilk === option.id && styles.optionSelected,
                                        { height: 50 }
                                    ]}
                                    onPress={() => handlePressMilk(option.id)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedOptionForMilk === option.id && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.optionLabel}>{option.label}</Text>
                                        {option.extraPrice > 0 && (
                                            <Text style={styles.optionPrice}>{`+ £${option.extraPrice.toFixed(2)}`}</Text>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    : null}

                {/* Temperature */}
                {temperatureOption == "1" ?
                    <View style={styles.sectionContainer}>
                        <Text style={styles.optionHeaderLabel}>Temperature</Text>
                        <View style={styles.optinMainContainer}>
                            {temperatureOptions.map((option) => (
                                <TouchableOpacity
                                    key={option.id}
                                    style={[
                                        styles.optionContainer,
                                        selectedOptionForTemperature === option.id && styles.optionSelected,
                                        { height: 50, width: '45%' }
                                    ]}
                                    onPress={() => handlePressTemperature(option.id)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedOptionForTemperature === option.id && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.optionLabel}>{option.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    : null}

                {/* Extra Shot */}
                {extraShotOption == "1" ?
                    <View style={styles.sectionContainer}>
                        <Text style={styles.optionHeaderLabel}>Extra Shot</Text>
                        <View style={styles.optinMainContainer}>
                            {extraShotOptions.map((option) => (
                                <TouchableOpacity
                                    key={option.id}
                                    style={[
                                        styles.optionContainer,
                                        selectedOptionForExtraShot === option.id && styles.optionSelected,
                                        { height: 50, width: '45%' }
                                    ]}
                                    onPress={() => handlePressExtraShot(option.id)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedOptionForExtraShot === option.id && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.optionLabel}>{option.label}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    : null}

                {/* Flavors */}
                {flavorsOption == "1" ?
                    <View style={styles.sectionContainer}>
                        <Text style={styles.optionHeaderLabel}>Flavors</Text>
                        <View style={styles.optinMainContainer}>
                            {flavorOptions.map((flavor) => (
                                <TouchableOpacity
                                    key={flavor.id}
                                    style={[
                                        styles.optionContainer,
                                        selectedOptionForSize === flavor.id && styles.optionSelected,
                                    ]}
                                    onPress={() => handlePressFlavor(flavor.id)}
                                >
                                    <View style={styles.radioButton}>
                                        {selectedOptionForFlavor === flavor.id && <View style={styles.radioButtonSelected} />}
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.optionLabel}>{flavor.label}</Text>
                                        {flavor.extraPrice > 0 && (
                                            <Text style={styles.optionPrice}>{`+ £${flavor.extraPrice.toFixed(2)}`}</Text>
                                        )}
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    : null}

                {/* Quantity */}
                <View style={styles.sectionContainer}>
                <View style={styles.optionContainerRow}>
                    <Text style={styles.optionHeaderLabel}>Quantity</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={[
                                styles.quantityButton,
                                quantity<=1 ? styles.disabledButton : styles.enabledButton,
                              ]}
                            onPress={() => handlePressQuantity(-1)}
                            disabled={quantity<=1?true:false}
                        >
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity
                             style={[
                                styles.quantityButton,
                                quantity>=10 ? styles.disabledButton : styles.enabledButton,
                              ]}
                            onPress={() => handlePressQuantity(1)}
                            disabled={quantity>=10?true:false}
                        >
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </View>

                {/* Use Own Cup */}
                {ownCupOption == "1" ?
                    <View style={[styles.optionContainerRow, { marginTop: 10 }]}>
                        <Text style={{ fontSize: 14,fontWeight: 'bold',}}>Use Own Cup</Text>
                        <TouchableOpacity
                            style={[styles.toggleButton, useOwnCup && styles.toggleButtonActive]}
                            onPress={() => setUseOwnCup(!useOwnCup)}
                        >
                            <Text style={styles.toggleButtonText}>{useOwnCup ? 'Yes' : 'No'}</Text>
                        </TouchableOpacity>
                    </View>
                    : null}


            </ScrollView>
            {/* Order Button */}
            <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                <Text style={styles.orderButtonText}>ADD TO BAG (£{`${currentPrice}`}) </Text>
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
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
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
        width: '100%',              // Genişlik: kapsayıcı tüm alanı kapsasın
    },
    productImage: {
        width: 200,   // Görselin genişliği
        height: 200,  // Görselin yüksekliği
        resizeMode: 'contain',  // Görselin boyutlandırma modu
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
        fontSize: 16,
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
});

export default OrderDetailScreen;
