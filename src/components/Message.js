import '../styles/Message.css';

const Message = (props) => {
  return (
    <div className="message">
      <div className="message-content">
        {props.score === 100 && (
          <p>Congratulations! You completed whole game! Refresh page to get new set of cards.</p>
        )}
        {props.score < 100 && <p>Keep going!</p>}
        <button onClick={() => props.setFinished(false)}>
          {props.score === 100 && 'Close'}
          {props.score < 100 && 'Try again'}
        </button>
      </div>
    </div>
  );
};

export default Message;
