import { StyleSheet } from 'react-native';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#000',
      padding: 16,
      paddingBottom: 50,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    headerIcons: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-evenly',
    },
    heading: {
      flex: 1.5,
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 20,
    },
    tileContainer: {
      flexDirection: 'row',  
    },
  });

export default styles