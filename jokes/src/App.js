import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Joke from "./Joke"

function App() {
  return (
    <div>
      <Joke
        joke={{
          question: "What did the Buddhist ask the hot dog vendor?",
          punchLine: "Make me one with everything."
        }}
      />

      <Joke
        joke={{
          question: "You know why you never see elephants hiding up in trees?",
          punchLine: "Because they’re really good at it."
        }}
      />

      <Joke
        joke={{
          question: "What is red and smells like blue paint?",
          punchLine: "Red paint"
        }}
      />

      <Joke
        joke={{
          question: "Where does the General keep his armies?",
          punchLine: "In his sleevies!"
        }}
      />

      <Joke
        joke={{
          question: "Why aren’t koalas actual bears?",
          punchLine: "The don’t meet the koalafications."
        }}
      />
    </div>
  );
}

export default App;
