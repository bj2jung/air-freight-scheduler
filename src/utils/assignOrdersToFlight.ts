import type { Flight } from "@/models/models";

export const assignOrdersToFlights = (flightData: Flight[], orderData: any) => {
  const flightDataCopy = [...flightData];

  const hashMap: any = {};

  flightDataCopy.forEach((flight: Flight, index: number) => {
    if (hashMap[flight.arrival_city] == undefined) {
      hashMap[flight.arrival_city] = { ...flight, ordersAssignedToFlight: 0 };
      flightDataCopy.splice(index, 1);
    }
  });

  const result = Object.keys(orderData).map((key) => {
    const orderDestination = orderData[key].destination;

    // assign order to appropriate flight
    let assignedFlight: Flight | undefined = undefined;

    // if there is space in the flight in hashmap
    if (hashMap[orderDestination]?.ordersAssignedToFlight < 20) {
      hashMap[orderDestination].ordersAssignedToFlight += 1;
      assignedFlight = hashMap[orderDestination];
    }
    // if the current flight in hashmap is full
    else if (hashMap[orderDestination]?.ordersAssignedToFlight >= 20) {
      // check if there is another plane with same destination
      const nextPlaneIndex = flightDataCopy.findIndex(
        (flight) => flight.arrival_city === orderDestination
      );

      // if a plane exists
      if (nextPlaneIndex !== -1) {
        hashMap[orderDestination] = {
          ...flightDataCopy[nextPlaneIndex],
          ordersAssignedToFlight: 0,
        };
        flightDataCopy.splice(nextPlaneIndex, 1);
        assignedFlight = hashMap[orderDestination];
      }
    }

    return {
      order_id: key,
      destination: <string>orderData[key].destination,
      flight: assignedFlight?.flight_number || null,
      departure_city: assignedFlight?.departure_city || null,
      day: assignedFlight?.day || null,
    };
  });

  return result;
};
