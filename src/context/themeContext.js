import * as React from 'react';

const themeContext = React.createContext();
function themeReducer(state, action) {
  switch (action.type) {
    case 'toggle': {
      return { selectedTheme: state.selectedTheme === 'dark' ? 'light' : 'dark' };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = React.useReducer(themeReducer, { selectedTheme: 'dark' });
  const value = { state, dispatch };
  return <themeContext.Provider value={value}>{children}</themeContext.Provider>;
}
function useTheme() {
  const context = React.useContext(themeContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}
export { ThemeProvider, useTheme };
