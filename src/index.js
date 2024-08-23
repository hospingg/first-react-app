import React from 'react';
import ReactDOM from 'react-dom/client';
// import Lamp from './components/Lamp';
// import Dialog from './components/Dialog';
// import ParentSquare from './components/ParentSquare';
// import Todo from './components/Todo';
import UserPage from './components/UserPage'
import LogInForm from './components/LogInForm';
import Calendar from './components/Calendar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Lamp></Lamp> */}
    {/* <Dialog name='Lika'></Dialog> */}
    {/* <ParentSquare></ParentSquare> */}
    {/* <Todo></Todo> */}
    {/* <UserPage></UserPage> */}
    {/* <LogInForm/> */}
    <Calendar/>

  </React.StrictMode>
);

