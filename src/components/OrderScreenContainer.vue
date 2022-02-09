<script setup lang="ts">
import type { Order } from "@/models/models";
import OrderTable from "./OrderTable.vue";

const props = defineProps<{
  data: Order[];
}>();
</script>

<template>
  <OrderTable :data="props.data"></OrderTable>
</template>
