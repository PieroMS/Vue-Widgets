<script setup>
  import { ref } from 'vue';
  import { store, calculate } from '../../storePayment/store';

  const total = ref(0);
  const tip = ref(0);
  const people = ref(0);

  function handleSubmit() {
    store.params.total = total;
    store.params.tip = tip;
    store.params.people = people;
    // calcular cuanto le toca a cada persona
    calculate();
  }
</script>

<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="form-container">
        <div class="input-group">
          <label for="total" class="label">Total</label>
          <input type="text" id="total" required placeholder="Total" v-model="total" />
        </div>
        <div class="input-group">
          <label for="tip" class="label">Tip %</label>
          <input type="text" id="tip" required placeholder="Tip %" v-model="tip" />
        </div>
        <div class="input-group">
          <label for="people" class="label">People</label>
          <input type="text" id="people" required placeholder="People" v-model="people" />
        </div>
        <div class="input-group">
          <button type="submit" class="btn btn-submit">Calculate</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
  .container {
    padding: 2rem;
    margin: 0 auto;
    background-color: #ebebeb;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 500px;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
  }

  .form-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    padding: 5px 10px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1.25rem;
  }

  .input-group input {
    width: 93%;
    padding: 0.5rem 1rem;
    border: 2px solid #d5d5d5;
    border-radius: 0.5rem;
    font-size: 1.125rem;
    color: #333;
  }

  .input-group input:focus {
    border-color: #59eb5e;
    outline: none;
    box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.2);
  }

  .label {
    width: 100%;
    text-align: start;
    font-family: Arial, sans-serif;
    margin-bottom: 5px;
  }

  .btn {
    width: 100%;
    height: 2.25rem;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.5rem;
    background-color: #4caf50;
    color: #fff;
    cursor: pointer;
    transition: 0.4s;
  }

  .btn:hover {
    background-color: #4ece52;
  }
</style>