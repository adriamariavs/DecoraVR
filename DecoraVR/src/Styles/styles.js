import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //Tela BOAS-VINDAS

  ImgBoasVindas: {
    width: "100%",
    height: "100%",
  },

  TextBoasVindas: {
    fontFamily: "CrimsonText-Regular",
    fontSize: 30,
    textAlign: "left",
  },

  text1: {
    fontSize: 25,
    fontFamily: "CrimsonTextFina",
  
  },

  text2: {
    fontSize: 24,
    fontFamily: "CrimsonText",
  },

  text3: {
    fontSize: 16,
    fontFamily: "Dosis",
  },

  text4: {
    fontSize: 16,
    fontFamily: "Dosis",
  },

  text5: {
    fontSize: 16,
    fontFamily: "Dosis",
  },

  text6: {
    fontSize: 16,
    fontFamily: "Dosis",
  },

  BtnHome: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 130,
    backgroundColor: "#ffd700",
    borderRadius: 13,
    elevation: 10,
    borderColor: "black",
    marginTop: 30,
    flexDirection: "row",
    left: "15%",
  },

  //Tela Login e Cadastro

  ViewLogin: {
    width: '100%',
    maxWidth: '120%',
    height: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    top: '30%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  ImgBoasVindas: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
  },
  BtnLogin: {
    alignSelf: "center",
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    height: 30,
    width: 200,
    backgroundColor: "red",
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: "black",
    margin: 7,
  },

  TelaLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 35,
  },

  TelaCadastro: {
    width: '100%',
    maxWidth: 350,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  Welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#FFDB58', 
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
  },
  InputName: {
    width: '100%',
    height: 50,
    borderColor: '#b0bec5',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontFamily: 'sans-serif',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
});