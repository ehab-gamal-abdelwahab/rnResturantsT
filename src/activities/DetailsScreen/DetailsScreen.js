import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getResturant} from '../../store/actions/resturantsAction';
import ActionSheet from 'react-native-action-sheet-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

import styles from './DetailsScreen.style';

const Item = ({listItem}) => {
  return (
    <View>
      <View style={styles.itemCard}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.resturantName}>{listItem.name}</Text>
          <Text style={styles.itemDescription} numberOfLines={5}>
            {listItem.description}
          </Text>
          <Text style={styles.price} numberOfLines={5}>
            {listItem.price ? listItem.price : 'Price on selection'}
          </Text>
        </View>
        <View style={styles.itemsLogoContainer}>
          <Image
            style={styles.itemImage}
            source={{uri: listItem.image}}></Image>
        </View>
      </View>
    </View>
  );
};

const DetailsScreen = ({route}) => {
  const [visible, setVisible] = useState(false);

  const resturant = useSelector(state => state.resturantReducer.resturant);
  const dispatch = useDispatch();
  const list =
    resturant && resturant.branches
      ? resturant.branches.map(item => {
          return {name: item.name, value: item.name, extraData: {type: 'text'}};
        })
      : [];

  useEffect(() => {
    let name = route.params.name;
    dispatch(getResturant(name));
    console.log(list);
  }, []);

  const onClose = () => {
    setVisible(false);
  };

  const modalShow = () => {
    console.log('modalShow');
  };
  const renderItem = ({item}) => <Item listItem={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bannerContainer}>
        <View style={styles.bannerImageContainer}>
          <Image
            style={styles.bannerImage}
            source={require('../../assets/images/Pizza.jpeg')}
          />
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setVisible(true)}
              style={styles.floatButtonContainer}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  style={{marginLeft: 0}}
                  size={23}
                  name="location-sharp"
                  color="red"
                />
                <Text style={styles.FloatingButtonStyle}>Branches</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resturantNameContainer}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={{uri: resturant.logo}}></Image>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.resturantName}>{resturant.name}</Text>
            <View style={{marginRight: 10}}>
              <Text numberOfLines={5}>{resturant.description}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.itemContainer}>
        {resturant && resturant.items ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{marginTop: 5}}
            data={resturant.items}
            renderItem={renderItem}
            keyExtractor={item => item.name}
          />
        ) : null}
      </View>
      <ActionSheet
        options={list}
        isVisible={visible}
        onClose={() => onClose()}
        // onChange={onChange}
        hideCancel={false}
        cancelText="close"
        cancelTextStyle={{fontSize: 15}}
        cancelContainerStyle={{backgroundColor: 'white'}}
        optionsTextStyle={{fontSize: 15}}
        optionsContainerStyle={{backgroundColor: 'white'}}
        modalProps={{animationInTiming: 500, onModalShow: () => modalShow()}}
      />
    </SafeAreaView>
  );
};

export default DetailsScreen;
