import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
  },
  bannerContainer: {
    height: '40%',
    flexDirection: 'column',
    // flex: 1,
    // marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: 'white',
    elevation: 20,
    // padding: 5,
  },
  bannerImage: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },
  bannerImageContainer: {
    height: '65%',
    width: '100%',
  },
  logo: {
    width: 80,
    height: 70,
    resizeMode: 'contain',
  },
  logoContainer: {
    width: 100,
    height: 80,
    justifyContent: 'center',
    alignContent: 'center',
  },
  itemsLogoContainer: {
    width: '30%',
  },
  descriptionContainer: {
    // marginVertical: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: 10,
    width: '70%',
  },
  resturantName: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 16,
    // marginVertical: 10,
  },
  resturantNameContainer: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignContent: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    height: '20%',
  },
  itemCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
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
    padding: 10,
    marginHorizontal: 10,
  },
  itemContainer: {
    // flex: 1,
    height: '60%',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingBottom: 10,
    paddingTop: 20,
  },
  itemImage: {
    margin: 5,
    height: 90,
    resizeMode: 'cover',
    borderColor: colors.white,
    borderRadius: 15,
    borderWidth: 1,
  },
  price: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 16,
    marginVertical: 10,
  },
  itemDescription: {
    color: colors.gray4,
    fontSize: 16,
  },
  floatButtonContainer: {
    position: 'absolute',
    width: 120,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: '3%',
    bottom: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: 'yellow',
  },

  FloatingButtonStyle: {
    fontSize: 15,
    // fontWeight: 'bold',
    color: 'green',
    marginLeft: 10,
  },
});

export default styles;
