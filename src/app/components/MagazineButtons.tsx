import React from "react";

type MagazineButtonsProps = {
    clickFunction: () => void;
    text: string;
  };
  
  const MagazineButton: React.FC<MagazineButtonsProps> = ({ clickFunction, text }) => {
    return (
      <button onClick={clickFunction}>{text}</button>
    );
  };

export default MagazineButton;