
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


function App() {
  return (
    <div className="App w-full h-full bg-zinc-800">
      <p className='text-zinc-400'>hello</p>
      <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
      <ButtonGroup variant="contained" aria-label="Basic button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
}

export default App;
