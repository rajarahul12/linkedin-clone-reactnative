import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Button,
} from "react-native";
import Screen from "../components/Screen";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { db, storage } from "../config/firebase";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";

import colors from "../config/colors";

export default function CreatePost() {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigator = useNavigation();

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the Images.");
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.cancelled) setImage(result);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  const handleOnPress = () => {
    if (image) {
      alert("Please remove the previosuly selected Image to add a new one");
      return;
    }
    selectImage();
  };

  const profileData = {
    name: "Raja Rahul",
    title: "Software Developer",
    profileImage:
      "https://media-exp1.licdn.com/dms/image/C5103AQEJ7SUJIskTVQ/profile-displayphoto-shrink_100_100/0?e=1606348800&v=beta&t=YQikQdWSPQgds3u9pGzAclHRm8-Ddd_tQeN6dDhsyTE",
  };

  const handlePost = async (e) => {
    if (image === null) {
      db.collection("posts").add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        description: description,
        likes: 0,
        name: profileData.name,
        profileImage: profileData.profileImage,
        title: profileData.title,
      });
      navigator.navigate("Home");
      // return;
    }
    // const { uri } = image;
    // const blob = await new Promise((resolve, reject) => {
    //   const xhr = new XMLHttpRequest();
    //   xhr.onload = function () {
    //     resolve(xhr.response);
    //   };
    //   xhr.onerror = function () {
    //     reject(new TypeError("Network request failed"));
    //   };
    //   xhr.responseType = "blob";
    //   xhr.open("GET", uri, true);
    //   xhr.send(null);
    // });

    // const uploadTask = storage.ref(`images/${imageName}`).put();
    // uploadTask.on(
    //   "state_changed",
    //   () => {},
    //   (error) => {
    //     console.log(error);
    //     alert(error.message);
    //   },
    //   () => {
    //     // complete function
    //     storage
    //       .ref("images")
    //       .child(imageName)
    //       .getDownloadURL()
    //       .then((url) => {
    //         db.collection("posts").add({
    //           timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    //           description: description,
    //           likes: 0,
    //           name: profileData.name,
    //           images: [url],
    //           profileImage: profileData.profileImage,
    //           title: profileData.title,
    //         });
    //       });
    //   }
    // );
  };

  return (
    <Screen style={styles.post}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              "https://media-exp1.licdn.com/dms/image/C5103AQEJ7SUJIskTVQ/profile-displayphoto-shrink_100_100/0?e=1606348800&v=beta&t=YQikQdWSPQgds3u9pGzAclHRm8-Ddd_tQeN6dDhsyTE",
          }}
        />
        <View style={styles.desc}>
          <Text style={styles.name}>Raja Rahul</Text>
          <Text style={styles.share}>Any One</Text>
        </View>
        <Button style={styles.postButton} onPress={handlePost} title="Post" />
      </View>
      <TextInput
        style={styles.textArea}
        placeholder="What do you want to talk about?"
        multiline={true}
        onChangeText={(text) => setDescription(text)}
        value={description}
      />
      {/* <TouchableHighlight underlayColor={colors.light} onPress={handleOnPress}>
        <View style={styles.photoDiv}>
          <MaterialIcons name="photo-camera" size={24} color="gray" />
          <Text style={styles.addPhoto}>Add a photo</Text>
        </View>
      </TouchableHighlight> */}
      {image ? (
        <View style={styles.remove}>
          <Text style={{ textAlign: "center" }}>
            {image.uri.split("/").slice(-1)[0]}
          </Text>
          <Entypo
            onPress={() => setImage(null)}
            name="cross"
            size={24}
            color="red"
          />
        </View>
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "white",
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
  share: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 3,
    textAlign: "center",
    width: 100,
  },
  textArea: {
    height: Dimensions.get("window").height / 2,
    fontSize: 18,
    padding: 25,
    marginTop: 20,
  },
  photoDiv: {
    display: "flex",
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    padding: 20,
    alignItems: "center",
  },
  addPhoto: {
    fontSize: 18,
    marginLeft: 15,
  },
  postButton: {
    marginTop: 40,
  },
  remove: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
  },
  desc: {
    flex: 1,
  },
});
