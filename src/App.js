import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Entete from './Entete';
import Cartat from './Cartat';
import Basdepage from './Basdepage';

function App() {
 
  return (
    <div className="App">
     <div className='ent'><Entete/></div>
       <div className='tata'><Cartat/></div>
      <hr/>
      <Basdepage/>
    </div>
  )
     
}

export default App;
