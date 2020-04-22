export const CHANNELS = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
]

//https://api.twitch.tv/helix/streams
// const ENDPOINT = "https://wind-bow.glitch.me/helix"
const ENDPOINT = "https://wind-bow.glitch.me/twitch-api"

export interface ChannelResponse {
  mature: boolean | null
  status: string | null

  broadcaster_language: string | null
  display_name: string
  game: string | null
  language: string
  _id: number
  name: string
  created_at: string
  updated_at: string
  delay?: number | null
  logo: string
  banner?: unknown | null
  video_banner: string | null
  background?: unknown
  /**
   * profile_banner is a png image
   */
  profile_banner: string | null
  profile_banner_background_color?: string | null
  partner: boolean
  url: string
  views: number
  followers: number
  _links: {
    self: string
    follows: string
    commercial: string
    stream_key: string
    chat: string
    subscriptions: string
    editors: string
    teams: string
    videos: string
  }
}

export function getChannelData(channel: string) {
  const URL = `${ENDPOINT}/channels/${channel}`

  return fetch(URL)
    .then<ChannelResponse>((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((e) => {
      console.log(e)
      return null
    })
}

interface StreamData {
  _id: number
  game: string
  viewers: number
  created_at: string
  video_height: number
  average_fps: number
  delay: number
  is_playlist: boolean
  _links: {
    self: string
  }
  preview: {
    small: string
    medium: string
    large: string
    template: string
  }
  channel: {
    mature: boolean
    status: string
    broadcaster_language: string
    display_name: string
    game: string
    language: string
    _id: number
    name: string
    created_at: string
    updated_at: string
    delay?: number
    logo: string
    banner?: string
    video_banner: string
    background?: string
    profile_banner: string
    profile_banner_background_color: string
    partner: boolean
    url: string
    views: number
    followers: number
    _links: {
      self: string
      follows: string
      commercial: string
      stream_key: string
      chat: string
      subscriptions: string
      editors: string
      teams: string
      videos: string
    }
  }
}
interface SteamResponse {
  stream: StreamData | null
  _links: {
    self: string
    channel: string
  }
}

export function getSteamData(user: string) {
  const URL = `${ENDPOINT}/streams/${user}`

  return fetch(URL)
    .then<SteamResponse>((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((e) => {
      console.log(e)
      return null
    })
}

interface UsersResponse {
  display_name: string
  _id: number
  name: string
  type: string
  bio: string
  created_at: string
  updated_at: string
  logo: string
  _links: {
    self: string
  }
}

export function getUsersData(user: string) {
  const URL = `${ENDPOINT}/users/${user}`

  return fetch(URL)
    .then<UsersResponse>((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((e) => {
      console.log(e)
      return null
    })
}
