import { Searchbar } from "@/components/Searchbar/Searchbar";
import { Weather } from "@/entities/weather/Weather";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";

export function Home() {
  const [weatherCity, setWeatherCity] = useState("London");
  return (
    <View className="flex mx-auto flex-col items-center">
      <Searchbar setWeatherCity={setWeatherCity} />
      <Weather city={weatherCity} />
      <StatusBar style="auto" />
    </View>
  );
}
