import './App.css';
import { createContext } from 'react';
// import A from './components/A'
import Getgobal from './components/GlobalData'

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Abdullah"}>
        <LastName.Provider value={"Khan"}>
          <Getgobal />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;

export { FirstName, LastName }