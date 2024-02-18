import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {DatePicker} from "./components/DatePicker";

function App() {

  return (
      <main className={'main'}>
          <Header />
          <DatePicker />
      </main>
  );
}

export default App;
