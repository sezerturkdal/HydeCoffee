import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

// Props türünü tanımlıyoruz
interface ProductItemProps {
  image: ImageSourcePropType;
  price: string;
  name: string;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ image, price, name, description }) => {
  return (
    <View style={styles.productItemContainer}>
      <Image source={image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productPrice}>{price}</Text>
        <Text style={styles.productDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productItemContainer: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,  // Android için gölge eklemek
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
});

export default ProductItem;
