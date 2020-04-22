import React from "react"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Routes from "./Routes"
import { theme } from "./theme/theme"
import { ChannelContextProvider } from "./context/channelsContext"

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")

  const preferedTheme = React.useMemo(
    () =>
      createMuiTheme({
        ...theme,
        palette: {
          ...theme.palette,
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  )

  return (
    <ThemeProvider theme={preferedTheme}>
      <ChannelContextProvider>
        <Routes />
      </ChannelContextProvider>
    </ThemeProvider>
  )
}

export default App
