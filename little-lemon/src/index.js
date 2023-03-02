import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './Home';

export default function Index () {
  return(
  <React.StrictMode>
    <ChakraProvider>
    <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
      <Home />
    </ChakraProvider>
  </React.StrictMode>
)};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals(console.log);

reportWebVitals(console.log);

const root = ReactDOM.createRoot(document.getElementById('root')/*.addEventListener('click', function(event){event.preventDefault()})*/);
root.render(<Index />);