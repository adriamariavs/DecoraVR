import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { styles } from '../Styles/styles';

export default function TelaCatálogo() {
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
              <TouchableOpacity style={styles.BtnHome}>
                <Text style={styles.btnText2}>Opção 1</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BtnHome}>
                <Text style={styles.btnText2}>Opção 2</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BtnHome}>
                <Text style={styles.btnText2}>Opção 3</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.BtnHome}>
                <Text style={styles.btnText2}>Opção 4</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

