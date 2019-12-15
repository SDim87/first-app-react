let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: '10' },
      { id: 2, message: 'I\'m fine thanks! And you?', likesCount: '20' }
    ],
    newPostText: ''
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Gendalf'},
      {id: 2, name: 'Malifisenta'},
      {id: 3, name: 'Shrek'},
      {id: 4, name: 'Fiona'},
      {id: 5, name: 'Keks'}
    ],
    messages: [
      {id: 1, message: 'Hi! How do you do?'},
      {id: 2, message: 'I\'m going to street! Are you going with me?'}
    ],
    newMessageText: ''
  },
}

window.state = state;

let updateState = () => {
  console.log('State update');
}

export let subscribe = (observer) => {
  updateState = observer;
}

// functions changes posts
export const addPost = () => {
  let post = {
    id: 3,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(post);
  updateState();
  state.profilePage.newPostText = '';
}

export const updateNewPostChange = (newText) => {
  state.profilePage.newPostText = newText;
  updateState();
}

/**
 * @function добавляет Сообщение
 * @param {string} text - текст сообщения
 */
export const addMessage = (text) => {
  let message = {
    id: 3,
    message: text,
  };
  state.dialogsPage.messages.push(message);
  updateState();
  state.dialogsPage.newMessageText = '';
}

export const updateNewMessageChange = (newText) => {
  state.dialogsPage.newMessageText = newText;
  updateState();
}


export default state;
