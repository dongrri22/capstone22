import React, {useEffect, useState} from 'react';
import { Text, TextInput, StyleSheet, View, Button, ScrollView } from 'react-native';

const Result = (route, navigation)=> {
    const [info, setInfo] = React.useState(null);
    const { information } = route.params;
    const info=JSON.parse(information)
    setInfo(JSON.parse(information));
    console.log(info)
    
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> TextSearchScreen </Text>
            <Text> 업체명: {info["업체명"]} </Text>
            <Text> 제품명: {info["제품명"]} </Text>
            <Text> 성상: {info["성상"]} </Text>
            <Text> 전문일반구분: {info["전문일반구분"]} </Text>
            <Text> 제품종류: {info["제품종류"]} </Text>
            <Text> 품목기준코드: {info["품목기준코드"]} </Text>
            <Text> 원료 성분: {info["원료 성분"]} </Text>
            <Text> 유효기간: {info["유효기간"]} </Text>
      </View>

    );
}
export default Result;