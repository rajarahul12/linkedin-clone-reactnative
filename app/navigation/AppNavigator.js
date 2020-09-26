import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Feed from "../screens/Feed";
import CreatePostNavigator from "./CreatePostNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Feed}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="My Network"
      component={Feed}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-people" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Post"
      component={CreatePostNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons
            name="plus-circle"
            color={color}
            size={size}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Feed}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="ios-notifications" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Account"
      component={Feed}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
