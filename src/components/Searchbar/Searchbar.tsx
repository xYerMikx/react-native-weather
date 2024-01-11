import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import { Dispatch, SetStateAction } from "react";
import { View } from "react-native";
interface SearchbarProps {
  setCity: Dispatch<SetStateAction<string>>;
  city: string;
}
export function Searchbar({ setCity, city }: SearchbarProps) {
  return (
    <View className="w-full px-5 flex-row justify-between items-center">
      <Input value={city} className="w-2/4" placeholder="City name.." />
      <Button variant="primary">Find</Button>
    </View>
  );
}
