import { ReactNode } from "react";
import { Text } from "react-native";

interface WeatherTextProps {
  children: ReactNode;
  className: string;
}
export function WeatherText({ children, className }: WeatherTextProps) {
  return <Text className={`text-slate-100 ${className}`}>{children}</Text>;
}
