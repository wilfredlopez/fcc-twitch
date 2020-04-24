import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import React from "react"
import { ChannelContextProvider } from "./context/channelsContext"
import Routes from "./Routes"
import { theme } from "./theme/theme"

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

  // const button: any = (<wl-button>HELLO</wl-button>) as any

  return (
    <ThemeProvider theme={preferedTheme}>
      <ChannelContextProvider>
        <Routes />
      </ChannelContextProvider>
    </ThemeProvider>
  )
}

export default App
