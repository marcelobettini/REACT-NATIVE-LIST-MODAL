import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Modal, Pressable, TouchableHighlight } from "react-native";
import users from "../data/users.json"
import Row from './Row';

const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [user, setUser] = useState({})
  

  return (
    <View style={styles.centeredView}>

      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalBack}>
          <View style={styles.modalView}>
            <Text style={styles.subheading}>Personal</Text>
            <Text>Name: {user.name}</Text>            
            <Text>Username: {user.username}</Text>            
            <Text>Email: {user.email}</Text>
            <Text>Phone: {user.phone}</Text>
            <Text>Website: {user.website}</Text>

            <Text style={styles.subheading}>Address</Text>
            {/* optional chaining operator. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
            <Text>Street: {user.address?.street}</Text> 
            <Text>Suite: {user.address?.suite}</Text>
            <Text>City: {user.address?.city}</Text>
            
            <Text style={styles.subheading}>Company</Text>
            <Text>{user.company?.name}</Text>
            <Text>"{user.company?.catchPhrase}"</Text>
                    
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <FlatList
        ListHeaderComponent={
          <Text style={styles.heading}>Registered Users</Text>
        }
        data={users}
        keyExtractor={(user) => user.uid}
        /* keyExtractor is not necessary in this particular case, let's see why:       
        
How to Use the keyExtractor Prop
By default, the keyExtractor prop checks for properties like key and id (in that order). If either of the two is present in the original data structure, it will be considered a unique key by the FlatList component.
In this case (as in the previous example), you do not have to explicitly use the keyExtractor prop.
If neither of them are provided, the FlatList component will throw a warning "VirtualizedList: missing keys for items ...":
For custom key names (uuid, uniqueKey, userId or something else as primary key), you'll use the keyExtractor prop. It extracts the unique key name and its value and tells the FlatList component to track the items based on that value.
        */

        renderItem={({ item }) =>
          <TouchableHighlight
            style={[styles.card, styles.button]}
            onPress={() => {
              setModalVisible(!modalVisible)
              setUser(item);
            }
            }>
            <Row item={item} />
          </TouchableHighlight>
        }
        ListFooterComponent={
          <Text style={styles.footer}>Coded by profe Marce</Text>
        }
        ItemSeparatorComponent={() => <View style={styles.separator} />}

      />
    </View>
  )
}
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: 'tomato',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center'
  },
  subheading:{
    textTransform: 'uppercase',
    fontSize: 15,
    fontWeight: '400',
    color: 'tomato',
    marginTop: 15,
    marginBottom: 5,
    borderBottomWidth: .5
  },
  footer: {
    marginTop: 25,
    marginBottom: 55,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  separator: {
    marginTop: 5,
    marginBottom: 5
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalBack: {
    flex:1,    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000a4',    
  },
  modalView: {        
    width: 340,
    backgroundColor: "lightgrey",
    borderRadius: 20,
    padding: 35,    
    shadowColor: "#000",
    shadowOffset: {
      width: 10,
      height: 5
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation:5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop:10
  },
  card:{
    backgroundColor: "#2196F3",
  },
  buttonClose: {
    backgroundColor: "tomato",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})

export default List