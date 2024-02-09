import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {Input} from "./components/Input";

function App() {
  return (
      <main className={'main'}>
          <Header />
          <Input />
      </main>
  );
}

export default App;
