import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
//import Parent from './components/practiceChildParentComponent';


function App() {
  return (
    <div>
          <BrowserRouter>
            <div className="App">
              <Main />
            </div>
          </BrowserRouter>
    </div>
  );
}

export default App;
