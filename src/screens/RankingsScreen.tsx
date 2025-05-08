import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { useStore } from "../store";

interface Team {
  id: string;
  name: string;
  rank: number;
  record: string;
  conference: string;
}

const RankingsScreen = () => {
  const { isFavoriteTeam, addFavoriteTeam, removeFavoriteTeam } = useStore();

  const { data: rankings, isLoading } = useQuery({
    queryKey: ["rankings"],
    queryFn: async () => {
      // TODO: Replace with actual API call
      const response = await fetch("YOUR_API_ENDPOINT/rankings");
      return response.json();
    },
  });

  const renderTeamItem = ({ item }: { item: Team }) => (
    <View style={styles.teamCard}>
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{item.rank}</Text>
      </View>
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{item.name}</Text>
        <Text style={styles.record}>{item.record}</Text>
        <Text style={styles.conference}>{item.conference}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() =>
          isFavoriteTeam(item.id)
            ? removeFavoriteTeam(item.id)
            : addFavoriteTeam(item.id)
        }
      >
        <Text style={styles.favoriteButtonText}>
          {isFavoriteTeam(item.id) ? "★" : "☆"}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading rankings...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={rankings}
        renderItem={renderTeamItem}
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
  teamCard: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  rankContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#1a1a1a",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  rank: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  record: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  conference: {
    fontSize: 12,
    color: "#999",
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteButtonText: {
    fontSize: 24,
    color: "#ffd700",
  },
});

export default RankingsScreen;
