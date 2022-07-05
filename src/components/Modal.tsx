import React, { useEffect, useState } from 'react';

interface IModal {
  show: boolean;
  onClose: () => void;
  name?: string;
}

const Modal: React.FC<IModal> = ({ show, onClose, name }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const handleClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const content = show ? (
    <div className="w-full h-full border-2 bg-text bg-opacity-75 flex justify-center items-center absolute top-0 left-0">
      <div className="w-2/4 h-2/4 bg-background absolute">
        <button onClick={handleClick}>X</button>
        <h1>{name}</h1>
      </div>
    </div>
  ) : null;

  if (isBrowser) {
    return content;
  } else {
    return null;
  }
};

export { Modal };
