import React from 'react';
import "./Button.css";

interface ShowAlertBtnProps {
  show: boolean;
  onClickBtn: () => void;
}

const ShowAlertBtn: React.FC<ShowAlertBtnProps> = ({ show, onClickBtn }) =>
  !show ? (
    <button className="showAlert" onClick={onClickBtn}>
      Show Alert
    </button>
  ) : null;

export default ShowAlertBtn;
