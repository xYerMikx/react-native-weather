import { Drop } from "@/icons/Drop";
import { Wind } from "@/icons/Wind";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "react-native";
import { WeatherIcon } from "../WeatherIcon/WeatherIcon";

interface WeatherCardProps {
  degrees: number;
  city: string;
  humidity: number;
  windSpeed: number;
}
export function WeatherCard({
  city,
  degrees,
  humidity,
  windSpeed,
}: WeatherCardProps) {
  return (
    <View className="flex-col gap-4 items-center">
      <LinearGradient
        colors={["#19C3FB", "#1D71F2"]}
        className="py-12 px-10 rounded-2xl mr-20"
      >
        <View className="flex flex-col gap-2 text-center items-center">
          <Text className="text-slate-200 text-2xl">
            {degrees.toFixed(2)} °C
          </Text>
          <Text className="font-bold text-4xl text-slate-50 tracking-wide">
            {city}
          </Text>
        </View>
        <View className="flex-row mt-20">
          <WeatherIcon
            IconComponent={Drop}
            text="humidity"
            value={`${humidity} %`}
          />
          <WeatherIcon
            IconComponent={Wind}
            text="Wind Speed"
            value={`${windSpeed} km/h`}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
