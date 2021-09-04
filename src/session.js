import axios from "axios";
import { Link } from "react-router-dom";

export default function Session({day}){

    return (
        <div className='session'>
            <p>{`${day.weekday} - ${day.date}`}</p>
            <div className='buttons-list'>
                {day.showtimes.map((session) => (
                    <Button session={session} key={session.id}/>
                ))}
                
            </div>
        </div>
    );
}

function Button({session}){

    return(
        <Link to={`/seats/${session.id}`} >
            <button>{`${session.name}`}</button>
        </Link>
        
    );
}