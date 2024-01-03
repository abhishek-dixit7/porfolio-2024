import { createContext, useContext } from "react";

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => {}
});

export default function useTheme(){ 
    return useContext(ThemeContext);
}

export const StyleProvider = ThemeContext.Provider;