<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import {
    __federation_method_getRemote,
    __federation_method_unwrapDefault,
} from 'virtual:__federation__';

const props = defineProps<{
    dsl: Record<string, any>;
}>();

const com = defineAsyncComponent(async () => {
    const module = await __federation_method_getRemote(
        'remote-ui',
        `./${props.dsl.type}`
    );
    return __federation_method_unwrapDefault(module);
});
</script>

<template>
    <component :is="com" :text="dsl.config.text">
    </component>
</template>
