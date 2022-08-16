import { StyleSheet, View } from 'react-native';

import List from './components/List';
export default function App() {  
  
  return (
    <View style={styles.container}>  
      <List />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 40,
    backgroundColor: '#fff',
    padding: 10,
    justifyContent: 'center'    
  },
  
});
