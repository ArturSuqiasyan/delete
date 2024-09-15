import { Dispatch } from "react";

export interface IEvent {
  id: string | number;
  title: string;
  date: string;
  time: string;
  type: string;
  composer: string;
  cover: string;
}

export interface IState {
  events: IEvent[];
  currentFilter: FilterTypes;
}

export interface IContextType {
  state: IState;
  dispatch: Dispatch<Action>;
}

export interface Action {
  type: ActionTypes;
  payload?: unknown;
}

export enum ActionTypes {
  Add_Event,
  Remove_Event,
  Update_Event,
  Set_Events,
  Set_Filter,
  Delete_Event,
}

export enum FilterTypes {
    All = "all",
    Opera = "opera",
    Ballet = "ballet",
}