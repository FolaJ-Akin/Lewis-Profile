import { Link } from "react-router-dom";
import EarlyLife from "./careerPages/EarlyLife";
import Karting from "./careerPages/Karting";
import FRandF3 from "./careerPages/FRandF3";
import Formula1 from "./careerPages/Formula1";

export default function Career(): JSX.Element {
  return (
    <div className="CareerPage">
      <Link to="/" id="Link">
        Home
      </Link>
      <div className="CareerCarousel">
        <EarlyLife />
        <Karting />
        <FRandF3 />
        <Formula1 />
      </div>
    </div>
  );
}
