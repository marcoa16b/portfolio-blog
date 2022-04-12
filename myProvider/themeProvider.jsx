import * as React from 'react';

export const ThemeContext = React.createContext();

function ThemeProvider(props){

  //let styles = StyleSheet;
  const [theme, setTheme] = React.useState('Dark');
  const [themeClass, setThemeClass] = React.useState('styles.Dark');

  const ToggleTheme = () => {
    if(theme === 'Dark'){
      setTheme('Light')
      setThemeClass('styles.Light')
    }
    else {
      setTheme('Dark')
      setThemeClass('styles.Dark')
    }
    console.log(theme)
    //theme = 'dark' ? setTheme('light') : setTheme('dark');
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      ToggleTheme,
      themeClass,
    }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;