// @flow
export type People = {
  name: string,
  height?: string,
  mass?: string,
  hair_color?: string
}

export type AppState = {
  people: Array<People>
}
