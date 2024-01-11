import { ButtonVariants } from "@/types";

export const getButtonStyle = (
  variant: ButtonVariants | undefined,
  isPressed: boolean
) => {
  switch (variant) {
    case "primary":
      return isPressed
        ? "bg-slate-600 px-8 py-2 flex rounded-xl opacity-50"
        : "bg-slate-600 px-8 py-2 flex rounded-xl";
    case "secondary":
      return isPressed
        ? "bg-green-500 px-8 py-2 flex rounded-xl opacity-50"
        : "bg-green-500 px-8 py-2 flex rounded-xl";
    case "hollow":
      return isPressed
        ? "border border-black px-8 py-2 flex rounded-xl opacity-50"
        : "border border-black px-8 py-2 flex rounded-xl";
    default:
      return isPressed
        ? "bg-slate-600 px-8 py-2 flex rounded-xl opacity-50"
        : "bg-slate-600 px-8 py-2 flex rounded-xl";
  }
};
