import { InitialState } from "../lib/initialState";
import { EventList } from "./EventList";
import { Filter } from "./Filter";
import { useContext, useReducer } from "react";
import { reducer } from "../lib/reducer";
import { Context } from "../lib/Context";

export const Theather = () => {
    const [state, dispatch] = useReducer (reducer, InitialState);
  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        <Filter />
        <EventList />
      </Context.Provider>
    </div>
  );
};
