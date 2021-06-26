import React, {useEffect, useState} from 'react';
import { Text, TextInput, StyleSheet, View, Button, ScrollView } from 'react-native';
import axios from 'axios';
import FomularButton from './app/components/FomularButton'
import ShapeButton from './app/components/ShapeButton'
import ColorButton from './app/components/ColorButton'


const TextSearch = () => {
  const [name, setName] = useState('');
  const [imprint_front, setImprintFront] = useState('');
  const [imprint_back, setImprintBack] = useState('');
  const [formulation, setFormulation] = useState('');
  const [shape, setShape] = useState('');
  const [color, setColor] = useState('');

  axios.get("http://ee35f03e3b15.ngrok.io/search", {
    params: {
      name,
      imprint_front,
      imprint_back,
    }
  })
  .then(function (response) {
       // response  
  }).catch(function (error) {
      // 오류발생시 실행
  }).then(function() {
      // 항상 실행
  });

  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{textAlign:'center', fontSize:28,paddingBottom:12, fontWeight: 'bold', color:'#000000'}}>직접 입력</Text>
          <View style={{width:"100%",borderBottomWidth:2,borderColor:'#00bfff'}} />
        </View>
        <View style={styles.content}>
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
            <Text style={{fontSize:20, padding:4}}>제형</Text>
            <FomularButton />
            <Text style={{fontSize:20, padding:4}}>모양</Text>
            <ShapeButton />
            <Text style={{fontSize:20, padding:4}}>색</Text>
            <ColorButton />
            <View style={styles.buttonBox}>
              <Button
                style={styles.buttonStyle} 
                title="검색하기"
                onPress={() => navigation.navigate('Result')}
              />
            </View>
          </View>
        </View>
      </View>
  );
}

export default TextSearch;

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
  },
  buttonBox: {
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: "wrap",
    padding: 4,
  },
  buttonStyle: {
    alignItems: 'center',
    width: "22.5%",
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    margin: 4,
  }
});