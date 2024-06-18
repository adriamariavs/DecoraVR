import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      },
    
      //Pag Login:
    
      BtnLogin: {
        alignSelf: "center",
        marginTop: 250,
        alignItems: "center",
        justifyContent: "center",
        height: 40,
        width: 250,
        backgroundColor: "#d4a57b",
        borderRadius: 250,
        borderBottomWidth: 1,
        borderColor: "black",
      },
    
      Welcome: {
        fontSize: 30,
        right: 50,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
        textAlign: "center",
        fontFamily: 'CrimsonText-Bold',
      },
    
      Descri: {
        fontSize: 15,
        right: 30,
        marginBottom: 40,
        textAlign: "center",
        color: "#A9A9A9",
      },
    
      Senha: {
        fontSize: 13,
        left: 87,
        marginTop: 15,
        color: "#A9A9A9",
      },
    
      Cadas: {
        fontSize: 15,
        textAlign: "center",
        marginTop: 40,
        color: "#A9A9A9",
        margin: 5,
      },
    
      Cadas1: {
        fontSize: 15,
        textAlign: "center",
        marginTop: 40,
        color: "#d4a57b",
        margin: 5,
      },
    
      flexrow: {
        flexDirection: "row",
      },
    
      TelaLogin: {
        flex: 1,
        paddingTop: 35,
        marginBottom: 100,
        alignItems: "center",
        justifyContent: "center",
      },
    
      InputName: {
        width: 320,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#808080",
        alignSelf: "center",
        justifyContent: "center",
      },
    
      ImgLogin: {
        width: 75,
        height: 75,
        right: 130,
      },
    
      //Pag Cadastro:
    
      TelaCds: {
        flex: 1,
        paddingTop: 35,
        marginBottom: 100,
        alignItems: "center",
        justifyContent: "center",
      },
    
      ImgCds: {
        width: 75,
        height: 75,
        right: 130,
      },
    
      WelcomeCds: {
        fontSize: 30,
        right: 72,
        fontWeight: "bold",
        marginBottom: 10,
        marginTop: 20,
        textAlign: "center",
      },
    
      DescriCds: {
        fontSize: 15,
        right: 15,
        marginBottom: 2,
        textAlign: "center",
        color: "#A9A9A9",
      },
    
      DescriCds1: {
        fontSize: 15,
        right: 110,
        marginBottom: 40,
        textAlign: "center",
        color: "#A9A9A9",
      },
    
      SenhaCds: {
        fontSize: 13,
        right: 110,
        marginTop: 15,
        color: "#d4a57b",
      },
})
