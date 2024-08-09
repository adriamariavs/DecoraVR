import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../Styles/styles';

export default function TelaCatálogo() {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handlePress = (index) => {
    setSelectedButtonIndex(index);
  };

  const dataSets = [
    [
      { id: '1', title: 'Caixa 1' },
      { id: '2', title: 'Caixa 2' },
      { id: '3', title: 'Caixa 3' },
      { id: '4', title: 'Caixa 4' },
      { id: '5', title: 'Caixa 5' },
    ],
    [
      { id: '6', title: 'Caixa 6' },
      { id: '7', title: 'Caixa 7' },
      { id: '8', title: 'Caixa 8' },
      { id: '9', title: 'Caixa 9' },
      { id: '10', title: 'Caixa 10' },
    ],
    [
      { id: '11', title: 'Caixa 11' },
      { id: '12', title: 'Caixa 12' },
      { id: '13', title: 'Caixa 13' },
      { id: '14', title: 'Caixa 14' },
      { id: '15', title: 'Caixa 15' },
    ],
    [
      { id: '16', title: 'Caixa 16' },
      { id: '17', title: 'Caixa 17' },
      { id: '18', title: 'Caixa 18' },
      { id: '19', title: 'Caixa 19' },
      { id: '20', title: 'Caixa 20' },
    ],
  ];

  const selectedData = dataSets[selectedButtonIndex] || [];

  const renderItem = ({ item }) => (
    <View style={styles.box1}>
      <Text style={styles.boxText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.ViewCatálogo1}>
          <Text style={styles.TitleCatalogo1}>Find modern</Text>
          <Text style={styles.TitleCatalogo2}>furniture for you</Text>
          <View style={styles.inputContainer}>
            <View style={styles.searchSection}>
              <AntDesign name="search1" size={24} color="black" style={styles.searchIcon} />
              <TextInput style={styles.Pesquisa} placeholder="Pesquisa" />
            </View>
            <View style={styles.buttonContainer2}>
              {['Opção', 'Opção', 'Opção', 'Opção'].map((opcao, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.BtnCatalogo, 
                    {
                      backgroundColor: selectedButtonIndex === index ? 'black' : 'white',
                    }
                  ]}
                  onPress={() => handlePress(index)}
                >
                  <Text style={[
                    styles.btnText2, 
                    { color: selectedButtonIndex === index ? 'white' : 'black' }
                  ]}>
                    {opcao}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <FlatList
              data={selectedData}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
