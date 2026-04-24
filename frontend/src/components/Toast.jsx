import './Toast.css';

function Toast({ message, isVisible }) {
  return (
    <div className={`toast ${isVisible ? 'show' : ''}`}>
      <div className="toast-content">
        <span className="toast-icon">✓</span>
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
}

export default Toast;
