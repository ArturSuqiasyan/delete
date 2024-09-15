import { useContext, useEffect } from "react";
import { Context } from "../lib/Context";
import { getEvents, deleteEvent } from "../lib/Api";
import { ActionTypes } from "../lib/Types";
import { Event } from "./Event";
export const EventList = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("Context is not defined");
  }
  const { state, dispatch } = context;
  useEffect(() => {
    getEvents(state.currentFilter)
    .then((response) => {
      dispatch({ type: ActionTypes.Set_Events, payload: response });
    });
  }, [state.currentFilter]);
  const handleDelete = async (id: string) => {
      await deleteEvent(id);
      const updatedEvents = state.events.filter(event => event.id !== id);
      dispatch({ type: ActionTypes.Set_Events, payload: updatedEvents });
    
  };

  return (
    <div className="list">
      {state.events.map((event) => (
        <Event key={event.id} event={event} onDelete={handleDelete} />
      ))}
    </div>
  );
};
