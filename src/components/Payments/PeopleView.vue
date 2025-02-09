<script setup>
  import { getGrantTotal, store } from '../../storePayment/store';
  import Label from './Label.vue'
  import PersonView from './PersonView.vue'
</script>

<template>
  <div class="no-items" v-if="store.people.length === 0">No items</div>
  <div class="people-view" v-if="store.people.length > 0">
    <header class="header">
      <div>
        <Label title="Total + Tip: " :value="getGrantTotal()"/>
      </div>
      <div>
        <Label title="Remaining: " :value="store.params.remaining"/>
      </div>
    </header>

    <div>
      <div class="people-container">
        <PersonView 
          v-for="person in store.people" :key="person.id" 
          :id="person.id" 
          :number-of-person="person.numberOfPerson" 
          :total-per-person="person.totalPerPerson" 
          :paid="person.paid" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.people-container{
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
} 
.no-items {
  text-align: center;
  font-size: 1.2rem;
  color: #6b7280;
  padding: 1.5rem;
}

.people-view {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #f3f4f6;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid #d1d5db;
}
</style>