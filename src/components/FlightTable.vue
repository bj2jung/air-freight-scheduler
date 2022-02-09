<script setup lang="ts">
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
  <el-table :data="props.data">
    <el-table-column prop="flight_number" label="Flight" width="180" />
    <el-table-column prop="departure_city" label="Departure" width="180" />
    <el-table-column prop="arrival_city" label="Arrival" width="180" />
    <el-table-column label="View Flight">
      <template #default="scope">
        <el-button type="primary" @click="handleShowFlightDetail(scope.row)"
          >View Flight</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>
