import React, { useState, ReactNode } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Alert.css';

type AlertProps = {
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  clickDismissable?: boolean;
  children: ReactNode;
};

const Alert: React.FC<AlertProps> = ({ type, onDismiss, clickDismissable, children }) => {
  const [isDismissed, setIsDismissed] = useState(false);

  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
    setIsDismissed(true);
  };

  const handleClick = () => {
    if (clickDismissable && !isDismissed) {
      handleDismiss();
    }
  };

  return (
    <CSSTransition
      in={!isDismissed}
      timeout={300}
      classNames="alert-transition"
      unmountOnExit
    >
      <div className={`alert alert-${type}`} onClick={handleClick}>
        <div className="alert-message">{children}</div>
        {!clickDismissable && (
          <button className="alert-dismiss" onClick={handleDismiss}>
            X
          </button>
        )}
      </div>
    </CSSTransition>
  );
};

export default Alert;
