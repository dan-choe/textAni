import * as React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import TextAnimation from "./components/TextAnimation";

import Apploading from "expo-app-loading";
import useFonts from "./components/useFonts";

const defaultMsg = "YOU CAN LET GO OF YOUR NEGATIVE MIND HERE!";

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);
  const [inputTyped, setinputTyped] = useState("");
  const [msgSet, setMsgSet] = useState([
    "I miss my dad",
    "This is all my fault! I look so stupid",
    "I can't stand this anymore. I want to disapper...",
    "I really hate myself today",
    "I don't have courage to do that work.",
    "feel lonely",
    "I reget what I did today. I want to stop punishing myself",
    "How can I tell her I truly love her",
  ]);

  const insertNewMsg = () => {
    setMsgSet([...msgSet, inputTyped]);
    setinputTyped("");
  };

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!fontsloaded) {
    return (
      <Apploading
        startAsync={LoadFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.msgSection}>
        <View style={styles.msgSectionAlign}>
          <View style={styles.blankBox}></View>
          <View style={[styles.inputBox]}>
            <View style={styles.inputWrapper}>
              <View style={styles.inputComponent}>
                <TextInput
                  style={{
                    fontSize: "18px",
                    fontFamily: "Frank-furter",
                  }}
                  multiline={false}
                  onChangeText={(text) => {
                    setinputTyped(text);
                  }}
                  placeholder={defaultMsg}
                  value={inputTyped}
                  onSubmitEditing={() => insertNewMsg()}
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                />
              </View>
              
            </View>
            <View style={styles.inputShadow}></View>
          </View>

          <View style={styles.eraseBox}>
            <TouchableOpacity
              style={styles.inputWrapper}
              onPress={() => insertNewMsg()}
            >
              <View style={styles.inputComponent}>
                <Text
                  style={{ textAlign: "center", fontSize: "18px" }}
                  >ERASE</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.inputShadow}></View>
          </View>

          <View style={styles.blankBox}></View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          zIndex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {msgSet.map((e) => {
          return (
            <TextAnimation msg={e} />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    fontFamily: "frankfurther",
  },
  container: {
    flex: 1,
    // borderStyle: 'dotted',
    // borderWidth: 3,
    backgroundColor: "#EB9597",
    // alignItems: 'center',
    justifyContent: "center",
  },
  header: {
    // flex: 1,
    position: "absolute",
    top: 10,
    // left: 10,
    borderStyle: "solid",
    borderWidth: 1,
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'center',
    height: 100,
  },
  logo: {
    position: "absolute",
    top: 40,
    left: 40,
    zIndex: 2,
    // borderStyle: 'dotted',
    // borderWidth: 3,
  },
  auth: {
    position: "absolute",
    top: 40,
    right: 40,
    // borderStyle: 'dotted',
    // borderWidth: 3,
  },
  highlightBox: {
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    // elevation: 5,
  },
  msgSection: {
    position: "absolute",
    bottom: 40,
    // margin: "auto",
    left: 0,
    right: 0,
    zIndex: 2,
  },
  msgSectionAlign: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "space-between",
    // alignContent: "space-between",
    // alignItems: "flex-end",
    // borderWidth: 1,
    // borderColor: "red",
  },
  inputBox: {
    flex: 8,
    marginHorizontal: 10,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: "rgba(153,82,84,0.6)",
  },
  eraseBox: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 10,
    // shadowColor: "#fff",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 20,
    // elevation: 5,
    backgroundColor: "rgba(153,82,84,0.6)",
  },
  blankBox: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: "#fff",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    // borderStyle: ''
    backgroundColor: "#EB9597",
  },
  inputShadow: {
    minHeight: 10,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderRadius: 10,
    // backgroundColor: 'rgba(153,82,84,0.6)'
  },
  inputComponent: {
    flex: 1,
    justifyContent: "center",
    // borderWidth: 1,
  },
  inputEnterBtn: {
    // width: 22,
    // height: 18,
    justifyContent: "center",
    // borderWidth: 1,
  },
  inputStyle: {
    fontWeight: "800",
    placeholderTextColor: "#000",
    // textAlignVertical: "center",
  },
  inputCenter: {
    textAlign: "center",
  },
  popupBox: {
    position: "absolute",
    left: 40,

    padding: 20,
    borderWidth: 4,
    borderRadius: 10,
    backgroundColor: "#FFB4B5",
  },
  popupBoxWrapper: {
    // padding: 10,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popupTextContent: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 20,
  },
  popupEnterBtn: {
    backgroundColor: "#fff",
    borderWidth: 4,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  btnLabel: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    // fontFamily: "Frankfurter",
    textAlign: "center",
    fontWeight: "800",
  },
});
