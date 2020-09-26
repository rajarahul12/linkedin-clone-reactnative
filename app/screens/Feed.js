import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Card from "../components/Card";
import Screen from "../components/Screen";
import { db } from "../config/firebase";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        var posts = snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }));
        setPosts(posts);
      });
  }, []);

  return (
    <Screen>
      <ScrollView>
        {posts.map(
          ({
            post: { name, title, description, likes, profileImage, images },
            id,
          }) => (
            <Card
              key={id}
              id={id}
              name={name}
              title={title}
              description={description}
              profileImage={profileImage}
              images={images}
              likes={likes}
            />
          )
        )}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({});
