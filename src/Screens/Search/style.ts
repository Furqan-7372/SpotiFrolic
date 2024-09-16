import { StyleSheet } from "react-native";
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: Colors.primary50,
    },
    heading: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 16,
        color: Colors.primary0,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.primary0,
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
    },
    searchIcon: {
        marginRight: 8,
        padding: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 20,
        color: Colors.primary0,
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 8,
        width: 400,
        color: Colors.primary0,
        textAlign: "left",
    },
    itemContainer: {
        width: 160,
        height: 90,
        marginVertical: 10,
        marginHorizontal: 20, 
        padding: 20,
        borderRadius: 10,
        backgroundColor: Colors.primary100,
    },
    itemText: {
        fontSize: 20,
        color: Colors.primary0,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: "center",
    },
    icon: {
        width: 50,
        height: 50,
        marginRight: 16,
        borderRadius: 8,
      },
});

export default styles;
