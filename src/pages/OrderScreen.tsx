import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  SafeAreaView, 
  ScrollView, 
  Image, 
  TouchableOpacity, 
  Animated 
} from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ProductItem from '../components/ProductItem';

const OrderScreen = () => {
  const [activeCategory, setActiveCategory] = useState('Seasonal Drinks'); // Aktif kategori durumunu takip ediyoruz
  const scrollY = useRef(new Animated.Value(0)).current;

  // Kategoriler ve her kategorinin öğeleri
  const categories = [
    { 
      id: '1', 
      name: 'Seasonal Drinks', 
      data: Array.from({ length: 10 }, (_, index) => ({ id: `${index}`, name: `Seasonal Drink ${index + 1}` })) 
    },
    { 
      id: '2', 
      name: 'Hot Drinks', 
      data: Array.from({ length: 5 }, (_, index) => ({ id: `${index + 5}`, name: `Hot Drink ${index + 1}` })) 
    },
    { 
      id: '3', 
      name: 'Iced Drinks', 
      data: Array.from({ length: 20 }, (_, index) => ({ id: `${index + 10}`, name: `Iced Drink ${index + 1}` })) 
    },
    { 
      id: '4', 
      name: 'Baked Goods', 
      data: Array.from({ length: 20 }, (_, index) => ({ id: `${index + 10}`, name: `Baked Good ${index + 1}` })) 
    },
    { 
      id: '5', 
      name: 'Retail', 
      data: Array.from({ length: 20 }, (_, index) => ({ id: `${index + 10}`, name: `Retail ${index + 1}` })) 
    },
  ];

  // Üst alanın opacity ve height değerlerini dinamik olarak hesapla
  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 20],  // Küçük kaydırmalarda header kaybolmasın
    outputRange: [1, 0],  // Header tamamen kaybolacak şekilde
    extrapolate: 'clamp',
  });

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 80],  // Yavaş kaydırma ile header kaybolacak
    outputRange: [180, 0],  // Header tamamen kaybolacak şekilde
    extrapolate: 'clamp',
  });

  const categoryMarginTop = scrollY.interpolate({
    inputRange: [0, 100],  // Kaydırma aralığını belirledik
    outputRange: [0, -25],  // Kaydırma ile marginTop değeri azalacak
    extrapolate: 'clamp',  // Değerin bu aralığın dışına çıkmaması için
});
  

  // Aktif kategoriye ait öğeleri getir
  const activeCategoryData = categories.find(category => category.name === activeCategory)?.data || [];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.fixedTop}>
        <TouchableOpacity style={styles.btnChangeLocation}>
          <Text style={styles.btnChangeLocationText}>CHANGE LOCATION</Text>
          <FontAwesomeIcon name='arrow-down' size={13} style={{ marginLeft: 5, marginRight:5 }} />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        {/* Üst alan */}
        <Animated.View style={[styles.selectedStore, { opacity: headerOpacity, height: headerHeight }]}>
          <Text style={styles.txtSelectedStoreName}>King's Road</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={styles.storeImage}
              source={require('../assets/images/deliveroo_logo.jpeg')} // Kendi resminizi ekleyin
            />
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.selectedStoreDescription}>67 King's Road, London</Text>
              <Text style={styles.selectedStoreDescription}>Open today 6:30AM-7:00PM</Text>
              <TouchableOpacity style={styles.btnStoreStatus}>
                <Text style={styles.btnStoreStatusText}>CLOSED</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>

        {/* Kategoriler (Yatay Kaydırma) */}
        <Animated.ScrollView horizontal style={[styles.categoryScroll, { marginTop: categoryMarginTop }]}
                    showsHorizontalScrollIndicator={false}>
          {categories.map((category) => (
            <TouchableOpacity 
              key={category.id} 
              style={[styles.categoryContainer, activeCategory === category.name && styles.activeCategory]} 
              onPress={() => setActiveCategory(category.name)}
            >
              <Text style={[styles.categoryTitle, activeCategory === category.name && styles.activeCategoryTitle]}>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>

        {/* Menü alanı ve kategoriler */}
        <FlatList
          data={activeCategoryData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem
              image={require('../assets/images/latte1.png')} // Ürün resmi
              price={`£${(parseInt(item.id) % 5) + 2}`}  // Fiyat dinamik olarak
              name={item.name}
              description={`Short description for ${item.name}`}
            />
          )}
          contentContainerStyle={styles.menuContainer}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: false }  // useNativeDriver false olmalı çünkü height ve opacity animasyonları yapıyoruz
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
  },
  fixedTop: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 1, // Butonu üstte tutmak için
    backgroundColor: 'transparent', // Şeffaf arka plan
    paddingTop: 10, // Biraz boşluk bırakmak için
    alignItems: 'center',
  },
  btnChangeLocation: {
    marginHorizontal: '25%',
    height: 30,
    backgroundColor: '#edebeb',
    borderRadius: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  btnChangeLocationText: {
    fontSize: 12,
    textAlign: 'center',
    paddingLeft:20
  },
  selectedStore: {
    padding: '3%',
    marginTop: 60, // Üst alan biraz aşağıda başlasın
    width: '90%',
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#edebeb',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    marginVertical: 10
  },
  txtSelectedStoreName: {
    fontWeight: '600',
    fontSize: 30,
    paddingBottom: 20,
  },
  storeImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 20,
  },
  selectedStoreDescription: {
    marginBottom: 10,
  },
  btnStoreStatus: {
    marginTop: 10,
    height: 30,
    width: '50%',
    backgroundColor: '#fabee3',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStoreStatusText: {
    fontSize: 12,
    textAlign: 'center',
  },
  categoryScroll: {
    marginTop: 10,
    paddingBottom: 40,
    height:10
  },
  categoryContainer: {
    height: 30,
    padding: 10,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeCategory: {
    borderBottomWidth: 2, // Sadece alt kenarda kenarlık
    borderBottomColor: 'black', // Alt kenarlığın rengi
  },
  activeCategoryTitle: {
    color: '#000', // Aktif kategori başlık rengi
    fontSize: 11,  // Boyut sabitlendi
  },
  categoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333', // Genel kategori başlık rengi
    paddingTop:5,
    paddingBottom:12
   
  },
  menuItem: {
    padding: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    marginBottom: 10,
  },
  menuContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    top:0,
    width:'100%',
    minHeight:'100%'
  }
});

export default OrderScreen;
