import React, { useState } from "react"
import {
  Paper,
  makeStyles,
  Card,
  CardHeader,
  Typography,
  CardContent,
  CardMedia,
} from "@material-ui/core"
import { ChannelResponse } from "../utils/getData"
import { ChannelStatus, useChannelContext } from "../context/channelsContext"
import { FiberManualRecordRounded } from "@material-ui/icons"

interface Props {
  name: string
  showAll: boolean
  onlyShow?: ChannelStatus
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 12,
  },
  gridContainer: {
    padding: 12,
  },
  Offline: {
    color: "gray",
  },
  Online: {
    color: "green",
    fontWeight: "bold",
  },
  status: {
    display: "flex",
    marginLeft: 10,
    position: "relative",
  },
  dot: {
    content: "'◦'",
    left: 8,
    display: "list-item",
    position: "absolute",
  },
  media: {
    height: 0,
    paddingTop: "20%",
    // backgroundPosition: "right",
    // backgroundSize: "contain",
    // backgroundSize: "cover",
    background: "center",
    // paddingTop: "56.25%", // 16:9
  },
  cardContent: { paddingBottom: 0, paddingTop: 0 },
}))

const Channel = (props: Props) => {
  const [status, setStatus] = useState<ChannelStatus>("Offline")
  const [data, setData] = useState<ChannelResponse>()
  const { getChannel } = useChannelContext()

  React.useLayoutEffect(() => {
    const channel = getChannel(props.name)
    if (channel !== null && channel.data !== null) {
      setData(channel.data)
      setStatus(channel.status)
    }
  }, [props.name, getChannel])

  if (props.showAll) {
    return <ChannelData data={data} status={status} name={props.name} />
  }

  if (status === props.onlyShow) {
    return <ChannelData data={data} status={status} name={props.name} />
  } else {
    return null
  }
}

export default React.memo(Channel)

interface ChannelDataProps {
  status: ChannelStatus
  name: string
  data: ChannelResponse | undefined
}
const ChannelData = ({ status, name, data }: ChannelDataProps) => {
  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Card>
        <CardHeader
          title={name}
          avatar={
            <FiberManualRecordRounded
              style={{
                color: status === "Offline" ? "gray" : "green",
              }}
            />
          }
        ></CardHeader>

        {data && data.status && (
          <CardContent className={classes.cardContent}>
            <Typography
              component="a"
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>{data?.status}</p>
            </Typography>
          </CardContent>
        )}
        {data && data.logo && (
          <CardMedia
            className={classes.media}
            image={data.logo}
            title={data.name}
          />
        )}
      </Card>
    </Paper>
  )
}
