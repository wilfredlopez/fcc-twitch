import React from "react"
import { makeStyles, Theme } from "@material-ui/core/styles"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import { Container } from "@material-ui/core"
import { FiberManualRecordRounded } from "@material-ui/icons"
import Channels from "../components/Channels"
import { useChannelContext } from "../context/channelsContext"
import { CHANNELS } from "../utils/getData"
interface TabPanelProps {
  children?: React.ReactNode
  index: any
  value: any
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  Tabs: {
    margin: "auto",
  },
  container: {
    display: "flex",
  },
  iconsContainer: {
    display: "flex",
  },
}))

export default function Home() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const { isChannelFetched, addChannel } = useChannelContext()
  React.useLayoutEffect(() => {
    CHANNELS.forEach((name) => {
      if (!isChannelFetched(name)) {
        addChannel(name)
      }
    })
    //eslint-disable-next-line
  }, [])

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

  return (
    <Container maxWidth="md">
      <div className={classes.root}>
        <Container className={classes.container} maxWidth="md">
          <Tabs
            className={classes.Tabs}
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              icon={
                <div className={classes.iconsContainer}>
                  <FiberManualRecordRounded
                    style={{
                      color: "green",
                    }}
                  />
                  <FiberManualRecordRounded
                    style={{
                      color: "gray",
                    }}
                  />
                </div>
              }
              label="All"
              {...a11yProps(0)}
            />
            <Tab
              icon={
                <FiberManualRecordRounded
                  style={{
                    color: "green",
                  }}
                />
              }
              label="Online"
              {...a11yProps(1)}
            />
            <Tab
              icon={
                <FiberManualRecordRounded
                  style={{
                    color: "gray",
                  }}
                />
              }
              label="Offline"
              {...a11yProps(2)}
            />
          </Tabs>
        </Container>
        <TabPanel value={value} index={0}>
          <Channels online={true} offline={true}></Channels>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Channels online={true} offline={false}></Channels>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Channels online={false} offline={true}></Channels>
        </TabPanel>
      </div>
    </Container>
  )
}
