import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  PanResponder,
  Dimensions,
  Modal
} from "react-native";

import * as Animatable from "react-native-animatable";
import { Card } from "react-native-elements";
import NavBar from "./NavBar";
import homePageImage from "../images/homePageImage.jpeg";

const SCREEN_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageStyle: {
    width: 100,
    height: 100,
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 10
  },
  cardV: {
    width: SCREEN_WIDTH,
    alignSelf: "center"
  },
  textCenter: {
    textAlign: "center"
  },
  viewPan: {
    textAlign: "center",
    paddingVertical: 50,
    paddingHorizontal: 5,
    height: 150,
    width: "100%",
    borderWidth: 1
  },
  viewPanState: {
    marginVertical: 5,
    textAlign: "center"
  },
  textState: {
    textAlign: "center",
    color: "blue"
  }
});

export default function AnimateLab() {
  const [detected, setDetected] = useState("None");
  const [stateAnimate, setstateAnimate] = useState("fadeIn");

  const recogRight = ({ moveX, moveY, dx, dy }) => {
    if (dx > 40) return true;
    else return false;
  };
  const recogLeft = ({ moveX, moveY, dx, dy }) => {
    if (dx < -40) return true;
    else return false;
  };
  const recogUp = ({ moveX, moveY, dx, dy }) => {
    if (dy < -40) return true;
    else return false;
  };
  const recogDown = ({ moveX, moveY, dx, dy }) => {
    if (dy > 40) return true;
    else return false;
  };

  const pan = PanResponder.create({
    onStartShouldSetPanResponder: (e, gesturestate) => {
      return true;
    },
    onPanResponderMove: (e, gesturestate) => {
      if (recogRight(gesturestate)) {
        setDetected("Swiped right");
        setstateAnimate("bounceInLeft");
      } else if (recogLeft(gesturestate)) {
        setDetected("Swiped left");
        setstateAnimate("bounceInRight");
      } else if (recogUp(gesturestate)) {
        setDetected("Swiped upwards");
        setstateAnimate("bounceInUp");
      } else if (recogDown(gesturestate)) {
        setDetected("Swiped downwards");
        setstateAnimate("bounceInDown");
      }
      return true;
    }
  });

  return (
    <ScrollView style={styles.container}>
      <NavBar />
      <Animatable.View
        animation="bounceInDown"
        duration={2000}
        delay={1000}
        style={styles.cardV}
      >
        <Card>
          <Card.Title>Animation example</Card.Title>
          <Card.Divider />
          <View style={styles.textCenter}>
            <Image
              resizeMode="cover"
              style={styles.imageStyle}
              source={homePageImage}
            />
            <Card.Divider />
            <Text style={styles.textCenter}>
              This is an animated card component
            </Text>
          </View>
        </Card>
      </Animatable.View>

      <Animatable.View
        animation="bounceInUp"
        duration={2000}
        delay={1000}
        style={styles.cardV}
      >
        <Card>
          <Card.Title>Handling gestures using PanResponder</Card.Title>
          <Card.Divider />
          <View style={styles.viewPanState}>
            <Text style={styles.textCenter}>Last detected gesture: </Text>
            <Animatable.Text
              style={styles.textState}
              animation={stateAnimate}
              duration={500}
            >
              {detected}
            </Animatable.Text>
          </View>
          <Card.Divider />
          <Text style={styles.textCenter}>
            Swipe vertically or horizontally in the box below and see the above
            state change accordingly
          </Text>
          <Animatable.View
            animation="bounceInUp"
            style={styles.viewPan}
            duration={2000}
            delay={1500}
            {...pan.panHandlers}
          ></Animatable.View>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
}
