import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './component/Character';
import { CraftEquipment } from './CraftEquipment';
import { ItemStorage } from './ItemStorage';
import StatusBox from './component/status/Status';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        RO Dmg Calculator
      </header>
      <body className='App-body container'>
        <div className='row'>
          <div className='col-md-4'>
            <button>Save</button>
            <button>Load</button>
            <Character />
            <StatusBox />
          </div>
          <div className='col-md-4'>
          </div>
          <div className='col-md-4'>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
