import {
  useEffect,
  // useState,
  // useCallback,
  // useContext,
  createContext
} from 'react';

// Local Imports
import { Paths } from './Components/Routes';

const ApplicationContext = createContext();

function App() {
  // const client_id = process.env.REACT_APP_SEAT_GEEK_CLIENT_ID;
  // const app_key = process.env.REACT_APP_SEAT_GEEK_KEY;

  useEffect(() => {

  });

  return (
    <div
      className
      ="App text-2xl font-main text-gray-800 min-h-screen leading-loose bg-blend-darken
      tracking-tighter bg-gradient-to-r from-cyan-100 via-violet-200 to-sky-200
      absolute w-screen items-center flex flex-col space-y-4 gap-4 will-change-scroll">
      <ApplicationContext.Provider>
        <Paths />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
