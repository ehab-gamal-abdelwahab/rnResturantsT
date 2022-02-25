import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  resturantsListContainer: {
    marginHorizontal: 10,
    // flex: 9,
    height: '70%',
  },
  resturantsListHeaderText: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
  resturantCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    marginVertical: 10,
    borderRadius: 10,
    marginTop: 0,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: 'white',
    elevation: 5,
    padding: 5,
    marginHorizontal: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  logoContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignContent: 'center',
  },
  descriptionContainer: {
    marginVertical: 5,
    flex: 0,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginRight: 5,
  },
  resturantName: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  resturantTags: {
    color: colors.gray4,
  },
  tagsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
  },
  tagImage: {
    width: 120,
    height: 90,
    resizeMode: 'center',
    borderRadius: 20,
  },
  searchContainer: {
    // flex: 1,
    borderBottomColor: colors.gray2,
    borderBottomWidth: 1,
    height: '10%',
  },
  floatButtonContainer: {
    position: 'absolute',
    width: 180,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    right: '27%',
    bottom: 20,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ffe505',
    backgroundColor: '#ffe505',
  },

  FloatingButtonStyle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#004d25',
    marginLeft: 10,
  },
});

export default styles;
