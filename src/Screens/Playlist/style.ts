import {StyleSheet} from 'react-native';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary50,
  },
  header: {
    flexDirection: 'row',
  },
  backArrow: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flex: 7,
    width: 300,
    height: 280,
    padding: 20,
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
});

export default styles;
