import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useQuery } from "@tanstack/react-query";
import { RootStackParamList } from "../types/navigation";
import { useStore } from "../store";
import { format } from "date-fns";
import { Game } from "../store/gamesSlice";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { games, setGames } = useStore();

  const { isLoading } = useQuery({
    queryKey: ["games"],
    queryFn: async () => {
      // TODO: Replace with actual API call
      const response = await fetch("YOUR_API_ENDPOINT/games");
      const data = await response.json();
      setGames(data);
      return data;
    },
  });

  const renderGameItem = ({ item }: { item: Game }) => (
    <TouchableOpacity
      style={styles.gameCard}
      onPress={() => navigation.navigate("GameDetails", { gameId: item.id })}
    >
      <View style={styles.teamsContainer}>
        <Text style={styles.teamName}>{item.homeTeam}</Text>
        <Text style={styles.score}>{item.homeScore}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teamName}>{item.awayTeam}</Text>
        <Text style={styles.score}>{item.awayScore}</Text>
      </View>
      <Text style={styles.gameStatus}>{item.status}</Text>
      <Text style={styles.gameTime}>
        {format(new Date(item.startTime), "MMM d, h:mm a")}
      </Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading games...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderGameItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
  gameCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  teamsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600",
  },
  score: {
    fontSize: 18,
    fontWeight: "bold",
  },
  gameStatus: {
    fontSize: 14,
    color: "#666",
  },
  gameTime: {
    fontSize: 12,
    color: "#999",
    marginTop: 4,
  },
});

export default HomeScreen;
