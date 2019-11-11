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
  Alert
} from "react-native";

import { MonoText } from "../components/StyledText";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.welcomeContainer}>
          <Image
            source={require("../assets/images/waste-logo.png")}
            style={styles.incrementButtonImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.homeTitle}>WASTE MANAGER</Text>
          <Text style={styles.homeSubTitle}>Stockholm Royal Seaport</Text>
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
                backgroundColor: "green",
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
                backgroundColor: "yellow",
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
                backgroundColor: "#00a3ff",
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
      </ScrollView>
    </View>
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
    backgroundColor: "#B8D2B9"
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
    width: 100,
    height: 100
  }
});
