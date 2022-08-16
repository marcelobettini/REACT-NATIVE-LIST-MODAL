import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Row = ({item}) => {
  return (
    
  <View >
    <Text style={styles.key}>Name: <Text style={styles.value}> {item.name}</Text></Text>
    <Text style={styles.key}>Username: <Text style={styles.value}>{item.username}</Text></Text>
    <Text style={styles.key}>Email: <Text style={styles.value}>{item.email}</Text></Text>
    <Text style={styles.key}>Website: <Text style={styles.value}>{item.website}</Text></Text>
  </View>  
  )
}
const styles = StyleSheet.create({
  key: {
    fontWeight:'400',        
  },
  value:{    
    color:'white'
  },
})

export default Row