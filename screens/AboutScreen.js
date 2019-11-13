import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image
} from "react-native";
import { ExpoLinksView } from "@expo/samples";
import backgroundImage from "../assets/images/background-green.png";

export default function AboutScreen() {
  return (
    <ImageBackground
      source={require("../assets/images/background-green.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <ScrollView style={styles.container}>
        {/**
         * Go ahead and delete ExpoLinksView and replace it with your content;
         * we just wanted to provide you with some helpful links.
         */}
        <View>
        <Text style={{color: "white", fontSize: 30, fontFamily: 'Helvetica Neue', paddingTop: 30, paddingLeft: 20, textDecorationLine: "underline"}}>{"About us"}</Text>
        </View>

        <View style={styles.aboutContainer}>
          <Text style={{ fontSize: 20, paddingBottom: 10, fontFamily: 'Helvetica Neue', color: "#6E6E6E"}}>
            {"KTH meets Stockholm Royal Seaport"}
          </Text>
          <Text style={{ fontSize: 14, fontFamily: 'Helvetica Neue', color: "#6E6E6E" }}>
            This is a prototype developed for the course DH2465 Computer
            Science, Business and Management at the Royal Institute of
            Technology. The prototype is developed by Edward Alpsten, Lukas
            Ekberg, Jonathan Rintala, Erik Skogetun and Sebastian Ståhl.
          </Text>
          {/* <Image
            source={require("../assets/images/us.png")}
          /> */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

AboutScreen.navigationOptions = {
  header: null
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  aboutContainer: {
    backgroundColor: "#fff",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    padding: 20,
    opacity: 0.82,
    marginTop: 30,
    borderRadius: 10
  }
});
