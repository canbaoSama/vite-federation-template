<script setup lang="ts">
import IComponent from './components/IComponent.vue';
</script>

<template>
  <div>
    <h1>Vue3-host</h1>
    <IComponent :dsl="{ type: 'i-button' }" />
  </div>
</template>
