import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  //Tela BOAS-VINDAS

  ImgBoasVindas: {
    width: "100%",
    height: "100%",
  },

  text1: {
    textAlign: 'right',
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: "CrimsonText"
  },

  text2: {
    textAlign: 'right',
    fontSize: 20,
    fontFamily: "CrimsonText",
  },

  text3: {
    fontSize: 16,
    fontFamily: "Dosis",
    textAlign: "justify",
  },

  text4: {
    fontSize: 16,
    fontFamily: "Dosis",
    textAlign: 'right',
  },

  text5: {
    textAlign: 'right',
    fontSize: 16,
    fontFamily: "Dosis",
  },

  text6: {
    fontSize: 16,
    fontFamily: "Dosis",
    textAlign: 'right',
  },
  BtnHome: {
    marginHorizontal: 5, 
    padding: 10,
    backgroundColor: '#000', 
    borderRadius: 20,
    height: 45,
    width: "50%",
  },
  btnText: {
    color: "white",
  },

  //Tela Login e Cadastro

  TextoEmail: {
    color: "#8c8c8c",
  },

  TextoOr: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#090c0e",
    fontFamily: "sans-serif-medium",
    textAlign: "center",
    top: "5%",
  },

  TextoEmail2: {
    color: "#00796b",
    fontSize: 16,
  },
  SignUp: {
    color: "#00796b",
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 5,
  },
  SignUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  IconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  ViewLogin: {
    width: "95%",
    maxWidth: "120%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 30,
    shadowColor: "#000",
    top: "30%",
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
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
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

  Welcome: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#090c0e",
    textAlign: "center",
    fontFamily: "sans-serif-medium",
  },
  InputName: {
    width: "100%",
    height: 40,
    borderColor: "#b0bec5",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#ffffff",
    fontSize: 16,
    fontFamily: "sans-serif",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  ButtonContainer: {
    width: "100%",
    backgroundColor: "#090c0e",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
    
  },

  ButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "sans-serif-medium",
  },
  

  //Tela Catálogo

  box1: {
    backgroundColor: 'lightgray',
    width: 200,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 35,
  },
  boxText: {
    fontSize: 12,
    color: 'black',
  },
  BtnCatalogo: {
      marginHorizontal: 5, 
      padding: 10,
      backgroundColor: '#000', 
      borderRadius: 20,
      height: 50,
      width: "20%",
      borderColor: 'gray',
      borderWidth: 1,
    },
  
  TitleCatalogo1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50, 
    
  },
  TitleCatalogo2: {
    fontSize: 18,
    fontWeight: 'normal',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, 
    
  },

  TextInput: {
   shadowColor: "black",
  },

  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5, 
    
    
  },
  ViewCatálogo1: {
    padding: 16,
    
    
  },
  searchSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    width: '90%',
    height: 55,
  },
  searchIcon: {
    padding: 10,
  },
  
  //TELA CARRINHO
  modal2: {
    width: 20,
    height: 30,
  },

  flatListContent: {
    justifyContent: "center",
    flexGrow: 1,
    alignItems: "center",
  },

  box: {
    height: 100,
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },

  containermodal: {
    flex: 1,
  },

  resultado: {
    fontSize: 20,
    fontWeight: "200",
    bottom: 50,
    left: 35,
    width: "50%",
  },

  btnpagar: {
    backgroundColor: "red",
    width: 120,
    height: 50,
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    left: "60%",
    marginTop: 20,
    borderBottomWidth: 1,
  },

  funcao: {
    fontSize: 20,
    fontWeight: "700",
    bottom: 50,
    left: 75,
  },

  textCarrinho: {
    fontSize: 20,
    marginTop: 20,
    left: 18,
  },

  modalprincipal: {
    width: "100%",
    height: "85%",
    backgroundColor: "white",
    borderRadius: 10,
  },

  //Dentro do MODAL

  text: {
    fontSize: 20,
    fontWeight: "900",
    marginTop: 50,
    left: 25,
  },

  btnconcluir: {
    backgroundColor: "red",
    width: 120,
    height: 50,
    borderRadius: 50,
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    left: "60%",
  },

  viewDentroModal: {
    width: 340,
    height: 110,
    marginTop: 50,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  viewDentroModal2: {
    width: 340,
    height: 110,
    marginTop: 30,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  viewDentroModal3: {
    width: 340,
    height: 110,
    marginTop: 30,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    borderRadius: 20,
    backgroundColor: "white",
  },

  risco: {
    height: 1,
    width: "100%",
    marginTop: 50,
    backgroundColor: "#C0C0C0",
  },

  risco1: {
    height: 1,
    width: "100%",
    marginTop: -15,
    backgroundColor: "#C0C0C0",
  },

  botaorolagem: {
    width: 50,
    height: 50,
  },

  resultadoModal: {
    fontSize: 20,
    fontWeight: "200",
    bottom: 60,
    left: 30,
    width: "50%",
  },

  funcaoModal: {
    fontSize: 20,
    fontWeight: "700",
    bottom: 60,
    left: 65,
  },

  cartaoDebito: {
    marginTop: -80,
    left: 150,
    fontFamily: "Baskervville-Regular",
  },

  cartaoCredito: {
    marginTop: -35,
    left: 150,
    fontFamily: "Baskervville-Regular",
  },

  Pix: {
    marginTop: -50,
    left: 155,
    fontFamily: "Baskervville-Regular",
  },

  visa: {
    height: "80%",
    width: "30%",
    left: 10,
    borderRadius: 25,
    marginTop: 40,
  },

  master: {
    height: "80%",
    width: "30%",
    left: 10,
    borderRadius: 25,
    marginTop: -5,
  },


});


