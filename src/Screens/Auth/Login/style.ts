import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../Utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 350,
    height: 300,
    resizeMode: 'contain',
  },
  infoText: {
    color: Colors.primary0,
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 8,
    paddingHorizontal: 16,
    color: Colors.primary0,
    marginBottom: 10,
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
    backgroundColor: Colors.backgroundColor,
  },
  buttonText: {
    color: Colors.primary0,
    fontSize: 16,
  },
  signUpText: {
    color: Colors.primary0,
    fontSize: 16,
  },
  signUpLink: {
    color: Colors.primary800,
    fontWeight: 'bold',
  },
  subContainer: {
    flexDirection: 'row',
    width: "90%",
  },
  rememberContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rememberText: {
    textAlign: 'left',
    color: Colors.primary0,
  },
  forgotContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  forgotText: {
    textAlign: 'right',
    color: Colors.primary0,
  },
});

export default styles;
