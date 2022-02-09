<script setup lang="ts">
import FlightTable from "@/components/FlightTable.vue";
import type { Flight } from "@/models/models";

const props = defineProps<{
  data: Flight[];
}>();

const emit = defineEmits(["showFlightDetail"]);

const handleShowFlightDetail = (flight: Flight) => {
  emit("showFlightDetail", flight);
};
</script>

<template>
  <div class="font-medium">Day 1</div>
  <FlightTable
    :data="props.data.filter((flight: Flight) => flight.day === 1)"
    @showFlightDetail="handleShowFlightDetail"
  ></FlightTable>

  <div class="font-medium">Day 2</div>
  <FlightTable
    :data="props.data.filter((flight: Flight) => flight.day === 2)"
    @showFlightDetail="handleShowFlightDetail"
  ></FlightTable>
</template>
