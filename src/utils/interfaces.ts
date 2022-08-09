export interface Data {
  MRData: MRData;
}

export interface MRData {
  xmlns: string;
  series: string;
  limit: number;
  offset: number;
  total: number;
  StandingsTable: standingsTableData;
}

export interface standingsTableData {
  season: number;
  StandingsLists: standingsListData[];
}

export interface standingsListData {
  DriverStandings: driverStandingsData[];
  round: number;
  season: number;
}

export interface driverStandingsData {
  position: number;
  positionText: number;
  points: number;
  wins: number;
  Driver: DriverData;
  Constructors: constructorsData[];
}

export interface DriverData {
  driverId: string;
  permanentNumber: number;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  nationality: string;
  dateOfBirth: Date;
}

export interface constructorsData {
  constructorId: string;
  url: string;
  nationality: string;
  name: string;
}
