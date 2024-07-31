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
  marginLeft: "auto",
  marginTop: 130,
  marginRight: 10,
  },

  text2: {
    fontSize: 24,
    fontFamily: "CrimsonText",
    marginLeft: "auto",
    marginRight: 5,
    marginTop: -10,
  },

  text3: {
    fontSize: 16,
    fontFamily: "Dosis",
    marginLeft: "auto",
    marginRight: 10,
    marginTop: 20,
  },

  text4: {
  fontSize: 16,
  fontFamily: "Dosis",
  marginLeft: "auto",
  marginRight: 10,
},

text5: {
fontSize: 16,
fontFamily: "Dosis",
marginLeft: "auto",
marginRight: 10,
},

text6: {
fontSize: 16,
fontFamily: "Dosis",
marginLeft: "auto",
marginRight: 10,
},

  BtnHome: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 130,
    backgroundColor: "#A9A9A9",
    borderRadius: 13,
    elevation: 10,
    borderColor: "black",
    marginTop: 30,
    marginLeft: 280,
    flexDirection: "row",
    right:25
  },

  //Tela Login

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

  Welcome: {
    fontSize: 25,
    right: 70,
    fontWeight: "bold",
    marginBottom: 40,
    marginTop: 15,
  },

  TelaLogin: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 35,
  },

  InputName: {
    width: 320,
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 10,
  },

});
