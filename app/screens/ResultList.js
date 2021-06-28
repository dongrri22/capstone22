import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image} from 'react-native';
 
export default class Main extends Component{
    constructor(){
        super();
        this.state={
            datas3: [
                {name:"sam", message:"Hello world"},
                {name:"robin", message:"Hello rn"},
                {name:"kim", message:"Hello react"},
                {name:"hong", message:"Hello hybrid"},
                {name:"rosa", message:"Hello ios"},
                {name:"lee", message:"Hello rom"},
                {name:"jack", message:"Hello tom"},
                {name:"moana", message:"Hello native"},
            ],
        };
    }
 
    render(){
        // 대량의 데이터의 각 아이템에 [key]라는 이름의 프로퍼티가 존재해야만 함.
        // 기존의 배열 요소 객체들의 key라는 이름의 프로퍼티(멤버 변수)를 추가하기
        // 배열의 요소 개수만큼 요소들을 순회하면서 파라미터로 전달된 콜백함수 호출하는 forEach()
        // this.state.datas3.forEach((element, index)=>{
        //     element.key= index; //배열요소에 새로운 멤버 key 추가하기!!
        // });
        return(
            <View style={styles.root}>
                <Text style={styles.titleText}>FlatList Test</Text>
                {/* 1) data - FlatList가 보여줄 대량의 데이터 */}
                {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정 */}
                <FlatList
                    data={this.state.datas3}
                    renderItem={this.renderItem}
                    // FlatList의 속성: 각 요소에 키를 추출해주는 콜백함수 지정
                    keyExtractor={ item=> item.name }>
                
                </FlatList>
 
            </View>
        );
    }
    renderItem=({item})=>{
        return(
            <TouchableOpacity style={styles.itemView} onPress={()=>{alert(item.name);}}>
                <View style={{flexDirection:'column'}}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemMsg}>{item.message}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
 
const styles= StyleSheet.create({
    root:{flex:1, padding:16,},
    titleText:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center',
        paddingBottom:16,
    },
    itemView:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
        borderColor: '#00bfff'
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8,
    },
    itemName:{
        fontSize:20,
        fontWeight:'bold',
    },
    itemMsg:{
        fontSize:16
    },
});
