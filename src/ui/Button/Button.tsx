import { ButtonVariants } from "@/types";
import { getButtonStyle } from "@/utils/getButtonStyles";
import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  variant?: ButtonVariants;
  onPress?: () => void;
  className?: string;
  children: React.ReactNode;
}

export function Button({ variant, className, children, onPress }: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  return (
    <TouchableOpacity
      className={`${getButtonStyle(variant, isPressed)} ${className}`}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Text className="text-white text-center">{children}</Text>
    </TouchableOpacity>
  );
}
