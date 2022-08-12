import React from 'react';
import ReactDOM from 'react-dom/client';
//import CallBackHook from './components/06-memos/CallBackHook';
import { Padre } from './components/07-tarea-memo/Padre';
//import MemoHook from './components/06-memos/MemoHook';
//import FormWhitCustomHook from './components/02-useEffect/FormWhitCustomHook';
//import MultipleCustomHooks from './components/03-examples/MultipleCustomHooks';
//import FocusScreen from './components/useRef/FocusScreen';
// import RealExampleRef from './components/04-useRef/RealExampleRef';
//import Layout from './components/05-uselayoutEffect/Layout';
//import Memorize from './components/06-memos/Memorize';
//import CounterApp from './components/01-useState/CounterApp';
//import CounterWithCustomHook from './components/01-useState/CounterWithCustomHook';
//import SimpleForm from './components/02-useEffect/SimpleForm';
// import HookApp from './HookApp';
import TodoApp from './components/08-useReducer/TodoApp';
import './libs/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);


