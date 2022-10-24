import * as React from 'react';

const themeContext = React.createContext('dark');

// eslint-disable-next-line react/prop-types
function ChangeThemeProvider({ children }) {
  const [selectedTheme, setTheme] = React.useState('dark');
  const changeTheme = () => {
    selectedTheme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  const value = { selectedTheme, changeTheme };
  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
}
function useTheme() {
  const context = React.useContext(themeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ChangeThemeProvider');
  }
  return context;
}
export { ChangeThemeProvider, useTheme };
