import * as WebBrowser from "expo-web-browser";
import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Button,
  Alert,
  TextInput,
  ImageBackground
} from "react-native";

import { MonoText } from "../components/StyledText";

export default function SignInScreen(props) {
  return (
    <ImageBackground
      source={require("../assets/images/background-green.png")}
      style={{ width: "100%", height: "100%" }}
    >
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >

        <View>
          <Text style={{color: "white", fontSize: 30, fontFamily: 'Helvetica Neue', paddingTop: 0, paddingLeft: 20, textDecorationLine: "underline"}}>{"Welcome User"}</Text>
        </View>

        <View style={styles.throwThrashContainer}>
          <Text style={{ color: "#6E6E6E", fontSize: 20, fontFamily: 'Helvetica Neue', paddingBottom: 10}}>Throw trash</Text>
          <Text style={{ fontSize: 14, fontFamily: 'Helvetica Neue', color: "#6E6E6E" }}>
            To register thrown trash, just press the '+' sign below the correct trash type.
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <View>
            <Image
              style={styles.incrementButtonImage}
              source={require("../assets/images/trash-bin.png")}
            />

            <TouchableHighlight
              style={{
                height: 50,
                width: 100,
                borderRadius: 20,
                backgroundColor: "#7A9A7E",
                flex: 1,

                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            >
              <Text style={{ fontSize: 40 }}>+</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.incrementButtonImage}
              source={require("../assets/images/trash-bin.png")}
            />
            <TouchableHighlight
              style={{
                height: 50,
                width: 100,
                borderRadius: 20,
                backgroundColor: "#7A9A7E",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            >
              <Text style={{ fontSize: 40 }}>+</Text>
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.incrementButtonImage}
              source={require("../assets/images/trash-bin.png")}
            />
            <TouchableHighlight
              style={{
                height: 50,
                width: 100,
                borderRadius: 20,
                backgroundColor: "#7A9A7E",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            >
              <Text style={{ fontSize: 40 }}>+</Text>
            </TouchableHighlight>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <TouchableHighlight
            onPress={() => props.navigation.navigate("About")}
            style={{
              backgroundColor: "#7A9A7E",
              width: 100
            }}
          >
            <Text style={{ color: "white", padding: 10 }}>About us</Text>
          </TouchableHighlight>
        </View>

        <View>
          <Text style={{color: "white", fontSize: 20, fontFamily: 'Helvetica Neue', paddingTop: 30, paddingLeft: 20}}>{"My stats"}</Text>
        </View>

      </ScrollView>
    </View>
    </ImageBackground>
  );
}

SignInScreen.navigationOptions = {
  header: null
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/development-mode/"
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    "https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes"
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#B8D2B9"
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  contentContainer: {
    paddingTop: 30
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  homeTitle: {
    fontSize: 27,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    paddingVertical: 30
  },
  homeSubTitle: {
    fontSize: 20,
    color: "rgba(96,100,109, 1)",
    textAlign: "center",
    paddingVertical: 10,
    fontStyle: "italic"
  },
  tabBarInfoContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  buttonsContainer: {
    marginTop: 15,
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  },
  incrementButtonImage: {
    marginTop: 50,
    width: 150,
    height: 150
  },
  loginContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  throwThrashContainer: {
      backgroundColor: "#fff",
      marginLeft: 20,
      marginRight: 20,
      opacity: 0.82,
      paddingTop: 20,
      paddingBottom: 20,
      padding: 20,
      marginTop: 30,
      borderRadius: 10
  }
});
