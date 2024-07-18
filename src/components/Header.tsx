
import IssueSelect from "./IssueSelect";

export default function Header() {
  return (
    <header className="header">
  <div className="logo">
    
    <h3 className="est">EST 2022</h3>
    <h1 className="title">Function & Fashion</h1>
    <h2 className="subtitle">Faces of Materia Glamours</h2>
    
  </div>
      <IssueSelect />
    </header>
  );
}