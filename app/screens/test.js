import React, {useEffect, useState} from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';
import FomularButton from '../components/FomularButton'
import ShapeButton from '../components/ShapeButton'
import ColorButton from '../components/ColorButton'

const TextSearch = () => {
  const [name, setName] = useState('');
  const [imprint_front, setImprintFront] = useState('');
  const [imprint_back, setImprintBack] = useState('');
  
  return (
          <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start',paddingBottom:12}}>
            <Text style={styles.category}>제품명</Text>
            <TextInput 
              style={{borderColor: '#696969', width:'100%', height:36, borderWidth: 1, borderRadius: 4, padding:4}}
              placeholder='제품명을 입력하세요.'
              vaule={name}
              onChangeText={text =>setName(text)}
            />
            <Text style={styles.category}>식별문자</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:12}}>
              <Text style={{fontSize:16, padding:4}}>앞</Text>
              <TextInput 
                style={{borderColor: '#696969', width:'43.5%', height:36, borderWidth: 1, borderRadius: 4, padding:4}}
                placeholder='식별 문자(앞)'
                value = {imprint_front}
                onChangeText={text =>setImprintFront(text)}
              />
              <Text style={{fontSize:16, padding:4}}>뒤</Text>
              <TextInput 
                style={{borderColor: '#696969', width:'43.5%', height:36, borderWidth: 1, borderRadius: 4, padding:4}}
                placeholder='식별 문자(뒤)'
                vaule={imprint_back}
                onChangeText={text =>setImprintBack(text)}
              />
            </View>
          </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'12%',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingLeft:12,
    paddingRight:12,
    paddingBottom:32,
  },
  category: {
    fontSize:20, 
    padding:4
  }
});

export default TextSearch;