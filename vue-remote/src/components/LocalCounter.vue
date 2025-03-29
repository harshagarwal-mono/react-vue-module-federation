<script setup>
import { ref } from 'vue'

const count = ref(0)

const increment = () => {
  count.value++
}
</script>

<template>
  <div class="counter">
    <p>LocalCount is {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<style scoped>
.counter {
  background-color: bisque;
  min-width: 200px;
  min-height: 150px;
  max-width: 300px;
  max-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgb(231, 131, 10, 0.6);
  gap: 10px;
  color: #242424;
}

.counter button {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: 1px solid #4caf50;
  border-radius: 5px;
  cursor: pointer;
}

.counter button:hover {
  background-color: white;
  color: #4caf50;
}
</style>
