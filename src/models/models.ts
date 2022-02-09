export interface Order {
  order_id: string;
  destination: string;
  flight: number | null;
  departure_city: string | null;
  day: number | null;
}

export interface Flight {
  flight_number: number;
  departure_city: string;
  arrival_city: string;
  day: number;
}
