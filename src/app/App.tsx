import React, { StrictMode, useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Components from './routes/Components';
import GlobalStyle from '../design-library/styles/GlobalStyle';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import { RootLayout } from './components/RootLayout/RootLayout';
import { ThemeContext } from './hooks/use-theme-context';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../design-library/styles/Theme';

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: 'components',
        element: <Components />
      }
    ]
  }
]);

const App: React.FC = () => {
  const [theme, setTheme] = useState(defaultTheme);

  const contextValue: ThemeContext = useMemo(
    () => ({
      changeTheme: (theme) => setTheme(theme),
      theme
    }),
    [theme]
  );

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <ThemeContext.Provider value={contextValue}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </ThemeContext.Provider>
      </ThemeProvider>
    </StrictMode>
  );
};

export default App;
