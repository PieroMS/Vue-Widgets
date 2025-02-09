import { reactive } from "vue";

export const store = reactive({
  params: {
    total: 0,
    tip: 0,
    people: 0,
    remaining: 0
  }, 
  people: []
});

export function getGrantTotal(){
  // calculando el total más la propina
  return store.params.total*(store.params.tip/100 + 1);
}

// calcular cuanto le toca a cada persona
export function calculate(){
  store.people = [];
  const total = store.params.total;
  const tip = store.params.tip;
  const people = store.params.people;

  const totalPerPerson = getGrantTotal() / people;

  store.params.remaining = getGrantTotal();

  //para guardar a las personas
  for(let i = 0; i < people; i++){
    store.people.push({
      id: crypto.randomUUID(),
      numberOfPerson: i+1,
      totalPerPerson,
      paid: false
    });
  }

  calculateRemaining();
}

function calculateRemaining(){
  const missingToPay = store.people.filter(item => !item.paid); // fiñtrar a las personas que no han pagado en paid false de la funcion calculate
  const remaining = missingToPay.reduce(
    (acc, item) => (acc += item.totalPerPerson), 0
  );
  store.params.remaining = remaining;
}

export function pay(id, paid){ // id de la persona que va a pagar y el estado (true o false)
  const person = store.people.find(item => item.id === id);
  if(person){
    person.paid = paid;
    calculateRemaining();
  }
}