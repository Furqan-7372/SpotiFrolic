import { StyleSheet } from 'react-native';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#000',
      padding: 16,
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
    iconMargin: {
      // marginLeft: 15,
    },
    heading: {
      flex: 1.5,
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
    },
    tileContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    tile: {
      flex: 1,
      alignItems: 'center',
      marginHorizontal: 10,
    },
    tileImage: {
      width: 170,
      height: 250,
    //   borderRadius: 75,
    },
    tileText: {
      color: '#fff',
      marginTop: 10,
    },
    trendingItem: {
      alignItems: 'center',
      marginHorizontal: 10,
    },
    trendingImage: {
      width: 170,
      height: 200,
      margin: 10,
    },
    trendingText: {
      color: '#fff',
      marginTop: 5,
      fontWeight: 'bold',
    },
    trendingSubText: {
      color: '#888',
    },
  });

export default styles