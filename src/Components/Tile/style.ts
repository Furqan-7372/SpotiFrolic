import {StyleSheet} from 'react-native';
import Colors from '../../Utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10,
    
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer:{
    flex: 3,
    padding: 10,
},
image: {
    width: 180,
    height: 180,
},
textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary0,
  },
  description: {
    fontSize: 14,
    color: Colors.primary0,
  },
});

export default styles;
