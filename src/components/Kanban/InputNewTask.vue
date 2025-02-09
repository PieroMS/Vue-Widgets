<script setup>
  import { ref, defineEmits } from 'vue';

  const text = ref('');
  const emits = defineEmits(['onNewItem']); //eso es el nombre del emit onNewItem

  function handleSubmit()
  {
    if(text !== ''){
      emits('onNewItem', text);
      text.value = '';
    }
  }

</script>

<template>
  <form action="" @submit.prevent="handleSubmit">
    <input type="text" v-model="text" class="task-input" placeholder="New task">
  </form>
</template>

<style scoped>
  .task-input {
      padding: 10px;
      margin: 10px 0;
      border: 2px solid #4CAF50;
    background: white;
      border-radius: 5px;
      font-size: 16px;
      width: calc(100% - 22px);
      box-sizing: border-box;
      transition: border-color 0.3s;
      font-family: Arial, sans-serif;
  }
  
  .task-input:focus {
    border: 2px solid #59eb5e;
    outline: none;
  }
</style>