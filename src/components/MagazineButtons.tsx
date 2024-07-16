type MagazineButtonsProps = {
    clickFunction: () => void;
    text: string;
  };
  
  const MagazineButton: React.FC<MagazineButtonsProps> = ({ clickFunction, text }) => {
    return (
      <button className="page-buttons" onClick={clickFunction}>{text}</button>
    );
  };

export default MagazineButton;