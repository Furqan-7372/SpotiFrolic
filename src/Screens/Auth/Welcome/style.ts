import {Platform, StyleSheet} from 'react-native';
import Colors from '../../../Utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleImage: {
    width: 85,
    height: 85,
  },
  titleContainer: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconContainer: {
    paddingLeft: 8,
  },
  signupButton: {
    backgroundColor: '#1DB954',
    padding: 15,
    borderRadius: 45,
    marginBottom: 10,
    width: '90%',
  },
  signupText: {
    color: Colors.primary50,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 26,
  },
  phoneButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 45,
    marginBottom: 10,
    borderColor: Colors.primary0,
    borderWidth: 2,
    width: '90%',
    backgroundColor: Colors.primary50,
  },
  phoneText: {
    flex: 1,
    color: Colors.primary0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 45,
    marginBottom: 10,
    borderColor: Colors.primary0,
    borderWidth: 2,
    width: '90%',
    backgroundColor: Colors.primary50,
  },
  googleImage: {
    width: 35,
    height: 35,
  },
  googleText: {
    flex: 1,
    color: Colors.primary0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 45,
    marginBottom: 10,
    borderColor: Colors.primary0,
    borderWidth: 2,
    width: '90%',
    backgroundColor: Colors.primary50,
  },
  facebookImage: {
    borderRadius: 95,
    backgroundColor: Colors.primary0,
    width: 35,
    height: 35,
  },
  facebookText: {
    flex: 1,
    color: Colors.primary0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22,
  },
  loginButton: {
    padding: 10,
    marginBottom: 10,
  },
  loginText: {
    color: Colors.primary0,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 25,
  },
  androidRipple: {
    backgroundColor: 'rgba(0, 0, 0, 0.12)',
    borderRadius: 8,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default styles;
