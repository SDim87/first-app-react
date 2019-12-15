import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Sidebar from './components/Sidebar/Sidebar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';

function App(props) {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="container__wrap">
          <Header />
          <Sidebar />
          <div className="container__content">
            <Route path="/profile" render={() =>
              <Profile
                profilePage={props.state.profilePage}
                addPost={props.addPost}
                updateNewPostChange={props.updateNewPostChange}
              />} />
            <Route path="/dialogs" render={() =>
              <Dialogs
                dialogsPage={props.state.dialogsPage}
                addMessage={props.addMessage}
                updateNewMessageChange = {props.updateNewMessageChange} />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
