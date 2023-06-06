import {
  createContext,
} from 'react';

// Local Imports
import { Paths } from './Components/Routes';
import { useFetch } from './Components/useFetch';

export const ApplicationContext = createContext();

const client_id = process.env.REACT_APP_SEAT_GEEK_CLIENT_ID;
const app_key = process.env.REACT_APP_SEAT_GEEK_KEY;

const venues_url = `https://api.seatgeek.com/2/venues?client_id=${client_id}&client_secret=${app_key}`
const performers_url = `https://api.seatgeek.com/2/performers?client_id=${client_id}&client_secret=${app_key}`
const events_url = `https://api.seatgeek.com/2/events?client_id=${client_id}&client_secret=${app_key}`

function App() {
  const { events } = useFetch(events_url);
  const { perfomers } = useFetch(performers_url);
  const { venues } = useFetch(venues_url);

  return (
    <div
      className
      ="App text-2xl font-main text-gray-800 min-h-screen leading-loose bg-blend-darken
      tracking-tighter bg-gradient-to-b from-sky-100 via-sky-300 to-blue-400
      absolute w-screen items-center flex flex-col space-y-4 gap-4 will-change-scroll">
      <ApplicationContext.Provider
        value={{ venues, events, perfomers, client_id, app_key }}>
        <Paths />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
