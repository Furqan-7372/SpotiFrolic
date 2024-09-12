import {StyleSheet} from 'react-native';
import Colors from '../../Utils/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  backButton: {
    padding: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubText: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  optionsButton: {
    padding: 5,
  },
  musicInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  artistInfo: {
    marginRight: 10,
  },
  artistName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  albumCover: {
    width: 400,
    height: 400,
  },
  musicTitle: {
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  musicDetails: {
    flexDirection: 'row',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  musicDetailsText: {
    color: 'white',
    fontSize: 24,
  },
  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  time: {
    color: 'white',
    fontSize: 14,
  },
  audioControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  controlButton: {
    padding: 10,
  },
  extraControls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  lyricsButton: {
    backgroundColor: '#6a6e79',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
