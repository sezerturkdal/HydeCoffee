import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

// Props türünü tanımlıyoruz
interface BasketItemProps {
    image: ImageSourcePropType;
    price: string;
    name: string;
    description: string;
}

const BasketItem: React.FC<BasketItemProps> = ({ image, price, name, description }) => {

    const [quantity, setQuantity] = useState<number>(1);

    const handlePressQuantity = (amount) => {
        setQuantity(quantity + amount)
    };

    return (
        <View style={itemStyles.BasketItemContainer}>
            <Image source={image} style={itemStyles.productImage} />
            <View style={itemStyles.productInfo}>
                <Text style={itemStyles.productName}>{name}</Text>
                <Text style={itemStyles.productPrice}>{price}</Text>
                <Text style={itemStyles.productDescription}>{description}</Text>
                <View style={itemStyles.quantityContainer}>
                    <TouchableOpacity
                        style={[
                            itemStyles.quantityButton,
                            quantity <= 1 ? (quantity<=1 ? itemStyles.removeButton : itemStyles.disabledButton ) : itemStyles.enabledButton,
                        ]}
                        onPress={() => handlePressQuantity(-1)}
                        disabled={quantity <= 0 ? true : false}
                    >
                        {quantity>1 ?
                         <Text style={itemStyles.quantityButtonText}>-</Text>
                          :
                          <FontAwesomeIcon name='trash' size={14} style={{ paddingVertical: 1, paddingHorizontal: 1, color: '#fff' }} />
                        }
                    </TouchableOpacity>
                    <Text style={itemStyles.quantityText}>{quantity}</Text>
                    <TouchableOpacity
                        style={[
                            itemStyles.quantityButton,
                            quantity >= 10 ? itemStyles.disabledButton : itemStyles.enabledButton,
                        ]}
                        onPress={() => handlePressQuantity(1)}
                        disabled={quantity >= 10 ? true : false}
                    >
                        <Text style={itemStyles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const itemStyles = StyleSheet.create({
    BasketItemContainer: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 15,
        marginTop: 20,
        shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
        shadowOpacity: 0.2, // Shadow opacity for iOS
        shadowRadius: 4, // Shadow blur radius for iOS
        elevation: 5, // Shadow for Android
    },
    productImage: {
        width: 70,
        height: 70,
        borderRadius: 10,
        marginRight: 15,
    },
    productInfo: {
        justifyContent: 'center',
        flex: 1,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    productPrice: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF5733', // Fiyat için renk
    },
    productDescription: {
        fontSize: 12,
        color: '#777',
    },
    quantityContainer: {
        position:'absolute',
        right:0,
        bottom:3,
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantityButton: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 45,
        justifyContent:'center',
        alignItems:'center',
        width:30,
        height:30,
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
    enabledButton: {
        opacity: 1
    },
    disabledButton: {
        opacity: 0.3,
    },
    removeButton: {
        backgroundColor: '#FF5733',
    },
});

export default BasketItem;
