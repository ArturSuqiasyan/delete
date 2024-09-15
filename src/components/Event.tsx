import { IEvent } from "../lib/Types"

interface IProps {
    event: IEvent,
    onDelete: (id: string) => void;
}

export const Event:React.FC<IProps> = ({ event, onDelete }) => {
   
    
    return <div>
        <img src={event.cover} alt="" />
        <p>{event.title}</p>
        <p>{event.date} at {event.time}</p>
        <strong>{event.type}</strong>
        <p>By {event.composer}</p>
        <button onClick={() => onDelete(event.id)}>Delete</button>
    </div>
}