import React, { useState } from 'react';
import './App.css';
import Modal from './ui/Modal/Modal';
import ShowAlertBtn from './ui/Button/ShowAlertBtn';
import Alert from './ui/Alert/Alert';

const App: React.FC = () => {
  const [showAlertW, setShowAlertW] = useState(false);

  const closeModal = () => {
    setShowAlertW(false);
  };

  const continueHandler = () => {
    alert('You pressed Continue');
  };

  const modalShow = () => {
    setShowAlertW(true);
  };

  const closeAlert = () => {
    console.log('Alert dismissed');
  };

  return (
    <div className="App">
      {!showAlertW && <ShowAlertBtn show={showAlertW} onClickBtn={modalShow} />}
      <Modal
        show={showAlertW}
        close={closeModal}
        title="Some kinda modal title"
        text="This is modal content"
        config={[
          { type: 'Success', label: 'Continue', clicked: continueHandler },
          { type: 'Danger', label: 'Close', clicked: closeModal }
        ]}
      />
       <Alert type="warning" onDismiss={closeAlert}>
        This is a warning type alert
      </Alert>
      <Alert type="success">This is a success type alert</Alert>
    </div>
  );
};

export default App;
