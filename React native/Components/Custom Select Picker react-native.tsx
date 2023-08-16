import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Modal, FlatList } from 'react-native';

interface Country {
  name: string;
  cca2: string;
  flag: string;
  callingCode: string;
  phoneMasks: string[];
}

const countries: Country[] = [
  {
    name: 'Afghanistan',
    cca2: 'AF',
    flag: '🇦🇫',
    callingCode: '+93',
    phoneMasks: ['## ### ####'],
  },
  {
    name: 'Angola',
    cca2: 'AO',
    flag: '🇦🇴',
    callingCode: '+244',
    phoneMasks: ['### ### ###'],
  },
  {
    name: 'Albania',
    cca2: 'AL',
    flag: '🇦🇱',
    callingCode: '+355',
    phoneMasks: ['### ### ###'],
  },
  {
    name: 'Afghanistan',
    cca2: 'AF',
    flag: '🇦🇫',
    callingCode: '+93',
    phoneMasks: ['## ### ####'],
  },
  {
    name: 'Angola',
    cca2: 'AO',
    flag: '🇦🇴',
    callingCode: '+244',
    phoneMasks: ['### ### ###'],
  },
  {
    name: 'Albania',
    cca2: 'AL',
    flag: '🇦🇱',
    callingCode: '+355',
    phoneMasks: ['### ### ###'],
  },
  {
    name: 'Afghanistan',
    cca2: 'AF',
    flag: '🇦🇫',
    callingCode: '+93',
    phoneMasks: ['## ### ####'],
  },
  {
    name: 'Angola',
    cca2: 'AO',
    flag: '🇦🇴',
    callingCode: '+244',
    phoneMasks: ['### ### ###'],
  },
  {
    name: 'Albania',
    cca2: 'AL',
    flag: '🇦🇱',
    callingCode: '+355',
    phoneMasks: ['### ### ###'],
  },
  // Add more countries here...
]

const CountrySelect: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Selecione um país"
        value={selectedCountry ? selectedCountry.name : ''}
        onFocus={() => setShowDropdown(true)}
        editable={false}
      />
      <TouchableOpacity style={styles.dropdownIcon} onPress={() => setShowDropdown(true)}>
        {/* You can replace this with an arrow icon */}
        <Text>▼</Text>
      </TouchableOpacity>

      <Modal visible={showDropdown} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.dropdown}>
            <FlatList
              data={countries}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleCountrySelect(item)}>
                  <Text style={styles.dropdownItem}>{item.flag + ' ' + item.name}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => `${item.cca2}-${index}`}
            />
          </View>
          <TouchableOpacity onPress={() => setShowDropdown(false)}>
            <Text style={styles.closeButton}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    fontSize: 16,
  },
  dropdownIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 30,
    height: 30
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', overlay opacity
  },
  dropdown: {
    backgroundColor: '#040404',
    borderRadius: 8,
    maxHeight: 150,
    width: '80%',
    alignSelf: 'center',
    zIndex: 20,
  },
  dropdownItem: {
    padding: 10,
    fontSize: 16,
    color: '#FFF'
  },
  closeButton: {
    fontSize: 18,
    color: 'blue',
  },
});

export default CountrySelect;