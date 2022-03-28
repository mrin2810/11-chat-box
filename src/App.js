/* eslint-disable jsx-a11y/accessible-emoji */
import useInterval from '@use-it/interval';
import React, { useState } from 'react';
import { motion } from "framer-motion"

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
          const even = index % 2 === 0;
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

const TypingIndicator = ({ even }) => {
  return (
    <motion.div 
      className={`typing ${even ? 'is-left' : 'is-right'}`}
      initial={{ scale: .2, rotate: -10 }} 
      animate={{ scale: 1, rotate: 0 }} 
      transition={{ duration: .1 }}
    >
      <div className='dots'>
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  )
}

const Message = ({ message }) => {
  return (
    <motion.div 
      className="message" 
      initial={{ scale: .2, rotate: -10 }} 
      animate={{ scale: 1, rotate: 0 }} 
      transition={{ duration: .1 }}
    >
      <div className='avatar'>🐸</div>
      <div className='text'>{message.text}</div>
      <div className='avatar'>🐙</div>
    </motion.div>
  )
}
