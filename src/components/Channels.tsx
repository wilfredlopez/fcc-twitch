import React from "react"
import Channel from "./Channel"
import { useChannelContext } from "../context/channelsContext"

interface Props {
  online: boolean
  offline: boolean
}

const Channels = (props: Props) => {
  const { channels } = useChannelContext()
  if (props.online && props.offline) {
    return (
      <div>
        {channels.map((channel, index) => {
          return (
            <Channel
              showAll={true}
              name={channel.name}
              key={index + channel.name}
            />
          )
        })}
      </div>
    )
  } else if (props.online) {
    return (
      <div>
        {channels.map((channel, index) => {
          return (
            <Channel
              showAll={false}
              onlyShow="Online"
              name={channel.name}
              key={index + channel.name}
            />
          )
        })}
      </div>
    )
  } else {
    return (
      <div>
        {channels.map((channel, index) => {
          return (
            <Channel
              onlyShow="Offline"
              showAll={false}
              name={channel.name}
              key={index + channel.name}
            />
          )
        })}
      </div>
    )
  }
}

export default React.memo(Channels)
