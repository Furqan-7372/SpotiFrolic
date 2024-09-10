import { StyleSheet } from "react-native";
import Colors from "../../../Utils/color";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
      marginBottom: 20,
    },
    infoText: {
      color: '#fff',
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      width: '100%',
      height: 50,
      backgroundColor: '#333',
      borderRadius: 8,
      paddingHorizontal: 16,
      color: '#fff',
      marginBottom: 10,
    },
    rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
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
      borderColor: '#aaa',
      marginRight: 8,
    },
    checkboxChecked: {
      backgroundColor: '#1DB954',
    },
    rememberMeText: {
      color: '#fff',
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
      backgroundColor: '#1DB954',
      borderRadius: 8,
      marginHorizontal: 8,
    },
    cancelButton: {
      backgroundColor: '#555',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
    },
    signInText: {
      color: '#fff',
      fontSize: 16,
    },
    signInLink: {
      color: '#1DB954',
      fontWeight: 'bold',
    },
  });

export default styles;
