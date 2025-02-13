import { useState } from "react";
import { createContext } from "react";

const DarkModeContext = createContext()

const DarkModeContextProvider = (props) => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext
export default DarkModeContextProvider