import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { AntDesign, Foundation, FontAwesome } from "@expo/vector-icons";
import colors from "../config/colors";

export default function Card({
  name,
  title,
  description,
  images,
  profileImage,
  likes,
  id,
}) {
  const handleOnPress = () => {};

  return (
    <View elevation={5} style={styles.card}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri: profileImage,
          }}
        />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text>{title}</Text>
        </View>
      </View>
      {description && <Text style={styles.description}>{description}</Text>}

      {images && images[0] ? (
        <Image
          style={styles.postImage}
          source={{
            uri: images[0],
          }}
        />
      ) : null}

      <View style={styles.icons}>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={colors.light}
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <AntDesign name="like1" size={20} color="gray" />
            <Text>Like</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={colors.light}
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <Foundation name="comment" size={20} color="gray" />
            <Text>Comment</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={colors.light}
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <FontAwesome name="share" size={20} color="gray" />
            <Text>Share</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.iconDiv}
          underlayColor={colors.light}
          onPress={handleOnPress}
        >
          <View style={styles.iconDivView}>
            <FontAwesome name="send" size={20} color="gray" />
            <Text>Send</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    marginBottom: 20,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    elevation: 5,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 0,
    paddingRight: 15,
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    marginTop: 10,
    paddingLeft: 15,
    marginBottom: 5,
  },
  postImage: {
    width: Dimensions.get("window").width,
    height: 250,
    marginTop: 5,
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  iconDiv: {
    width: "25%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  iconDivView: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
