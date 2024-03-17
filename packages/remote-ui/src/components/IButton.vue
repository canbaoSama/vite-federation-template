<script setup lang="ts">
defineProps<{ text: string }>();
</script>

<template>
  <div class="wrapper">
    <h3>Remote IButton</h3>

    <div class="card">
      <button type="button">{{ text }}</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  border: 1px solid red;
}
</style>
