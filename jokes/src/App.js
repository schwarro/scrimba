import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Joke from "./Joke"
import jokesData from "./jokesData"

function App() {
  const jokeComponents = jokesData.map((joke) => {
    return (
        <Joke
          key = {joke.id}
          question = {joke.question}
          punchLine = {joke.punchLine}
        />
    )
  })

  return (
    <div>

      {jokeComponents}

    </div>
  );
}

export default App;
