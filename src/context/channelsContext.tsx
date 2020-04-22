import React, { PropsWithChildren, useState } from "react"
import { ChannelResponse, getChannelData } from "../utils/getData"
// import { TEST_DATA } from "./TestData"

export type ChannelStatus = "Offline" | "Online"
export interface Chanel {
  name: string
  status: ChannelStatus
  data: ChannelResponse | null
}

interface ChannelContextInterface {
  channels: Chanel[]
  addChannel: (name: string) => void
}

const initialContext: ChannelContextInterface = {
  channels: [],
  addChannel: () => {},
}

const ChannelsContext = React.createContext<ChannelContextInterface>(
  initialContext,
)

const ChannelContextProvider = (props: PropsWithChildren<{}>) => {
  //   const [channels, setChannels] = useState<Chanel[]>(TEST_DATA)
  const [channels, setChannels] = useState<Chanel[]>([])

  const channelData = React.useMemo(() => {
    return channels
  }, [channels])

  function addChannel(name: string) {
    getChannelData(name).then((d) => {
      if (d !== null && d.status) {
        setChannels((currentState) => [
          ...currentState,
          {
            name: name,
            data: d,
            status: "Online",
          },
        ])
      } else {
        setChannels((currentState) => [
          ...currentState,
          {
            name: name,
            data: d,
            status: "Offline",
          },
        ])
      }
    })
  }

  return (
    <ChannelsContext.Provider value={{ channels: channelData, addChannel }}>
      {props.children}
    </ChannelsContext.Provider>
  )
}

const useChannelContext = () => {
  const chanelContext = React.useContext(ChannelsContext)

  const isChannelFetched = React.useCallback(
    (name: string) => {
      const index = chanelContext.channels.findIndex(
        (chann) => chann.name === name,
      )

      if (index === -1) {
        return false
      } else {
        return true
      }
    },
    [chanelContext.channels],
  )

  const getChannel = React.useCallback(
    (name: string) => {
      const index = chanelContext.channels.findIndex(
        (chann) => chann.name === name,
      )

      if (index === -1) {
        return null
      } else {
        const channel = chanelContext.channels[index]
        return channel
      }
    },
    [chanelContext.channels],
  )

  return { ...chanelContext, isChannelFetched, getChannel }
}

export { ChannelContextProvider, ChannelsContext, useChannelContext }
