<script setup>
  import { defineProps } from 'vue';

  const props = defineProps(['title', 'value']);
</script>

<template>
  <div class="container">
    <span class="title">{{ props.title }}</span>
    <span class="value">
      {{ 
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.value)
      }}
    </span>
  </div>
</template>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }

  .title {
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .value {
    font-family: Arial, sans-serif;
    color: #4caf50;
    font-weight: bold;
    font-size: 22px;
  }
</style>