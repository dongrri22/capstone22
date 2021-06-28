import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
const KEYWORDS = ["하양", "노랑", "주황", "분홍", "빨강", "자주","연두", "초록", , "청록", "파랑", "갈색", "투명"];

export default class Color extends Component {
  state = {
    keywordsList: [],
  };
  toggleKeyword = (keyword) => {
    const { keywordsList } = this.state;
    let list = keywordsList;
    let index = -1;
    if ((index = keywordsList.indexOf(keyword)) != -1) {
      list.splice(index, 1);
    } else {
      list.push(keyword);
    }
    this.setState({ keywordsList: list });
  };
  render() {
    const { keywordsList } = this.state;
    const { container, selectedKeywordStyle, buttonStyle, textStyle } = styles;
    return (
      <View style={container}>
        {KEYWORDS.map((item) => (
          <TouchableOpacity
            style={keywordsList.find((element) => element == item) ? selectedKeywordStyle : buttonStyle}
            onPress={() => this.toggleKeyword(item)}
          >
            <Text style={textStyle}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  textStyle: {
    fontSize: 12,
    padding: 8,
    textAlign: "center",
  },
  buttonStyle: {
    width: "22.5%",
    backgroundColor: "#DCDCDC",
    borderRadius: 10,
    margin: 4,
  },
  selectedKeywordStyle: {
    width: "22.5%",
    backgroundColor: "#00BFFF",
    borderRadius: 10,
    margin: 4,
  },
});