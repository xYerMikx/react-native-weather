import { Searchbar } from "@/components/Searchbar/Searchbar";
import { Weather } from "@/entities/weather/Weather";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";

export function Home() {
  const [city, setCity] = useState("");
  return (
    <View className="flex mx-auto flex-col items-center">
      <Searchbar city={city} setCity={setCity} />
      <Weather city={city} />
      <StatusBar style="auto" />
    </View>
  );
}
