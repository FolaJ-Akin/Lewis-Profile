import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  return (
    <div className="Navbar">
      <Link to="/Standings" id="Link">
        F1 Standings
      </Link>
      <Link to="/EarlyLife" id="Link">
        Career
      </Link>
      <Link to="/X44" id="Link">
        X44
      </Link>
    </div>
  );
}
