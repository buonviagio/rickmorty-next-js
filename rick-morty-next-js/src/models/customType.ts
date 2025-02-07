export interface ApiResponse {
  info: Info
  results: Character[]
}

export interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
  created: string
}

export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface Episode {
  name: string
  id: string
  characters: Character[]
}



//-----
export interface Root {
  data: Data
}

export interface Data {
  episodes: Episodes
}

export interface Episodes {
  results: Result[]
}

export interface Result {
  name: string
  id: string
  characters: Character[]
}
