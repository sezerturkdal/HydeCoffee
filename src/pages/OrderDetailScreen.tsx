import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Image,  // Image bileşenini import et
} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

const OrderDetailScreen: React.FC = ({ route }) => {
    const { productName, productPrice } = route.params;
    const [milkPreference, setMilkPreference] = useState<string>('Whole Milk');
    const [temperature, setTemperature] = useState<string>('Hot');
    const [extraShot, setExtraShot] = useState<boolean>(false);
    const [useOwnCup, setUseOwnCup] = useState<boolean>(false);
    const [size, setSize] = useState<string>('Medium');
    const [quantity, setQuantity] = useState<number>(1);

    const milkOptions = [
        { id: '1', label: 'Whole Milk', value: 'Whole Milk' },
        { id: '2', label: 'Skim Milk', value: 'Skim Milk' },
        { id: '3', label: 'Soy Milk', value: 'Soy Milk' },
        { id: '4', label: 'Almond Milk', value: 'Almond Milk' },
        { id: '5', label: 'Oat Milk', value: 'Oat Milk' },
    ];

    const temperatureOptions = [
        { id: '1', label: 'Hot', value: 'Hot' },
        { id: '2', label: 'Warm', value: 'Warm' },
        { id: '3', label: 'Cold', value: 'Cold' },
    ];

    const sizeOptions = [
        { id: '1', label: 'Small', amountOfDrink: '8oz', price: '£3.50' },
        { id: '2', label: 'Medium', amountOfDrink: '10oz', price: '£3.75' },
        { id: '3', label: 'Large', amountOfDrink: '12oz', price: '£4.00' },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handlePress = (id) => {
        setSelectedOption(id);
    };

    const handleOrder = () => {
        const orderDetails = {
            milkPreference,
            temperature,
            extraShot,
            useOwnCup,
            size,
            quantity,
        };
        console.log('Order Details:', orderDetails);
        alert('Order placed successfully!');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
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
                    <Text style={styles.optionHeaderLabel}>Size</Text>
                    <View style={styles.optinMainContainer}>
                        {sizeOptions.map((option) => (
                            <TouchableOpacity
                                key={option.id}
                                style={[
                                    styles.optionContainer,
                                    selectedOption === option.id && styles.optionSelected,
                                ]}
                                onPress={() => handlePress(option.id)}
                            >
                                <View style={styles.radioButton}>
                                    {selectedOption === option.id && <View style={styles.radioButtonSelected} />}
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.optionLabel}>{option.label}</Text>
                                    <Text style={styles.optionDescription}>{option.amountOfDrink}</Text>
                                    <Text style={styles.optionPrice}>{option.price}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                {/* Milk Preference */}
                <View style={styles.optinMainContainer}>
                    <Text style={styles.optionHeaderLabel}>Milk Preference</Text>
                    <RadioGroup
                        radioButtons={milkOptions}
                        onPress={(options) =>
                            setMilkPreference(options.find((opt) => opt.selected)?.value || '')
                        }
                    />
                </View>
                {/* Temperature */}
                <View style={styles.optionContainer}>
                    <Text style={styles.optionLabel}>Temperature</Text>
                    <RadioGroup
                        radioButtons={temperatureOptions}
                        onPress={(options) =>
                            setTemperature(options.find((opt) => opt.selected)?.value || '')
                        }
                    />
                </View>

                {/* Quantity */}
                <View style={styles.optionContainerRow}>
                    <Text style={styles.optionLabel}>Quantity</Text>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => setQuantity(Math.max(1, quantity - 1))}
                        >
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{quantity}</Text>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => setQuantity(quantity + 1)}
                        >
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Extra Shot */}
                <View style={styles.optionContainerRow}>
                    <Text style={styles.optionLabel}>Extra Shot</Text>
                    <TouchableOpacity
                        style={[styles.toggleButton, extraShot && styles.toggleButtonActive]}
                        onPress={() => setExtraShot(!extraShot)}
                    >
                        <Text style={styles.toggleButtonText}>{extraShot ? 'Yes' : 'No'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Use Own Cup */}
                <View style={styles.optionContainerRow}>
                    <Text style={styles.optionLabel}>Use Own Cup</Text>
                    <TouchableOpacity
                        style={[styles.toggleButton, useOwnCup && styles.toggleButtonActive]}
                        onPress={() => setUseOwnCup(!useOwnCup)}
                    >
                        <Text style={styles.toggleButtonText}>{useOwnCup ? 'Yes' : 'No'}</Text>
                    </TouchableOpacity>
                </View>

                {/* Order Button */}
                <TouchableOpacity style={styles.orderButton} onPress={handleOrder}>
                    <Text style={styles.orderButtonText}>Place Order</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
    },
    headerContainer: {
        borderRadius: 10,
        borderWidth: 0.4
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
        padding: 20,
        flexDirection: 'row'
      },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 5,
        width:'30%'
    },
    optionContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    optionSelected: {
        borderColor: '#007BFF',
        backgroundColor: '#E0F7FF',
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#007BFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    radioButtonSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#007BFF',
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
    optionPrice:{
        fontSize: 12,
        color: '#666',
        marginTop:5
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        backgroundColor: '#fabee3',
        borderColor: '#fabee3',
    },
    toggleButtonText: {
        fontSize: 16,
        textAlign: 'center',
    },
    orderButton: {
        marginTop: 30,
        backgroundColor: '#fabee3',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    orderButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default OrderDetailScreen;
