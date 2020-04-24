import AppBar from "@material-ui/core/AppBar"
import { makeStyles } from "@material-ui/core/styles"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import React from "react"
import { WlButton } from "@wilfredlopez/react"
// import Button from "@material-ui/core/Button"
// import IconButton from "@material-ui/core/IconButton"
// import MenuIcon from "@material-ui/icons/Menu"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}))

interface Props {}

const AppHeader = (_: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography component="h1" variant="h6" className={classes.title}>
            TWITCH STREAMERS
          </Typography>

          <WlButton
            variant="outline"
            color="dark"
            onClick={() => {
              const anchor = document.createElement("a")
              anchor.href = "https://www.npmjs.com/package/@wilfredlopez/react"
              anchor.target = "_blank"
              anchor.rel = "noreferrer noopener"
              anchor.click()
            }}
          >
            @Wilfredlopez/react
          </WlButton>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AppHeader
