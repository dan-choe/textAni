import * as React from "react";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  TouchableOpacity,
  Animated,
  View,
  Text,
  Button,
  Dimensions,
  Easing,
  StyleSheet,
} from "react-native";
import * as Animatable from "react-native-animatable";
import METext from "../components/METext";

const randomize = (max: number) =>
  (Math.random() < 0.5 ? -1 : 1) * Math.random() * max;

export default function TextAnimation({ amplitude = 5, rotation = 7, msg }) {
  const { width, height } = Dimensions.get("window");

  useEffect(() => {}, []);

  return (
    // <View style={styles.container}>
    <Animatable.View
      iterationCount="infinite"
      duration={20000}
      // animation="zoomInDown"
      // iterationCount={5}
      // easing="ease-out"
      // direction="alternate"
      animation={{
        0: {
          opacity: Math.random(),
          translateX: 0.5 * randomize(width),
          translateY: 0.5 * randomize(height),
        },
        0.3: {
          opacity: Math.random(),
          translateX: 0.5 * randomize(width),
          translateY: 0.5 * randomize(height),
        },
        0.6: {
          opacity: Math.random(),
          translateX: 0.5 * randomize(width),
          translateY: 0.5 * randomize(height),
        },
        1: {
          opacity: Math.random(),
          translateX: 0.5 * randomize(width),
          translateY: 0.5 * randomize(height),
        },
      }}
    >
      <METext
        // transition="fontSize"
        // animation="flash"
        // easing="ease-out"
        // duration={7000}
        // iterationCount="infinite"
        moreStyle={{ textAlign: "center", fontWeight: "800" }}
        msg={msg}
      />
    </Animatable.View>
    // </View>
  );
}

const styles = StyleSheet.create({
  Texts: {
    fontFamily: "Frank-furter",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
