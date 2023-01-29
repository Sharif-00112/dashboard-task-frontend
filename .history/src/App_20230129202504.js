import './App.css';
import Dashboard from './Components/Dashboard';
import './Components/styles.css'

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faEnvelope} />

function App() {
  return (
    <div className="App">
      {element}
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
