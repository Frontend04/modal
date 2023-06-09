import React, { Fragment } from "react";
import "./Button.css";

interface ButtonProps {
  onClick: () => void;
  btnType: string;
  label: string;
  show: boolean;
}

const Button: React.FC<ButtonProps> = ({ onClick, btnType, label }) => (
  <Fragment>
    <button onClick={onClick} className={["Button", btnType].join(" ")}>
      {label}
    </button>
  </Fragment>
);

export default Button;
