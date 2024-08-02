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
    textAlign: "justify",
  },

  text4: {
    fontSize: 16,
    fontFamily: "Dosis",
    textAlign: "justify",
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
    backgroundColor: "#090c0e",
    borderRadius: 13,
    elevation: 10,
    borderColor: "#000",
    marginTop: 30,
    flexDirection: "row",
    left: "15%",
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
   
  TitleCatalogo1: {
    fontSize: 17,
    marginLeft: "3%",
    color: "#090c0e",
    textAlign: "left",
    fontFamily: "sans-serif-medium",
  }, 

  TitleCatalogo2: {
    fontSize: 17,
    marginLeft: "3%",
    color: "#090c0e",
    textAlign: "left",
    fontFamily: "sans-serif-medium",
  },

  TextInput: {
   shadowColor: "black",
  },
});
