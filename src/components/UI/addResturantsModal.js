import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddResturantModal = props => {
  const [name, setName] = useState('');
  const [tags, setTags] = useState('');

  const addItemHandler = () => {
    if (!name || !tags) {
      alert('Enter all required data before adding item');
    } else {
      let data = {
        name: 'Pizza Hut',
        logo: 'https://ty-dashboard.s3.amazonaws.com/unnamed%20%281%29-1640219353386.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        branches: [
          {
            name: 'Nasr City',
          },
          {
            name: 'Masr Al Jadidah',
          },
          {
            name: 'Maadi',
          },
          {
            name: 'Haram',
          },
        ],
        items: [
          {
            name: 'small sie pizza',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '120 LE.',
            image:
              'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/beef.jpg?alt=media&token=acf5aaa6-1748-4083-a091-c3079b543cc6',
          },
          {
            name: 'VIggie pizza',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: 'price On selection',
            image:
              'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/beef.jpg?alt=media&token=acf5aaa6-1748-4083-a091-c3079b543cc6',
          },
          {
            name: 'Cheese pizza',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            price: '120 LE.',
            image:
              'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/beef.jpg?alt=media&token=acf5aaa6-1748-4083-a091-c3079b543cc6',
          },
        ],
        tags: [],
      };
      data.name = name;
      data.tags = tags.split(',').map(tag => {
        return {
          name: tag,
          image:
            'https://firebasestorage.googleapis.com/v0/b/haader-v2.appspot.com/o/sandwich.png?alt=media&token=24612ee9-cb30-4b4e-a9ea-8d4a5b7e0bf5',
        };
      });
      props.addResturant(data);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          props.setModalVisible(!props.modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => props.setModalVisible(!props.modalVisible)}
              style={{
                position: 'absolute',
                alignItems: 'center',
                justifyContent: 'center',
                right: '1%',
                top: 10,
              }}>
              <Icon
                style={{marginLeft: 10}}
                size={35}
                color="gray"
                name="close"
              />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                }}>
                <TextInput
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#ffe505',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginVertical: 5,
                    paddingHorizontal: 20,
                  }}
                  placeholder="name"
                  value={name}
                  onChangeText={val => setName(val)}></TextInput>
                <TextInput
                  style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#ffe505',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginVertical: 5,
                    paddingHorizontal: 20,
                  }}
                  placeholder="tags"
                  value={tags}
                  onChangeText={val => setTags(val)}></TextInput>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                  }}>
                  <Text style={{marginHorizontal: '8%', marginVertical: 5}}>
                    EX. tag1,tag2, etc..
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => addItemHandler()}
                  style={{
                    backgroundColor: '#ffe505',
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#ffe505',
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    marginTop: 15,
                  }}>
                  <Text style={{fontWeight: 'bold', color: '#004d25'}}>
                    ADD
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '60%',
    width: '95%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AddResturantModal;
