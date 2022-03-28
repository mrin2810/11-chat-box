/* eslint-disable jsx-a11y/accessible-emoji */
import useInterval from '@use-it/interval';
import React, { useState } from 'react';
import './App.css';

const messages = [
  { text: 'How do I get better at React?' },
  { text: 'Just build something!' },
  { text: 'OK! What should I build?' },
  { text: 'Iono. Just Google it?' },
  { text: 'Oh! This course looks cool!' },
  { text: 'Send me the link?!' },
  { text: '20ReactApps.com!' },
];

export default function App() {
  const [messagesToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow(messagesToShow => messagesToShow + 1);
  }, 2000);

  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index === message;
          // logic goes here
          // are we supposed to show this message?
          // are wew supposed to show typing indicator?
          if(messagesToShow + 1 === index) return <TypingIndicator key={index} even={even} />
          if(index > messagesToShow) return <div key={index} />
          return (
            <Message key={index} message={message}/>
          );
        })}
      </div>
    </div>
  );
}

const TypingIndicator = ({ even, odd }) => {
  return (
    <div className={`typing ${even ? 'is-right' : 'is-left'}`}>
      <div className='dots'>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

const Message = ({ message }) => {
  return (
    <div className="message">
      <div className='avatar'>🐸</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>🐙</div>
    </div>
  )
}
