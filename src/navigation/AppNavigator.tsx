import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GameDetailsScreen from "../screens/GameDetailsScreen";
import RankingsScreen from "../screens/RankingsScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1a1a1a",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "College Baseball" }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={{ title: "Game Details" }}
      />
      <Stack.Screen
        name="Rankings"
        component={RankingsScreen}
        options={{ title: "Top 25 Rankings" }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
