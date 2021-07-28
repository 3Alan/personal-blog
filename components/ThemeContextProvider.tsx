import { FC, createContext, useReducer } from 'react';

export type ThemeContent = {
  theme: 'light' | 'dark';
  dispatch: any;
};

export const ThemeContext = createContext<ThemeContent>({ theme: 'light', dispatch: null });

// reducer
export const UPDATE_THEME = 'UPDATE_THEME';
const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.value;
    default:
      return state;
  }
};

export const ThemeContextProvider: FC = ({ children }) => {
  const [theme, dispatch] = useReducer(reducer, 'light');
  return <ThemeContext.Provider value={{ theme, dispatch }}>{children}</ThemeContext.Provider>;
};
