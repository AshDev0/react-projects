import { createContext, useContext } from "react";

// context create kar lia hai
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

//Context Provider Export Kar Lia hai Wrap karne k liye
export const ThemeProvider = ThemeContext.Provider

//Custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
}
