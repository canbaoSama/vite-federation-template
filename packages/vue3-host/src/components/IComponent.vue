<script setup lang="ts">
defineProps<{
    dsl: Record<string, any>;
}>();
</script>

<template>
    <component :is="dsl.type" text="按钮"></component>
</template>
