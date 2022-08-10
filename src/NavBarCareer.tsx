import { Link } from "react-router-dom";

export default function NavBarCareer(): JSX.Element {
  return (
    <div className="NavBarCareer">
      <Link to="/" id="tab">
        Home
      </Link>
      <Link to="/EarlyLife" id="tab">
        Early Life
      </Link>
      <Link to="/Karting" id="tab">
        Karting
      </Link>
      <Link to="/FRandF3" id="tab">
        Formula Renualt & F3 and GP2
      </Link>
      <Link to="/Formula1" id="tab">
        Formula 1
      </Link>
    </div>
  );
}
