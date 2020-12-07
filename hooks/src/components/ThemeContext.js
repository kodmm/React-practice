import React, { createContext, useContext } from 'react';
const themes = {
    light: {
        foreground: "blue",
        background: "red"
    },
    dark: {
        foreground: "red",
        background: "blue"
    }
};

const ThemeContext = createContext(themes.light);

function App() {
    return(
        <ThemeContext.Provider value={themes.dark} >
            <Toolbar />
        </ThemeContext.Provider>
    );
}


function Toolbar(props) {
    return(
        <div>
            <ThemeButton />
        </div>
    );
}

function ThemeButton() {
    const theme = useContext(ThemeContext);
    return(
        <button style={ {background: theme.background, color: theme.foregound} } >
            I am styled by theme context;
        </button>
    );
}

export default App