<script setup lang="ts">
import { getFlightData, getOrderData } from "@/actions/api";
import FlightScreenContainer from "@/components/FlightScreenContainer.vue";
import type { Flight, Order } from "@/models/models";
import { assignOrdersToFlights } from "@/utils/assignOrdersToFlight";
import { onMounted, ref } from "vue";
import OrderScreenContainer from "../components/OrderScreenContainer.vue";
import FlightDetailScreenContainer from "../components/FlightDetailScreenContainer.vue";

const isFlightScreen = ref<boolean>(true);
const flightData = ref<Flight[]>([]);
const orderData = ref<Order[]>([]);
const showFlightDetails = ref<boolean>(false);
const selectedFlight = ref<number>();

onMounted(async () => {
  const flightDataResponse = await getFlightData();
  const orderDataResponse = await getOrderData();

  if (flightDataResponse && orderDataResponse) {
    flightData.value = flightDataResponse;

    const ordersAssignedData = assignOrdersToFlights(
      flightDataResponse,
      orderDataResponse
    );

    orderData.value = ordersAssignedData;
  }
});

const handleShowFlightDetail = (flight: Flight) => {
  selectedFlight.value = flight.flight_number;
  showFlightDetails.value = true;
};
</script>

<template>
  <el-button type="primary" @click="() => (isFlightScreen = !isFlightScreen)">{{
    isFlightScreen ? "View Order Schedule" : "View Flight Schedule"
  }}</el-button>
  <div class="font-large font-bold">
    {{ isFlightScreen ? "Flights" : "Orders" }}
  </div>
  <FlightScreenContainer
    v-if="isFlightScreen"
    :data="flightData"
    @showFlightDetail="handleShowFlightDetail"
  ></FlightScreenContainer>
  <OrderScreenContainer
    v-else="isFlightScreen"
    :data="orderData"
  ></OrderScreenContainer>
  <el-dialog v-model="showFlightDetails" width="50%" center>
    <FlightDetailScreenContainer
      :data="orderData"
      :selectedFlight="selectedFlight"
    />

    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="showFlightDetails = false"
          >Close</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>
