<!-- <script setup>
import { ref, onMounted } from 'vue';

const LoadedComponent = ref(null);

const importRemoteOrFallback = async (importComponent) => {
  try {
    const module = await import(importComponent);
    return module.default;
  } catch (e) {
    const fallback = await import('../Fallback.vue');
    return fallback.default;
  }
};


onMounted(async () => {
  LoadedComponent.value = await importRemoteOrFallback();
});
</script>

<template>
  <main>
    <h1>Ishwar Datt Mishra</h1>
    <h2>Micro Frontend</h2>
    <h3>Vue Component Shared Via MF</h3>
    <hr />

    <component :is="LoadedComponent" v-if="LoadedComponent" />
  </main>
</template> -->

<script setup>
import RemoteVueComponent from '../RemoteVueComponent.vue';
</script>

<template>
  <main>
    <h1>Vue Microfont End POC</h1>
    <h2>Micro Frontend</h2>
    <h3>Vue Component Shared Via MF</h3>
    <hr />

    <RemoteVueComponent :importComponent = "() => import('remoteApp/LocalCounter')" />
  </main>
</template>

