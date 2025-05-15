<script setup>
import { ref, onMounted } from 'vue';
import fallback from '../src/Fallback.vue';

const props = defineProps({
  importComponent: {
    type: String,
    required: true
  }
});

const LoadedComponent = ref(null);
const isLoading = ref(true);

const delay = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

const importRemoteOrFallback = async (importComponent) => {
  try {
    const mod = await importComponent();
    isLoading.value = false;


    return mod.default;
  } catch (e) {
    console.warn('Failed to load remote, using fallback:', e);
    isLoading.value = false;

    return fallback;
  }
};

onMounted(async () => {
  LoadedComponent.value = await importRemoteOrFallback(props.importComponent);
});
</script>

<template>
  <div v-if="isLoading">Loading component...</div>
  <component :is="LoadedComponent" v-else />
</template>
