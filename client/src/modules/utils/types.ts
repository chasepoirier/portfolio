import { SliderState } from 'ducks/slider/types'

type FunctionType = (...args: any[]) => any
interface ActionCreatorsMapObject {
  [actionCreator: string]: FunctionType
}

export type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>

export interface AppState {
  slider: SliderState
}
