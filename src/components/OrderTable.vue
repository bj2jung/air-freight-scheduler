<script setup lang="ts">
import type { Order } from "@/models/models";

const props = defineProps<{
  data: Order[];
}>();
</script>

<template>
  <el-table :data="props.data">
    <el-table-column prop="order_id" label="Order" width="180" />
    <el-table-column prop="flight" label="Flight" width="180" />
    <el-table-column prop="departure_city" label="Departure" width="180" />
    <el-table-column prop="destination" label="Arrival" width="180" />
    <el-table-column prop="day" label="Day" width="180" />
  </el-table>
</template>
