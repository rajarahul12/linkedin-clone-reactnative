import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CreatePost from "../screens/CreatePost";

const Stack = createStackNavigator();

const CreatePostNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="CreatePost" component={CreatePost} />
  </Stack.Navigator>
);

export default CreatePostNavigator;
