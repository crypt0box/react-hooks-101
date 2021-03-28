import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import EventForm from './EventForm';
import Events from './Events';
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';

const App = () => {
  const [state, dispach] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'Hello, I am a Provider.'}>
      <div className="container-fluid">
        <EventForm state={state} dispach={dispach}/>
        <Events state={state} dispach={dispach}/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
