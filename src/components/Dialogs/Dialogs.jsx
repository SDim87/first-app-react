import React from 'react';
import MessageItem from './MessageItem/MessageItem';
import styles from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogs.map((person) => <DialogItem name={person.name} id={person.id} key={person.id} />);

  let messagesElements = props.dialogsPage.messages.map((messageObj) => <MessageItem textMessage={messageObj.message} key={messageObj.id} />);

  let linkMessage = React.createRef();

  let addMessage = (evt) => {
    evt.preventDefault();
    let text = linkMessage.current.value;
    props.addMessage(text);
    linkMessage.current.value = '';
  }

  let onChangeText = () => {
    let text = linkMessage.current.value;
    props.updateNewMessageChange(text);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dialogs</h1>
      <div className={styles.wrapper}>
        <div className={styles.people}>
          <div className={styles.list}>
            {dialogsElements}
          </div>
        </div>
        <div className={styles.messages}>
          {messagesElements}
          <form action="" method="POST">
            <textarea onChange={onChangeText} ref={linkMessage} placeholder="Add text..." value={props.dialogsPage.newMessageText}></textarea>
            <button onClick={addMessage}>Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;
