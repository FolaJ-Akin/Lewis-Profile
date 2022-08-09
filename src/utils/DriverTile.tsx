interface props {
  position: number;
  currentPoints: number;
  racesWon: number;
  driverFirstName: string;
  driverLastName: string;
  driverNumber: number;
  constructorName: string;
}

export default function DriverTile(Prop: props): JSX.Element {
  return (
    <div className="driverTile">
      <b>{Prop.position}</b>
      <h4>
        {Prop.driverFirstName} {Prop.driverLastName}
      </h4>
      <b>Driver Number: {Prop.driverNumber}</b>
      <b>Constructor: {Prop.constructorName}</b>
      <br />
      <b>PTS: {Prop.currentPoints}</b>
      <br />
      <b>Races won: {Prop.racesWon}</b>
    </div>
  );
}
