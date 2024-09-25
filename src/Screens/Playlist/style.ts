import {StyleSheet} from 'react-native';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 350,
    // backgroundColor: Colors.primary50,
  },
  header: {
    backgroundColor: 'black',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  imageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: 450,
    height: 300,
    top: 20,
  },
  image: {
    width: 250,
    height: 250,
  },
  description: {
    paddingHorizontal: 16,
    color: 'white',
    fontSize: 20,
  },
  spotifyContainer: {
    marginHorizontal: 16,
  },
  logo: {
    width: 100,
    height: 50,
  },
  likesContainer: {
    marginHorizontal: 16,
  },
  likesText: {
    color: 'white',
    fontSize: 14,
  },
  optionsContainer: {
    height: 100,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  favouriteButton: {
    paddingRight: 20,
  },
  moreButton: {
    paddingHorizontal: 20,
  },
  playButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  songList: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 380,
  },
  songItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 8,
  },
  songImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songDetails: {
    marginLeft: 16,
    flex: 1,
  },
  songTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  songArtist: {
    fontSize: 14,
    color: 'white',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#282828',
  },
  footerButton: {
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // Add more styles as needed
  },
  modalCloseButton: {
    alignItems: 'center',
    padding: 10,
  },
  modalText: {
    fontSize: 18,
    // Add more styles as needed
  },
});

export default styles;
