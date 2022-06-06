import React from 'react'
import "./App.css"
import Navbar from "./components/react/Navbar"
// import Alerts from "./components/react/Alerts"
// import Modals from "./components/react/Modals/Modals"
// import Tooltip from "./components/react/Tool-pop/Tooltip&Popover"
// import Avatar from "./components/react/Avatars"
import Badges from "./components/react/Badges"
// import Buttonsection from "./components/react/buttonsection/ButtonSection"
import { Grid } from '@mui/material'


function App() {
  return (
    <div>
      <Navbar style={{ marginTop: "0px" }} width="100%" />
      <Grid pl="12%" pr="12%">
        {/* <Alerts /> */}
        {/* <Modals /> */}
        {/* <Tooltip /> */}
        {/* <Avatar /> */}
        <Badges />
        {/* <Buttonsection /> */}

      </Grid>
    </div>
  )
}

export default App