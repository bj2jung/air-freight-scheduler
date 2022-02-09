<script setup lang="ts">
import type { Order } from "@/models/models";
import OrderTable from "./OrderTable.vue";

const props = defineProps<{
  data: Order[];
  selectedFlight: number | undefined;
}>();
</script>

<template>
  <div class="font-medium">Flight {{ selectedFlight }}</div>
  <OrderTable
    :data="props.data.filter((order:Order) => order.flight === selectedFlight)"
  ></OrderTable>
</template>
