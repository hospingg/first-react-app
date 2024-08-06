import React from 'react';
import ReactDOM from 'react-dom/client';
// import Lamp from './components/Lamp';
// import Dialog from './components/Dialog';
// import ParentSquare from './components/ParentSquare';
import Todo from './components/Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Lamp></Lamp> */}
    {/* <Dialog name='Lika'></Dialog> */}
    {/* <ParentSquare></ParentSquare> */}
    <Todo></Todo>
  </React.StrictMode>
);

