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

  BtnHome: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 120,
    backgroundColor: "#C0C0C0",
    borderRadius: 13,
    elevation: 9,
    borderColor: "black",
    marginTop: 40,
    marginLeft: 250,
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
    backgroundColor: "#d4a57b",
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
