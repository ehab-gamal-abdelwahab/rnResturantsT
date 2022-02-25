import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  getResturantsTags,
  getResturants,
  selectTag,
} from '../../store/actions/resturantsAction';

import {
  loadAllResturants,
  loadRestTags,
  filterByBrandNamme,
  filterByTag,
  addResturant,
} from '../../network/resturants.api';

import colors from '../../theme/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

import styles from './HomeScreen.style';
import AddResturantModal from '../../components/UI/addResturantsModal';

const Item = ({listItem, detailsScreenHandler}) => {
  const tags = listItem.tags.map(k => k.name).join(', ');
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => detailsScreenHandler(listItem.name)}
      style={styles.resturantCard}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{uri: listItem.logo}}></Image>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.resturantName}>{listItem.name}</Text>
        <Text style={styles.resturantTags} numberOfLines={5}>
          {tags}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Tag = ({tag, filterByTagHandler, selected}) => (
  <TouchableOpacity
    activeOpacity={0.5}
    onPress={() => filterByTagHandler(tag.name)}
    style={{
      marginHorizontal: 5,
      alignItems: 'center',
      flexDirection: 'column',
    }}>
    <View style={{marginBottom: 10}}>
      <Image style={styles.tagImage} source={{uri: tag.image}}></Image>
    </View>
    {/* <View> */}
    <View
      style={{
        position: 'absolute',
        top: 65,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: selected == tag.name ? 3 : 0,
        borderBottomColor: selected == tag.name ? '#ffe505' : '',
      }}>
      <Text style={{fontSize: 14}}>{tag.name}</Text>
    </View>
    {/* </View> */}
  </TouchableOpacity>
);

const HomeScreen = props => {
  const navigation = useNavigation();
  const [searchInput, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const brands = useSelector(state => state.resturantReducer.brands);
  const tags = useSelector(state => state.resturantReducer.tags);
  const selectedTag = useSelector(state => state.resturantReducer.selectedTag);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <Item listItem={item} detailsScreenHandler={detailsScreenHandler} />
  );
  const renderTag = ({item}) => (
    <Tag
      tag={item}
      filterByTagHandler={filterByTagHandler}
      selected={selectedTag}
    />
  );

  useEffect(() => {
    let data = loadAllResturants();
    dispatch(getResturants(data.brands));
    let resturantTags = loadRestTags();
    dispatch(getResturantsTags(resturantTags));
  }, []);

  const detailsScreenHandler = name => {
    navigation.navigate('details', {name: name});
  };

  const filterByTagHandler = name => {
    onChangeText('');
    let brands = filterByTag(name);
    dispatch(getResturants(brands));
    dispatch(selectTag(name));
  };

  const searchByName = name => {
    onChangeText(name);
    let brands = filterByBrandNamme(name);
    dispatch(getResturants(brands));
    dispatch(selectTag(''));
  };

  const viewAddResturantHandler = () => {
    setModalVisible(true);
  };

  const addResturantHandler = data => {
    let added = addResturant(data);
    let res = loadAllResturants();
    dispatch(getResturants(res.brands));
    let resturantTags = loadRestTags();
    dispatch(getResturantsTags(resturantTags));
    if (added) {
      alert('Resturant added successfully');
      setModalVisible(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <View
          style={{
            // flexDirection: 'row',
            // justifyContent: 'flex-start',
            // alignContent: 'flex-end',
            // alignItems: 'flex-end',
            height: '80%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              backgroundColor: '#eee',
              color: '#424242',
              width: '80%',
              height: '80%',
              borderWidth: 1,
              borderColor: '#eee',
              borderRadius: 25,
              padding: 5,
              marginTop: 15,
              // marginBottom: 4,
              marginLeft: 15,
            }}>
            <Icon
              style={{marginLeft: 10}}
              size={25}
              color="black"
              name="md-search-outline"
            />
            <TextInput
              onChangeText={val => searchByName(val)}
              value={searchInput}
              underlineColorAndroid="transparent"
              placeholder="What would you like to buy?"
              style={{
                backgroundColor: '#eee',
                color: '#424242',
                width: '80%',
                height: 40,
                marginLeft: 10,
                // alignItems: 'center',
                // justifyContent: 'center',
              }}></TextInput>
          </View>
        </View>
      </View>
      <View style={styles.tagsContainer}>
        {tags ? (
          <FlatList
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal
            style={{marginTop: 5}}
            data={tags}
            renderItem={renderTag}
            keyExtractor={item => item.name}
          />
        ) : null}
      </View>
      <View style={styles.resturantsListContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={{marginTop: 0}}
          data={brands}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ListHeaderComponent={() => (
            <Text style={styles.resturantsListHeaderText}>Resturants</Text>
          )}
        />
        {/* <Button
        onPress={() => navigation.navigate('details')}
        title="Details"></Button> */}
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={viewAddResturantHandler}
          style={styles.floatButtonContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                backgroundColor: '#004d25',
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                overflow: 'hidden',
                borderWidth: 3,
                borderColor: '#004d25',
              }}>
              <Icons
                style={{marginLeft: 3}}
                size={20}
                name="shopping-bag"
                color="white"
              />
              {/* md-briefcase */}
            </View>
            <Text style={styles.FloatingButtonStyle}>ADD NEW RESTURANT</Text>
          </View>
        </TouchableOpacity>
      </View>
      {modalVisible ? (
        <AddResturantModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          addResturant={addResturantHandler}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default HomeScreen;
