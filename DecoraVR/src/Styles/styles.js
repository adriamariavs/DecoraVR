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
    width: '100%',
    height: '100%',
  },

  TextBoasVindas: {
    fontFamily: "CrimsonText-Regular",
    fontSize: 30,
    textAlign: 'left',
  },

  //Tela Login
  BtnLogin: {
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 200,
    backgroundColor: '#d4a57b',
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
    margin: 7
  },

  Welcome: {
   fontSize: 25,
   right: 70 ,
   fontWeight: 'bold',
   marginBottom: 40,
   marginTop: 15,
  },

  TelaLogin:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 35,
  
  },

  InputName: {
   width: 320,
   height: 30,
   borderBottomWidth: 1,
   borderBottomColor: 'black',
   marginTop: 10,
  },

  //Pag Cadastro:
  ViewCadastro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },

  TituloCds: {
    fontSize: 25,
    right: 80 ,
    fontWeight: 'bold',
    marginBottom: 40,
  },

  BtnCds: {
    alignSelf: 'center',
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 200,
    backgroundColor: '#d4a57b',
    borderRadius: 25,
    borderBottomWidth: 1,
    borderColor: 'black',
    margin: 7
  },

})