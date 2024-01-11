import { useState } from "react";
import { Keyboard, TextInput, TouchableWithoutFeedback } from "react-native";

interface InputProps {
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: () => void;
}

export function Input({
  placeholder,
  className,
  value,
  onChange,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <TextInput
        className={`border ${
          isFocused ? "border-slate-500" : "border-gray-300"
        } px-4 py-2 rounded-xl ${className}`}
        placeholder={placeholder}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        value={value}
        {...props}
      />
    </TouchableWithoutFeedback>
  );
}
