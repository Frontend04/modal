import React from 'react';

import './BackDrop.css';

interface BackDropProps {
  show: boolean;
  onClick: () => void;
}

const BackDrop: React.FC<BackDropProps> = ({ show, onClick }) => (
  show ? <div className="Backdrop" onClick={onClick} /> : null
);

export default BackDrop;
