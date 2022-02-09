<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <el-container>
    <el-header>
      <span class="font-bold font-medium"> Transport.ly </span>
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style>
@import "@/assets/base.scss";
</style>
