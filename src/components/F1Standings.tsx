import axios from "axios";
import { useEffect, useState } from "react";
import { Data, driverStandingsData } from "../utils/interfaces";
import DriverTile from "../utils/DriverTile";
import { Link } from "react-router-dom";

export default function F1Standings(): JSX.Element {
  const [apiData, setApiData] = useState<Data>();
  const [driverStandings, setDriverStandings] =
    useState<driverStandingsData[]>();

  useEffect(() => {
    axios
      .get(
        "https://ergast.com/api/f1/current/driverStandings.json?callback=myParser"
      )
      .then((response) => {
        const lastIndex = response.data.length;
        const messyResponse = response.data.slice(9, lastIndex - 1);
        const cleanResponse = JSON.parse(messyResponse);
        setApiData(cleanResponse);
      });
  }, []);
  useEffect(() => {
    if (apiData !== undefined) {
      const standings =
        apiData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      setDriverStandings(standings);
    }
  }, [apiData]);

  return (
    <div className="f1Standings">
      <Link to="/" id="Link">
        Home
      </Link>
      <h1>Live F1 Standings </h1>
      <h2>Season: {apiData?.MRData.StandingsTable.season}</h2>
      {driverStandings?.map((oneDriverData, index) => (
        <DriverTile
          position={oneDriverData.position}
          currentPoints={oneDriverData.points}
          racesWon={oneDriverData.wins}
          driverFirstName={oneDriverData.Driver.givenName}
          driverLastName={oneDriverData.Driver.familyName}
          constructorName={oneDriverData.Constructors[0].name}
          driverNumber={oneDriverData.Driver.permanentNumber}
          key={index}
        />
      ))}
    </div>
  );
}
