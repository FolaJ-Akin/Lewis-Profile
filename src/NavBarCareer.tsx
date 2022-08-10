import { Link } from "react-router-dom";

export default function NavBarCareer(): JSX.Element {
  return (
    <div className="NavBarCareer">
      <Link to="/Career/EarlyLife" id="tab">
        Early Life
      </Link>
      {/* <> #add space evenly# </> */}
      <Link to="/Career/Karting" id="tab">
        Karting
      </Link>
      <Link to="/Career/FRandF3" id="tab">
        Formula Renualt & F3 and GP2
      </Link>
      <Link to="/Career/Formula1" id="tab">
        Formula 1
      </Link>
    </div>
  );
}
