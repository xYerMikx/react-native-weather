import { Button } from "@/ui/Button/Button";
import { Input } from "@/ui/Input/Input";
import {
  ChangeEvent,
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useState,
} from "react";
import { View } from "react-native";
interface SearchbarProps {
  setWeatherCity: Dispatch<SetStateAction<string>>;
}
export function Searchbar({ setWeatherCity }: SearchbarProps) {
  const [cityValue, setCityValue] = useState("");
  const changeInputValue = () => {
    setWeatherCity(cityValue.trim());
    setCityValue("");
  };
  return (
    <View className="w-full px-5 flex-row justify-between items-center">
      <Input
        value={cityValue}
        onChangeText={setCityValue}
        className="w-2/4"
        placeholder="City name.."
      />
      <Button onPress={changeInputValue} variant="primary">
        Find
      </Button>
    </View>
  );
}
