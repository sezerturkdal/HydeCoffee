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
        { id: '1', label: 'Small', value: 'Small' },
        { id: '2', label: 'Medium', value: 'Medium' },
        { id: '3', label: 'Large', value: 'Large' },
    ];

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


                    {/* Size */}
                    <View style={styles.optionContainer}>
                        <Text style={styles.optionLabel}>Size</Text>
                        <RadioGroup
                            radioButtons={sizeOptions}
                            onPress={(options) =>
                                setSize(options.find((opt) => opt.selected)?.value || '')
                            }
                        />
                    </View>
                </View>

                {/* Milk Preference */}
                <View style={styles.optionContainer}>
                    <Text style={styles.optionLabel}>Milk Preference</Text>
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
        marginBottom: 20,
        textAlign: 'center',
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
    optionContainer: {
        marginBottom: 20,
    },
    optionContainerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    optionLabel: {
        fontSize: 18,
        marginBottom: 10,
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
