interface Rocket {
  rocket_name: string;
}

interface Links {
  presskit: 'string' | null;
}

export interface Launch {
  details: string;
  flight_number: number;
  launch_year: string;
  links: Links;
  rocket: Rocket;
}

type Orders = 'asc' | 'desc';

export interface QueryHash {
  limit: number;
  offset: number;
  order: Orders;
  sort: 'flight_number';
  [key: string]: string | number;
}