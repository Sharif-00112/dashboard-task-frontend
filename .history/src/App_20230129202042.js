import './App.css';
import Dashboard from './Components/Dashboard';
import './Components/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function App() {
  return (
    <div className="App">

<FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} />

      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
