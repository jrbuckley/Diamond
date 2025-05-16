import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-2xl font-bold text-blue-600 dark:text-blue-300">Welcome to Diamond!</Text>
      <Text className="mt-2 text-base text-gray-700 dark:text-gray-300">College baseball score tracking app</Text>
    </View>
  );
} 