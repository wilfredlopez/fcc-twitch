import React from "react"
import Home from "./pages/Home"
import AppHeader from "./components/AppHeader"

interface Props {}

const Routes = (props: Props) => {
  return (
    <div>
      <AppHeader />
      <Home />
    </div>
  )
}

export default Routes
