<script setup>
  import { defineProps, ref } from 'vue';
  import { pay } from '../../storePayment/store'

  const props = defineProps(['id', 'numberOfPerson', 'totalPerPerson', 'paid']);
  let paid = ref(false);

  function handleChange(e) {
    paid = e.target.checked;
    pay(props.id, paid);
  }
</script>

<template>
  <div :class="['person', props.paid ? 'person-paid' : 'person-no-paid']">
    <div class="person-number">
      Person {{ props.numberOfPerson }}
    </div>
    <div class="person-to-pay">
      {{ 
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(props.totalPerPerson)
      }}
    </div>
    <div class="paid">
      <input type="checkbox" class="input-paid" name="" id="" @change="handleChange"> Paid
    </div>
  </div>
</template>

<style scoped>
.person {
  padding: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.person-paid {
  background-color: #c1f7d6;
}

.person-no-paid {
  background-color: #eedada;
}

.person-number {
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 0.5rem;
}

.person-to-pay {
  font-size: 1.125rem;
  color: #4caf50;
  font-weight: bold;
  margin-bottom: 1rem;
}

.paid {
  display: flex;
  align-items: center;
}

.input-paid {
  appearance: none;
  width: 22px;
  height: 22px;
  margin-right: 10px;
  border: 2px solid #6e6e6e;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  cursor: pointer;
  transition: background 0.3s, border-color 0.3s;
}

.input-paid:checked {
  background-color: #10b981;
  border-color: #10b981;
}

.input-paid:checked::after {
  content: ':)';
  font-size: 14px;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.input-paid:hover {
  border-color: #059669;
}
</style>