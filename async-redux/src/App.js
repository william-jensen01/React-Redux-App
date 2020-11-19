import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import Search from './components/Search';
import TronaldDump from './components/TronaldDump';
import thunk from 'redux-thunk';
import './App.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="app-header">
          <img src="https://www.tronalddump.io/img/tronalddump_850x850.png" alt="Tronald Dump img" className="tronald_dump_img"/>
          <h1>Tronald Dump</h1>
        </div>
        <h2>The dumbest things Donald Trump has ever said</h2>
        <Search />
        <TronaldDump />
      </div>
    </Provider>
  );
}

export default App;