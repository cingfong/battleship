<template>
  <div class="gridWrap">
    <!-- <h3 class="title bg-blue-700 absolute">Your Grid</h3> -->
    <div
      class="bg-blue-200 flex container min-w-full h-[10%] relative"
      :key="'rowItem' + i"
      v-for="(rowItem, i) in gridSize"
    >
      <div
        class="w-1/5 border-solid border border-gray-500 -mt-px -ml-px"
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
<style>
.gridWrap {
  width: 400px;
  height: 400px;
}
</style>
