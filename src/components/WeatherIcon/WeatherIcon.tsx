import { View } from "react-native";
import { WeatherText } from "../WeatherText/WeatherText";

interface WeatherIconProps {
  text: string;
  value: string;
  IconComponent: () => JSX.Element;
}

export function WeatherIcon({ IconComponent, text, value }: WeatherIconProps) {
  return (
    <View className="flex-row">
      <IconComponent />
      <View className="ml-2">
        <WeatherText className="text-slate-100">{value}</WeatherText>
        <WeatherText className="text-slate-100">{text}</WeatherText>
      </View>
    </View>
  );
}
