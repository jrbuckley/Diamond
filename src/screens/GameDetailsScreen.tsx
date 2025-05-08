import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { useStore } from "../store";
import { useQuery } from "@tanstack/react-query";

type GameDetailsRouteProp = RouteProp<RootStackParamList, "GameDetails">;

const GameDetailsScreen = () => {
  const route = useRoute<GameDetailsRouteProp>();
  const { gameId } = route.params;
  const { games } = useStore();

  const game = games.find((g) => g.id === gameId);

  const { data: gameDetails, isLoading } = useQuery({
    queryKey: ["gameDetails", gameId],
    queryFn: async () => {
      // TODO: Replace with actual API call
      const response = await fetch(`YOUR_API_ENDPOINT/games/${gameId}`);
      return response.json();
    },
  });

  if (isLoading || !game) {
    return (
      <View style={styles.container}>
        <Text>Loading game details...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{game.homeTeam}</Text>
          <Text style={styles.score}>{game.homeScore}</Text>
        </View>
        <View style={styles.vsContainer}>
          <Text style={styles.vs}>VS</Text>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>{game.awayTeam}</Text>
          <Text style={styles.score}>{game.awayScore}</Text>
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Game Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Status:</Text>
          <Text style={styles.infoValue}>{game.status}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Conference:</Text>
          <Text style={styles.infoValue}>{game.conference}</Text>
        </View>
      </View>

      {gameDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.sectionTitle}>Game Stats</Text>
          {/* Add game statistics here */}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "white",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  teamContainer: {
    flex: 1,
    alignItems: "center",
  },
  teamName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
  },
  vsContainer: {
    paddingHorizontal: 20,
  },
  vs: {
    fontSize: 16,
    color: "#666",
  },
  detailsContainer: {
    backgroundColor: "white",
    marginTop: 16,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  infoLabel: {
    fontSize: 16,
    color: "#666",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default GameDetailsScreen;
