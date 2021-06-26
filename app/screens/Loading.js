import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

const Loading = () => {
  return (
    <View style={styles.Container}>
      <ActivityIndicator 
        style={{height:'90%',width:'100%'}}
        color="#00bfff" size="large" 
       />
       <Text style={{textAlign:'center', fontSize:16}}>검색중...</Text>
    </View>
  );
};

export default Loading;