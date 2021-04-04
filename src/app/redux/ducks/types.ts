export enum ProfileStates {
  idle = 'idle',
  fetching = 'fetching',
  fetched = 'fetched',
}

export enum SelectedStates {
  idle = 'idle',
  contain = 'contain',
}

export enum SearchStates {
  idle = 'idle',
  contain = 'contain',
}

export interface SelectedInterface {
  state: SelectedStates
  allIds: string[]
}

export interface SearchInterface {
  state: SearchStates
  match: string
}

export interface ProfilesInterface<T> {
  state: ProfileStates
  allIds: string[]
  data: { [x: string]: T }
}

export interface UserInterface {
  name: string
  surname: string
  regdate: string
  regage: number
  email: string
  id: string
  picture: string
}

export interface Error {
  message: string
}

export interface UsersApiResponse {
  results: {
    name: {
      first: string,
      last: string
    },
    email: string,
    login: {
      uuid: string
    },
    dob: {
      date: string,
      age: number
    }
    picture: {
      medium: string
    }
  }[]
}
