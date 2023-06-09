import React, { Fragment } from 'react';
import BackDrop from "../BackDrop/BackDrop";
import './Modal.css';
import Button from "../Button/Button";

interface ModalProps {
  show: boolean;
  title: string;
  text: string;
  config: { type: string; label: string; clicked: () => void; }[];
  close: () => void; // Добавлен пропс close
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <Fragment>
      <BackDrop onClick={props.close} show={props.show} />
      <div
        className="Modal"
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}>
        <div className="modalTitle">{props.title}</div>
        <div className="modalText">{props.text}</div>
        <div className="btnDiv">
          {props.config.map((item, id) => {
            return (
              <Button
                onClick={item.clicked}
                key={id}
                btnType={item.type}
                label={item.label}
                show={props.show}
              />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
