import { StyleSheet } from "react-native";
import Colors from "../../../Utils/color";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.primary50,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      
    },
    infoText: {
      color: Colors.primary0,
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: Colors.primary0,
      borderRadius: 8,
      paddingHorizontal: 16,
      color: Colors.primary50,
      marginBottom: 10,
    },
    rememberMeContainer: {
      width: '90%',
      flexDirection: 'row',
      alignItems: 'center',
      margin: 10,
      
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkbox: {
      width: 20,
      height: 20,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: Colors.primary0,
      marginRight: 8,
    },
    checkboxChecked: {
      backgroundColor: Colors.primary800,
    },
    rememberMeText: {
      color: Colors.primary0,
      fontSize: 16,
    },
    buttonContainer: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between',
      marginVertical: 20,
    },
    button: {
      flex: 1,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary800,
      borderRadius: 8,
      marginHorizontal: 8,
    },
    cancelButton: {
      backgroundColor: Colors.primary0,
    },
    buttonText: {
      color: Colors.primary50,
      fontSize: 16,
      fontWeight: "bold",
    },
    signInText: {
      color: Colors.primary0,
      fontSize: 16,
    },
    signInLink: {
      color: Colors.primary800,
      fontWeight: 'bold',
    },
  });

export default styles;
