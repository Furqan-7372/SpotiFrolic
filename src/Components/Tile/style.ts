import {StyleSheet} from 'react-native';
import Colors from '../../Utils/color';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 180,
    marginHorizontal: 10,
    alignItems: 'center',
    // padding: 10,
    
    borderRadius: 10,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  imageContainer:{
    
    padding: 10,
},
image: {
    width: 180,
    height: 180,
},
textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    width: 180,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary0,
    textAlign:'center',
  },
  description: {
    fontSize: 14,
    color: Colors.primary0,
  },
});

export default styles;
