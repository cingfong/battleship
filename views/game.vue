<template>
  <div>
    <h3 class="title bg-blue-500">Your Grid</h3>
    <div
      class="bg-blue-200 flex container min-w-full relative"
      :key="'rowItem' + i"
      v-for="(rowItem, i) in gridSize"
    >
      <div
        class="w-1/5 p-2"
        :key="'colItem' + i"
        v-for="(colItem, i) in gridSize"
      >
        {{ i }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const gridSize = 10;
</script>
