import ReactDOM from 'react-dom';
import React from 'react';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import App from './App';
import { addPost, updateNewPostChange, addMessage, updateNewMessageChange, subscribe } from './redux/state';

let renderAll = () => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostChange={updateNewPostChange}
      addMessage={addMessage}
      updateNewMessageChange={updateNewMessageChange} />,
    document.getElementById('root'));
}
renderAll(state);
subscribe(renderAll);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
