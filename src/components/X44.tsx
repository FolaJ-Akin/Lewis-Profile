import { Link } from "react-router-dom";

export default function X44(): JSX.Element {
  return (
    <div className="X44Page">
      <Link to="/" id="Link">
        Home
      </Link>
      <h1>X44 x Extreme E</h1>
      <section>
        X44, formed by seven-time Formula 1 World Champion Lewis Hamilton, will
        make its racing debut in Extreme E. Named with reference to Lewis’ own
        racing number, X44 will provide opportunities to the next generation of
        drivers, engineers and technicians whilst highlighting the most serious
        issues facing our planet and the solutions we can all be part of. Rather
        than getting behind the wheel himself, Lewis will use his role as
        founder to put his learnings into practice and create a dedicated and
        competitive team.
      </section>
      <img
        src="/images/m8639_XE_FORZA_WebsiteCarousel_1.png"
        alt="forza img"
        id="imgX44"
      />
      <p>
        Check out the X44 website{" "}
        <a href="https://www.extreme-e.com/en/index">here</a>
      </p>
    </div>
  );
}
