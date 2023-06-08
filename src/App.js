import {
  createContext,
} from 'react';

// Local Imports
import { Paths } from './Components/Routes';
import { useFetch } from './Components/useFetch';
import { Navigation } from './Components/Navigation';

export const ApplicationContext = createContext();

const client_id = process.env.REACT_APP_SEAT_GEEK_CLIENT_ID;
const app_key = process.env.REACT_APP_SEAT_GEEK_KEY;

const venues_url = `https://api.seatgeek.com/2/venues?client_id=${client_id}&client_secret=${app_key}`
const performers_url = `https://api.seatgeek.com/2/performers?client_id=${client_id}&client_secret=${app_key}`
const events_url = `https://api.seatgeek.com/2/events?client_id=${client_id}&client_secret=${app_key}`

export const Loading = () => {
  return (
    <div className='text-center font-headings text-8xl h-screen'>
      <h1> Loading Data ...</h1>
    </div>
  )
}


function App() {
  const { stateItem: venues, loading } = useFetch(venues_url);
  const { stateItem: events } = useFetch(events_url);
  const { stateItem: performers } = useFetch(performers_url);

  return (
      <div
        className
        ="App text-2xl font-text text-gray-700 min-h-screen leading-loose bg-blend-darken
        tracking-tighter bg-gradient-to-br from-purple-100 from-20% via-purple-200 via-50% to-indigo-300 to-90%
        absolute w-screen items-center">
        <ApplicationContext.Provider
          value={{ venues, events, performers, client_id, app_key }}>
            {
              loading ?
              <Loading /> :
              <div>
                <Navigation />
                <Paths />
              </div>
            }
        </ApplicationContext.Provider>
      </div>
  );
}

export default App;
