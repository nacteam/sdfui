import { useContext } from "react";
import { ThemeContext } from "../core/theme";

export const useAppearance = () => {
  return useContext(ThemeContext);
};
