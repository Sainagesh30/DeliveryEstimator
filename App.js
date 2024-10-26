import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import Papa from 'papaparse';
import { Asset } from 'expo-asset';

// Paths to your CSV files in the assets folder
const productsCsv = require('./assets/products.csv');
const pincodesCsv = require('./assets/pincodes.csv');
const stocksCsv = require('./assets/stocks.csv');

const App = () => {
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [pincode, setPincode] = useState('');
  const [deliveryEstimate, setDeliveryEstimate] = useState('');

  // Load CSV data on component mount
  useEffect(() => {
    loadCsvData();
  }, []);

  const loadCsvData = async () => {
    // Load products data
    await loadCsv(productsCsv.uri).then(data => setProducts(data));
    // Load stocks data
    await loadCsv(stocksCsv.uri).then(data => setStocks(data));
  };

  const loadCsv = (uri) => {
    return new Promise((resolve) => {
      Papa.parse(uri, {
        download: true,
        header: true,
        complete: (results) => {
          resolve(results.data);
        },
      });
    });
  };

  const estimateDeliveryDate = () => {
    if (!selectedProductId || !validatePincode(pincode)) {
      alert('Please select a product and enter a valid pincode.');
      return;
    }

    // Check stock availability for selected product and pincode
    const stockInfo = stocks.find(stock => stock.productId == selectedProductId && stock.pincode == pincode);
    
    if (stockInfo && stockInfo.stockAvailable === 'true') {
      setDeliveryEstimate('Same Day Delivery');
    } else {
      setDeliveryEstimate('Out of Stock or Invalid Pincode');
    }
    
    alert(`Estimated Delivery: ${deliveryEstimate}`);
  };

  const validatePincode = (pincode) => /^[0-9]{6}$/.test(pincode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Product:</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Button
            title={`${item.name} - $${item.price}`}
            onPress={() => {
              setSelectedProductId(item.id);
              alert(`${item.name} selected! Price: $${item.price}`);
            }}
            disabled={false} // Assuming all products are selectable for this example
          />
        )}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Enter Pincode"
        value={pincode}
        onChangeText={setPincode}
        keyboardType="numeric"
      />
      
      <Button title="Estimate Delivery" onPress={estimateDeliveryDate} />

      <Text style={styles.deliveryEstimate}>{deliveryEstimate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  deliveryEstimate: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default App;
